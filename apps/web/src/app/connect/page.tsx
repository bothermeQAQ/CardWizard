"use client";

import { useState, useEffect, useCallback } from 'react';
import { usePlaidLink } from 'react-plaid-link';

export default function ConnectPage() {
  const [linkToken, setLinkToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [exchangeStatus, setExchangeStatus] = useState<string | null>(null);

  // Get a link token from our API when the component mounts
  useEffect(() => {
    const getToken = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/plaid/link-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: 'user-' + Math.floor(Math.random() * 1000000) }),
        });

        if (!response.ok) {
          throw new Error('Failed to generate link token');
        }

        const data = await response.json();
        setLinkToken(data.link_token);
      } catch (err) {
        console.error('Error getting link token:', err);
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    getToken();
  }, []);

  // Handle the public token exchange
  const exchangePublicToken = useCallback(async (publicToken: string) => {
    try {
      setExchangeStatus('Exchanging public token...');
      const response = await fetch('/api/plaid/exchange', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ public_token: publicToken }),
      });

      if (!response.ok) {
        throw new Error('Failed to exchange public token');
      }

      const data = await response.json();
      console.log('Successfully exchanged public token:', data);
      setExchangeStatus('Successfully connected your account!');
    } catch (err) {
      console.error('Error exchanging public token:', err);
      setExchangeStatus('Error connecting your account. Please try again.');
    }
  }, []);

  // Success handler from Plaid Link
  const onSuccess = useCallback(
    (publicToken: string, metadata: any) => {
      console.log('Success! Public Token:', publicToken);
      console.log('Metadata:', metadata);
      exchangePublicToken(publicToken);
    },
    [exchangePublicToken]
  );

  // Initialize Plaid Link
  const { open, ready } = usePlaidLink({
    token: linkToken || '',
    onSuccess,
    onExit: (err, metadata) => {
      if (err) {
        console.error('Error in Plaid Link flow:', err);
      }
      console.log('Plaid Link metadata on exit:', metadata);
    },
  });

  // Render the component
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Connect Your Bank Account</h1>
      
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4 w-full max-w-md">
          {error}
        </div>
      )}
      
      {exchangeStatus && (
        <div className="bg-blue-100 text-blue-700 p-4 rounded mb-4 w-full max-w-md">
          {exchangeStatus}
        </div>
      )}
      
      <button
        onClick={() => open()}
        disabled={!ready || !linkToken || loading}
        className="bg-blue-600 text-white py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {loading ? 'Loading...' : 'Connect Your Bank Account'}
      </button>
      
      <p className="mt-4 text-sm text-gray-600">
        Connect your bank account to CardWizard to get personalized credit card recommendations.
      </p>
    </div>
  );
} 
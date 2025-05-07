import { Injectable } from '@nestjs/common';
import { Configuration, CountryCode, PlaidApi, PlaidEnvironments, Products } from 'plaid';

@Injectable()
export class PlaidService {
  private plaidClient: PlaidApi;

  constructor() {
    // Initialize Plaid client with environment variables
    const configuration = new Configuration({
      basePath: PlaidEnvironments[process.env.PLAID_ENV || 'sandbox'],
      baseOptions: {
        headers: {
          'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
          'PLAID-SECRET': process.env.PLAID_SECRET,
          'Plaid-Version': '2020-09-14',
        },
      },
    });

    this.plaidClient = new PlaidApi(configuration);
  }

  /**
   * Create a link token for initializing Plaid Link
   * @param userId User ID for which to create the link token
   * @returns Link token response
   */
  async createLinkToken(userId: string) {
    try {
      const request = {
        user: {
          client_user_id: userId,
        },
        client_name: 'CardWizard',
        products: ['transactions'] as Products[],
        language: 'en',
        country_codes: ['US'] as CountryCode[],
      };

      const response = await this.plaidClient.linkTokenCreate(request);
      return response.data;
    } catch (error) {
      console.error('Error creating link token:', error);
      throw error;
    }
  }

  /**
   * Exchange a public token for an access token
   * @param publicToken Public token from Plaid Link
   * @returns Access token response
   */
  async exchangePublicToken(publicToken: string) {
    try {
      const response = await this.plaidClient.itemPublicTokenExchange({
        public_token: publicToken,
      });
      return response.data;
    } catch (error) {
      console.error('Error exchanging public token:', error);
      throw error;
    }
  }
} 
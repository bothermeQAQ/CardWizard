# CardWizard

CardWizard is a comprehensive personal finance web application that helps users optimize their credit card usage, track budgets, and plan reward points.

## Core Features

- **Intelligent Card Recommendations**: Get real-time suggestions on which card to use for maximum cashback or points based on merchant and category.
- **Spend Analysis**: AI-powered analysis of spending patterns and necessity using OpenAI.
- **Budget Visualization**: Track spending against budgets with intuitive charts and timely notifications.
- **Reward Point Planning**: Optimize credit card usage across multiple cards to maximize reward benefits.

## Technical Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: NestJS (TypeScript)
- **Database**: PostgreSQL for transactions and rules, Redis for caching
- **External APIs**: 
  - Plaid for transaction data
  - CardPointers for cashback/points rules
  - OpenAI (GPT-4o) for spend analysis
- **Deployment**: Vercel

## Project Status

CardWizard is currently in early development. See the project status board in our documentation for current progress.

## Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm
- PostgreSQL
- Redis

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/cardwizard.git

# Navigate to the project
cd cardwizard

# Install dependencies
pnpm install

# Start development servers
pnpm dev
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 
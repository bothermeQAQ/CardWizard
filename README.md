# CardWizard

CardWizard is a comprehensive personal finance web application that helps users optimize their credit card usage, track budgets, and plan reward points.
CardWizard 是一款综合性的个人理财 Web 应用，帮助用户优化信用卡使用、追踪预算并规划奖励积分。

## Core Features / 核心功能

- **Intelligent Card Recommendations / 智能卡片推荐**  
  Get real-time suggestions on which card to use for maximum cashback or points based on merchant and category.  
  根据商家和类别实时建议使用哪张卡以获得最大返现或积分。

- **Spend Analysis / 消费分析**  
  AI-powered analysis of spending patterns and necessity using OpenAI.  
  使用 OpenAI 对消费模式和必要性进行 AI 驱动的分析。

- **Budget Visualization / 预算可视化**  
  Track spending against budgets with intuitive charts and timely notifications.  
  使用直观图表和及时通知跟踪预算使用情况。

- **Reward Point Planning / 积分规划**  
  Optimize credit card usage across multiple cards to maximize reward benefits.  
  在多张信用卡之间优化使用以最大化奖励收益。

## Technical Stack / 技术栈

- **Frontend (前端)**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui  
- **Backend (后端)**: NestJS (TypeScript)  
- **Database (数据库)**: PostgreSQL for transactions and rules, Redis for caching  
  PostgreSQL 用于交易和规则数据，Redis 用于缓存。  
- **External APIs (外部接口)**:  
  - Plaid for transaction data (用于获取交易数据)  
  - CardPointers for cashback/points rules (用于返现/积分规则)  
  - OpenAI (GPT-4o) for spend analysis (用于消费分析)  
- **Deployment (部署)**: Vercel  

## Project Status / 项目状态

CardWizard is currently in early development. See the project status board in our documentation for current progress.  
CardWizard 目前处于早期开发阶段。有关当前进度，请参阅我们的项目状态看板。

## Getting Started / 快速开始

### Prerequisites / 前置条件

- Node.js (v18+)  
- pnpm  
- PostgreSQL  
- Redis  

### Installation / 安装

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

```bash
# 克隆仓库
git clone https://github.com/yourusername/cardwizard.git

# 进入项目目录
cd cardwizard

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

## Contributing / 贡献

Contributions are welcome! Please feel free to submit a Pull Request.  
欢迎贡献！请随时提交拉取请求 (Pull Request)。 
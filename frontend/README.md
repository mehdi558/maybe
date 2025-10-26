# Maybe Frontend

This is the Next.js frontend for the Maybe personal finance application.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
frontend/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Dashboard page
│   ├── accounts/            # Accounts pages
│   ├── transactions/        # Transactions pages
│   ├── budgets/             # Budgets pages
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── design-system.css    # Design system tokens
│   └── design-system/       # Design system utilities
├── components/              # Reusable React components
├── lib/                     # Utility functions
├── public/                  # Static assets
│   ├── images/             # Images
│   └── fonts/              # Font files
└── package.json
```

## Features

### Current Pages

- **Dashboard** - Overview of net worth, balance sheet, and recent accounts
- **Accounts** - List and manage all financial accounts (bank, investment, credit, loans)
- **Transactions** - View and filter all transactions
- **Budgets** - Track spending by category with visual progress bars

### Static Data

All pages currently use mock/static data for demonstration purposes. This will be replaced with API calls to a REST API backend in the future.

## Design System

The application uses a custom design system based on Tailwind CSS with semantic tokens:

- Use `text-primary`, `text-secondary`, `text-subdued` for text colors
- Use `bg-container`, `bg-surface`, `bg-container-inset` for backgrounds
- Use `border-primary`, `border-secondary` for borders
- Refer to `app/design-system.css` for all available tokens

## Next Steps

### Planned Features

1. **API Integration** - Connect to REST API backend
2. **Authentication** - Add login/signup pages
3. **State Management** - Add state management for API data
4. **Real-time Updates** - WebSocket support for live data
5. **Charts** - Add D3.js or Chart.js for financial visualizations
6. **Forms** - Add forms for creating/editing accounts, transactions, budgets
7. **Settings** - User profile and preferences pages

### API Integration Plan

The frontend will consume a REST API with these endpoints:

- `GET /api/accounts` - List all accounts
- `GET /api/accounts/:id` - Get single account
- `POST /api/accounts` - Create account
- `GET /api/transactions` - List transactions (with filters)
- `GET /api/budgets` - List budgets
- `POST /api/budgets` - Create budget
- `GET /api/dashboard` - Dashboard summary data

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technology Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **React 19** - UI library

## Contributing

This is a conversion of the original Rails + Hotwire application to a standalone Next.js frontend. The goal is to separate the frontend from the backend to allow for more flexibility in deployment and scaling.

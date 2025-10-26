import Image from "next/image";
import Link from "next/link";

// Mock transactions data
const mockTransactions = [
  {
    id: 1,
    date: "2025-10-25",
    merchant: "Whole Foods",
    category: "Groceries",
    amount: -125.43,
    account: "Chase Checking",
  },
  {
    id: 2,
    date: "2025-10-24",
    merchant: "Shell Gas Station",
    category: "Transportation",
    amount: -55.00,
    account: "Chase Checking",
  },
  {
    id: 3,
    date: "2025-10-23",
    merchant: "Amazon",
    category: "Shopping",
    amount: -89.99,
    account: "Chase Sapphire",
  },
  {
    id: 4,
    date: "2025-10-22",
    merchant: "Salary Deposit",
    category: "Income",
    amount: 5000.00,
    account: "Chase Checking",
  },
  {
    id: 5,
    date: "2025-10-21",
    merchant: "Netflix",
    category: "Entertainment",
    amount: -15.99,
    account: "Chase Sapphire",
  },
  {
    id: 6,
    date: "2025-10-20",
    merchant: "Starbucks",
    category: "Food & Drink",
    amount: -6.50,
    account: "Chase Checking",
  },
];

const categories = ["All", "Groceries", "Transportation", "Shopping", "Income", "Entertainment", "Food & Drink"];

export default function TransactionsPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Navigation */}
      <nav className="bg-container border-b border-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logomark-color.svg"
                  alt="Maybe"
                  width={32}
                  height={32}
                />
                <span className="font-semibold text-lg text-primary">Maybe</span>
              </div>
              <div className="hidden md:flex gap-6">
                <Link href="/" className="text-secondary hover:text-primary">
                  Dashboard
                </Link>
                <Link href="/accounts" className="text-secondary hover:text-primary">
                  Accounts
                </Link>
                <Link href="/transactions" className="text-primary hover:text-secondary">
                  Transactions
                </Link>
                <Link href="/budgets" className="text-secondary hover:text-primary">
                  Budgets
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-inverse text-white rounded-lg hover:bg-inverse-hover">
                New Transaction
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-medium text-primary">Transactions</h1>
          <p className="text-base text-secondary">Track all your financial transactions</p>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          <input
            type="text"
            placeholder="Search transactions..."
            className="flex-1 min-w-[300px] px-4 py-2 rounded-lg border border-secondary bg-container text-primary placeholder:text-subdued focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="px-4 py-2 rounded-lg border border-secondary bg-container text-primary focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Accounts</option>
            <option>Chase Checking</option>
            <option>Ally Savings</option>
            <option>Chase Sapphire</option>
          </select>
        </div>

        {/* Category Filters */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                category === "All"
                  ? "bg-inverse text-white"
                  : "bg-container-inset text-secondary hover:bg-container-inset-hover"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Transactions List */}
        <div className="bg-container rounded-xl shadow-sm border border-secondary overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-container-inset border-b border-secondary">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">
                    Merchant
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">
                    Account
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-secondary uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-secondary">
                {mockTransactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-container-hover">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-primary">
                      {new Date(transaction.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-primary">{transaction.merchant}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-container-inset text-secondary">
                        {transaction.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary">
                      {transaction.account}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <span
                        className={
                          transaction.amount > 0 ? "text-success" : "text-destructive"
                        }
                      >
                        {transaction.amount > 0 ? "+" : ""}
                        ${Math.abs(transaction.amount).toFixed(2)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-between items-center">
          <p className="text-sm text-secondary">
            Showing 1 to {mockTransactions.length} of {mockTransactions.length} transactions
          </p>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg border border-secondary bg-container text-secondary hover:bg-container-hover disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              Previous
            </button>
            <button className="px-4 py-2 rounded-lg border border-secondary bg-container text-secondary hover:bg-container-hover disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

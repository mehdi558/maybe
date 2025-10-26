import Image from "next/image";
import Link from "next/link";

// Mock budget data
const mockBudgets = [
  {
    id: 1,
    category: "Groceries",
    budgeted: 600,
    spent: 425.50,
    remaining: 174.50,
    percentUsed: 71,
  },
  {
    id: 2,
    category: "Transportation",
    budgeted: 200,
    spent: 155.00,
    remaining: 45.00,
    percentUsed: 78,
  },
  {
    id: 3,
    category: "Entertainment",
    budgeted: 150,
    spent: 89.99,
    remaining: 60.01,
    percentUsed: 60,
  },
  {
    id: 4,
    category: "Food & Drink",
    budgeted: 300,
    spent: 245.75,
    remaining: 54.25,
    percentUsed: 82,
  },
  {
    id: 5,
    category: "Shopping",
    budgeted: 250,
    spent: 189.99,
    remaining: 60.01,
    percentUsed: 76,
  },
  {
    id: 6,
    category: "Bills & Utilities",
    budgeted: 500,
    spent: 500.00,
    remaining: 0,
    percentUsed: 100,
  },
];

const totalBudgeted = mockBudgets.reduce((sum, b) => sum + b.budgeted, 0);
const totalSpent = mockBudgets.reduce((sum, b) => sum + b.spent, 0);
const totalRemaining = totalBudgeted - totalSpent;

export default function BudgetsPage() {
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
                <Link href="/transactions" className="text-secondary hover:text-primary">
                  Transactions
                </Link>
                <Link href="/budgets" className="text-primary hover:text-secondary">
                  Budgets
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-inverse text-white rounded-lg hover:bg-inverse-hover">
                New Budget
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-medium text-primary">Budgets</h1>
          <p className="text-base text-secondary">Track your spending by category</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-container p-6 rounded-xl shadow-sm border border-secondary">
            <h3 className="text-sm text-secondary mb-2">Total Budgeted</h3>
            <p className="text-2xl font-semibold text-primary">
              ${totalBudgeted.toLocaleString()}
            </p>
            <p className="text-sm text-secondary mt-1">This month</p>
          </div>
          <div className="bg-container p-6 rounded-xl shadow-sm border border-secondary">
            <h3 className="text-sm text-secondary mb-2">Total Spent</h3>
            <p className="text-2xl font-semibold text-destructive">
              ${totalSpent.toLocaleString()}
            </p>
            <p className="text-sm text-secondary mt-1">
              {((totalSpent / totalBudgeted) * 100).toFixed(1)}% of budget
            </p>
          </div>
          <div className="bg-container p-6 rounded-xl shadow-sm border border-secondary">
            <h3 className="text-sm text-secondary mb-2">Remaining</h3>
            <p className="text-2xl font-semibold text-success">
              ${totalRemaining.toLocaleString()}
            </p>
            <p className="text-sm text-secondary mt-1">Available to spend</p>
          </div>
        </div>

        {/* Budget Categories */}
        <div className="space-y-4">
          {mockBudgets.map((budget) => (
            <div
              key={budget.id}
              className="bg-container p-6 rounded-xl shadow-sm border border-secondary"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary">{budget.category}</h3>
                  <p className="text-sm text-secondary">
                    ${budget.spent.toFixed(2)} of ${budget.budgeted.toFixed(2)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-primary">
                    ${budget.remaining.toFixed(2)}
                  </p>
                  <p className="text-sm text-secondary">remaining</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full h-3 bg-container-inset rounded-full overflow-hidden">
                <div
                  className={`absolute top-0 left-0 h-full rounded-full transition-all ${
                    budget.percentUsed >= 100
                      ? "bg-red-500"
                      : budget.percentUsed >= 80
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                  style={{ width: `${Math.min(budget.percentUsed, 100)}%` }}
                />
              </div>

              {/* Warning for overspending */}
              {budget.percentUsed >= 100 && (
                <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">
                    Budget exceeded! You've spent all of your allocated budget for this category.
                  </p>
                </div>
              )}

              {/* Warning for approaching limit */}
              {budget.percentUsed >= 80 && budget.percentUsed < 100 && (
                <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-700">
                    You've used {budget.percentUsed}% of your budget. Consider reducing spending in this category.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {mockBudgets.length === 0 && (
          <div className="bg-container p-12 rounded-xl shadow-sm border border-secondary text-center">
            <div className="max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-primary mb-2">
                No budgets yet
              </h3>
              <p className="text-secondary mb-6">
                Create your first budget to start tracking your spending by category
              </p>
              <button className="px-6 py-3 bg-inverse text-white rounded-lg hover:bg-inverse-hover">
                Create Budget
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

// Mock data for demonstration
const mockUser = {
  firstName: "John",
};

const mockNetWorth = {
  current: 125000,
  change: 5.2,
  chartData: [
    { date: "Jan", value: 100000 },
    { date: "Feb", value: 105000 },
    { date: "Mar", value: 110000 },
    { date: "Apr", value: 115000 },
    { date: "May", value: 120000 },
    { date: "Jun", value: 125000 },
  ],
};

const mockAccounts = [
  { id: 1, name: "Chase Checking", balance: 5420, type: "depository" },
  { id: 2, name: "Ally Savings", balance: 25000, type: "depository" },
  { id: 3, name: "Vanguard 401k", balance: 75000, type: "investment" },
  { id: 4, name: "Credit Card", balance: -3420, type: "credit" },
];

const mockBalanceSheet = {
  assets: 105420,
  liabilities: 3420,
  netWorth: 102000,
};

export default function DashboardPage() {
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
                <Link href="/" className="text-primary hover:text-secondary">
                  Dashboard
                </Link>
                <Link href="/accounts" className="text-secondary hover:text-primary">
                  Accounts
                </Link>
                <Link href="/transactions" className="text-secondary hover:text-primary">
                  Transactions
                </Link>
                <Link href="/budgets" className="text-secondary hover:text-primary">
                  Budgets
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-inverse text-white rounded-lg hover:bg-inverse-hover">
                New Account
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="space-y-1 mb-6 flex gap-4 justify-between items-center">
          <div className="space-y-1">
            <h1 className="text-3xl font-medium text-primary">
              Welcome back, {mockUser.firstName}
            </h1>
            <p className="text-base text-secondary">
              Here's what's happening with your finances
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="w-full space-y-6 pb-24">
          {/* Net Worth Chart */}
          <section className="bg-container py-6 px-6 rounded-xl shadow-sm border border-secondary">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-sm text-secondary mb-1">Net Worth</h2>
                  <p className="text-3xl font-semibold text-primary">
                    ${mockNetWorth.current.toLocaleString()}
                  </p>
                  <p className="text-sm text-success mt-1">
                    +{mockNetWorth.change}% this month
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm rounded-lg bg-container-inset text-secondary hover:bg-container-inset-hover">
                    1M
                  </button>
                  <button className="px-3 py-1 text-sm rounded-lg bg-container-inset text-secondary hover:bg-container-inset-hover">
                    3M
                  </button>
                  <button className="px-3 py-1 text-sm rounded-lg bg-inverse text-white">
                    6M
                  </button>
                  <button className="px-3 py-1 text-sm rounded-lg bg-container-inset text-secondary hover:bg-container-inset-hover">
                    1Y
                  </button>
                </div>
              </div>
              {/* Placeholder for chart */}
              <div className="h-64 bg-container-inset rounded-lg flex items-center justify-center text-subdued">
                Chart will be rendered here
              </div>
            </div>
          </section>

          {/* Balance Sheet */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-container p-6 rounded-xl shadow-sm border border-secondary">
              <h3 className="text-sm text-secondary mb-2">Assets</h3>
              <p className="text-2xl font-semibold text-success">
                ${mockBalanceSheet.assets.toLocaleString()}
              </p>
            </div>
            <div className="bg-container p-6 rounded-xl shadow-sm border border-secondary">
              <h3 className="text-sm text-secondary mb-2">Liabilities</h3>
              <p className="text-2xl font-semibold text-destructive">
                ${mockBalanceSheet.liabilities.toLocaleString()}
              </p>
            </div>
            <div className="bg-container p-6 rounded-xl shadow-sm border border-secondary">
              <h3 className="text-sm text-secondary mb-2">Net Worth</h3>
              <p className="text-2xl font-semibold text-primary">
                ${mockBalanceSheet.netWorth.toLocaleString()}
              </p>
            </div>
          </section>

          {/* Accounts List */}
          <section className="bg-container rounded-xl shadow-sm border border-secondary">
            <div className="p-6 border-b border-secondary">
              <h2 className="text-lg font-semibold text-primary">Recent Accounts</h2>
            </div>
            <div className="divide-y divide-secondary">
              {mockAccounts.map((account) => (
                <div key={account.id} className="p-6 hover:bg-container-hover">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-primary">{account.name}</p>
                      <p className="text-sm text-secondary capitalize">{account.type}</p>
                    </div>
                    <p
                      className={`text-lg font-semibold ${
                        account.balance < 0 ? "text-destructive" : "text-primary"
                      }`}
                    >
                      ${Math.abs(account.balance).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

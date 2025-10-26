import Image from "next/image";
import Link from "next/link";

// Mock accounts data
const mockAccounts = {
  depository: [
    { id: 1, name: "Chase Checking", balance: 5420, accountNumber: "****1234", institution: "Chase" },
    { id: 2, name: "Ally Savings", balance: 25000, accountNumber: "****5678", institution: "Ally Bank" },
  ],
  investment: [
    { id: 3, name: "Vanguard 401k", balance: 75000, accountNumber: "****9012", institution: "Vanguard" },
    { id: 4, name: "Robinhood", balance: 12500, accountNumber: "****3456", institution: "Robinhood" },
  ],
  credit: [
    { id: 5, name: "Chase Sapphire", balance: -3420, accountNumber: "****7890", institution: "Chase" },
  ],
  loan: [
    { id: 6, name: "Mortgage", balance: -350000, accountNumber: "****4567", institution: "Wells Fargo" },
  ],
};

export default function AccountsPage() {
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
                <Link href="/accounts" className="text-primary hover:text-secondary">
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
        <div className="mb-6">
          <h1 className="text-3xl font-medium text-primary">Accounts</h1>
          <p className="text-base text-secondary">Manage all your financial accounts</p>
        </div>

        {/* Accounts by Type */}
        <div className="space-y-8 pb-24">
          {/* Depository Accounts */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">Bank Accounts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockAccounts.depository.map((account) => (
                <Link
                  key={account.id}
                  href={`/accounts/${account.id}`}
                  className="bg-container p-6 rounded-xl shadow-sm border border-secondary hover:border-primary transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">{account.name}</h3>
                      <p className="text-sm text-secondary">{account.institution}</p>
                      <p className="text-xs text-subdued mt-1">{account.accountNumber}</p>
                    </div>
                    <p className="text-2xl font-semibold text-primary">
                      ${account.balance.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Investment Accounts */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">Investments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockAccounts.investment.map((account) => (
                <Link
                  key={account.id}
                  href={`/accounts/${account.id}`}
                  className="bg-container p-6 rounded-xl shadow-sm border border-secondary hover:border-primary transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">{account.name}</h3>
                      <p className="text-sm text-secondary">{account.institution}</p>
                      <p className="text-xs text-subdued mt-1">{account.accountNumber}</p>
                    </div>
                    <p className="text-2xl font-semibold text-primary">
                      ${account.balance.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Credit Cards */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">Credit Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockAccounts.credit.map((account) => (
                <Link
                  key={account.id}
                  href={`/accounts/${account.id}`}
                  className="bg-container p-6 rounded-xl shadow-sm border border-secondary hover:border-primary transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="bg-orange-100 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">{account.name}</h3>
                      <p className="text-sm text-secondary">{account.institution}</p>
                      <p className="text-xs text-subdued mt-1">{account.accountNumber}</p>
                    </div>
                    <p className="text-2xl font-semibold text-destructive">
                      ${Math.abs(account.balance).toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Loans */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">Loans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockAccounts.loan.map((account) => (
                <Link
                  key={account.id}
                  href={`/accounts/${account.id}`}
                  className="bg-container p-6 rounded-xl shadow-sm border border-secondary hover:border-primary transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="bg-red-100 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">{account.name}</h3>
                      <p className="text-sm text-secondary">{account.institution}</p>
                      <p className="text-xs text-subdued mt-1">{account.accountNumber}</p>
                    </div>
                    <p className="text-2xl font-semibold text-destructive">
                      ${Math.abs(account.balance).toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

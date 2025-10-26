import Image from "next/image";
import Link from "next/link";

interface NavigationProps {
  currentPath: string;
}

export default function Navigation({ currentPath }: NavigationProps) {
  const navItems = [
    { href: "/", label: "Dashboard" },
    { href: "/accounts", label: "Accounts" },
    { href: "/transactions", label: "Transactions" },
    { href: "/budgets", label: "Budgets" },
  ];

  return (
    <nav className="bg-container border-b border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logomark-color.svg"
                alt="Maybe"
                width={32}
                height={32}
              />
              <span className="font-semibold text-lg text-primary">Maybe</span>
            </Link>
            <div className="hidden md:flex gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    currentPath === item.href
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  }
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-inverse text-white rounded-lg hover:bg-inverse-hover">
              New
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

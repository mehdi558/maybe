// Common types for the Maybe frontend application

export interface Account {
  id: number;
  name: string;
  balance: number;
  accountNumber: string;
  institution: string;
  type: "depository" | "investment" | "credit" | "loan" | "property" | "vehicle" | "crypto";
  currency?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Transaction {
  id: number;
  date: string;
  merchant: string;
  category: string;
  amount: number;
  account: string;
  accountId: number;
  notes?: string;
  tags?: string[];
}

export interface Budget {
  id: number;
  category: string;
  budgeted: number;
  spent: number;
  remaining: number;
  percentUsed: number;
  period?: string;
}

export interface BalanceSheet {
  assets: number;
  liabilities: number;
  netWorth: number;
  date?: string;
}

export interface NetWorthData {
  current: number;
  change: number;
  chartData: Array<{
    date: string;
    value: number;
  }>;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

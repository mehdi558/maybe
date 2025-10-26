// API client for making requests to the backend REST API
// This is a placeholder structure for future API integration

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

interface RequestOptions extends RequestInit {
  token?: string;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const { token, ...fetchOptions } = options;

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (options.headers) {
      Object.assign(headers, options.headers);
    }

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...fetchOptions,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({
        message: "An error occurred",
      }));
      throw new Error(error.message || `HTTP ${response.status}`);
    }

    return response.json();
  }

  // Accounts
  async getAccounts(token?: string) {
    return this.request("/accounts", { token });
  }

  async getAccount(id: number, token?: string) {
    return this.request(`/accounts/${id}`, { token });
  }

  async createAccount(data: any, token?: string) {
    return this.request("/accounts", {
      method: "POST",
      body: JSON.stringify(data),
      token,
    });
  }

  async updateAccount(id: number, data: any, token?: string) {
    return this.request(`/accounts/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      token,
    });
  }

  async deleteAccount(id: number, token?: string) {
    return this.request(`/accounts/${id}`, {
      method: "DELETE",
      token,
    });
  }

  // Transactions
  async getTransactions(params?: any, token?: string) {
    const queryString = params
      ? `?${new URLSearchParams(params).toString()}`
      : "";
    return this.request(`/transactions${queryString}`, { token });
  }

  async getTransaction(id: number, token?: string) {
    return this.request(`/transactions/${id}`, { token });
  }

  async createTransaction(data: any, token?: string) {
    return this.request("/transactions", {
      method: "POST",
      body: JSON.stringify(data),
      token,
    });
  }

  // Budgets
  async getBudgets(token?: string) {
    return this.request("/budgets", { token });
  }

  async createBudget(data: any, token?: string) {
    return this.request("/budgets", {
      method: "POST",
      body: JSON.stringify(data),
      token,
    });
  }

  // Dashboard
  async getDashboard(token?: string) {
    return this.request("/dashboard", { token });
  }
}

export const api = new ApiClient(API_BASE_URL);

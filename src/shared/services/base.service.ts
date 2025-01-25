// baseService.ts
import { TODO } from "@/shared/lib/types";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

type RefreshResponse = {
  accessToken: string;
  refreshToken: string;
};

export abstract class BaseService {
  protected api: AxiosInstance;
  private tokens: Tokens | null = null;
  private isRefreshing = false;
  private refreshSubscribers: ((token: string) => void)[] = [];

  protected constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
      withCredentials: true,
    });

    // Request interceptor to add auth header if token is available
    this.api.interceptors.request.use(
      (config: AxiosRequestConfig | TODO) => {
        if (this.tokens?.accessToken && config.headers) {
          config.headers.Authorization = `Bearer ${this.tokens.accessToken}`;
        }
        return config;
      },
      (error: AxiosError) => Promise.reject(error)
    );

    // Response interceptor to handle 401 errors (token expiration)
    this.api.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: AxiosError) => {
        const originalRequest: TODO = error.config;
        if (
          error.response &&
          error.response.status === 401 &&
          originalRequest &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true;
          try {
            const newAccessToken = await this.refreshAccessToken();
            this.onRefreshed(newAccessToken);
            return this.api(originalRequest);
          } catch (refreshError) {
            // Refresh failed; may want to redirect to login or handle it differently
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error);
      }
    );
  }

  private handleResponse<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  /**
   * Set the current tokens (access & refresh).
   */
  protected setTokens(tokens: Tokens): void {
    this.tokens = tokens;
  }

  /**
   * Attempt to refresh the access token using the stored refresh token.
   * If multiple requests fail simultaneously, only one refresh call is made.
   * Others wait until the new token is available.
   */
  private async refreshAccessToken(): Promise<string> {
    if (!this.tokens?.refreshToken) {
      throw new Error("No refresh token available for renewal");
    }

    if (this.isRefreshing) {
      return new Promise<string>((resolve) => {
        this.subscribeTokenRefresh((newToken: string) => {
          resolve(newToken);
        });
      });
    }

    this.isRefreshing = true;

    try {
      // Update this endpoint and payload according to your backend's API
      const { data } = await this.api.post<RefreshResponse>("/auth/refresh", {
        refreshToken: this.tokens.refreshToken,
      });

      const { accessToken, refreshToken } = data;
      this.setTokens({ accessToken, refreshToken });
      this.isRefreshing = false;

      return accessToken;
    } catch (error) {
      this.isRefreshing = false;
      throw error;
    }
  }

  /**
   * When a token is refreshed, notify all subscribers waiting for it.
   */
  private onRefreshed(token: string): void {
    this.refreshSubscribers.forEach((cb) => cb(token));
    this.refreshSubscribers = [];
  }

  /**
   * Subscribe to wait for a new token if a refresh call is already in progress.
   */
  private subscribeTokenRefresh(cb: (token: string) => void): void {
    this.refreshSubscribers.push(cb);
  }

  /**
   * Generic GET request method.
   */
  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.api.get<T>(url, config).then(this.handleResponse);
  }

  /**
   * Generic POST request method.
   */
  public async post<T, D = unknown>(
    url: string,
    payload?: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.api.post<T>(url, payload, config).then(this.handleResponse);
  }

  /**
   * Generic PUT request method.
   */
  public async put<T, D = unknown>(
    url: string,
    payload?: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.api.put<T>(url, payload, config).then(this.handleResponse);
  }

  /**
   * Generic PATCH request method.
   */
  public async patch<T, D = unknown>(
    url: string,
    payload?: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.api.patch<T>(url, payload, config).then(this.handleResponse);
  }

  /**
   * Generic DELETE request method.
   */
  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.api.delete<T>(url, config).then(this.handleResponse);
  }
}

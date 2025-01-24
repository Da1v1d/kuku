// rapiApiService.ts
import { TODO } from "@/shared/lib/types";
import { BaseService } from "@/shared/services/base.service";
import { AxiosError, AxiosRequestConfig } from "axios";

export abstract class RapiApiService extends BaseService {
  constructor({ url, key, host }: { url: string; key: string; host: string }) {
    // Pass the base URL specific to Rapid API (or any other API you are using)
    super(url);

    this.api.interceptors.request.use(
      (config: AxiosRequestConfig | TODO) => {
        if (!config.headers) {
          config.headers = {};
        }
        config.headers["x-rapidapi-key"] = key;
        config.headers["x-rapidapi-host"] = host;

        return config;
      },
      (error: AxiosError) => Promise.reject(error)
    );

    // You could also add another response interceptor (optional):
  }

  // You can add custom methods here if desired, or just use
  // the generic GET/POST/PUT/PATCH/DELETE from BaseService.
}

// Optionally export a singleton:

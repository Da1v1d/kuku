import { Nullable } from "@/shared/lib/types";
import { StorageService } from "@/shared/services/storage/storage.service";

export class LocalStorageService
  extends StorageService
  implements StorageService
{
  isEnabled = true;
  constructor() {
    super();
    if (!window.localStorage || typeof window === "undefined") {
      this.isEnabled = false;
      throw new Error("LocalStorage is not available");
    }
  }

  get<T>(key: string): Nullable<T> | undefined {
    if (!this.isEnabled) {
      return;
    }

    const value = window.localStorage.getItem(key);
    if (!value) {
      return null;
    }
    try {
      return JSON.parse(value);
    } catch (error) {
      return value as T;
    }
  }

  set(key: string, value: any): void {
    if (!this.isEnabled) {
      return;
    }

    if (typeof value === "object") {
      value = JSON.stringify(value);
    } else window.localStorage.setItem(key, value);
  }
  remove(key: string): void {
    if (!this.isEnabled) {
      return;
    }

    window.localStorage.removeItem(key);
  }
  clear(): void {
    if (!this.isEnabled) {
      return;
    }

    window.localStorage.clear();
  }
}

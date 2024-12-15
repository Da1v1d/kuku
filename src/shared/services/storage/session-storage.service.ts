import { Nullable } from "@/shared/lib/types";
import { StorageService } from "@/shared/services/storage/storage.service";

export class SessionStorageService
  extends StorageService
  implements StorageService
{
  isEnabled = true;
  constructor() {
    super();

    if (typeof window === "undefined" || !window.sessionStorage) {
      this.isEnabled = false;
      throw new Error("SessionStorage is not available");
    }
  }
  set(key: string, value: any) {
    if (!this.isEnabled) {
      return;
    }

    if (typeof value === "object") {
      value = JSON.stringify(value);
    } else window.sessionStorage.setItem(key, value);
  }

  get<T>(key: string): Nullable<T> | undefined {
    if (!this.isEnabled) {
      return;
    }
    const value = window.sessionStorage.getItem(key);
    if (!value) {
      return null;
    }
    try {
      return JSON.parse(value);
    } catch (error) {
      return value as T;
    }
  }

  remove(key: string) {
    if (!this.isEnabled) {
      return;
    }
    window.sessionStorage.removeItem(key);
  }

  clear() {
    if (!this.isEnabled) {
      return;
    }
    window.sessionStorage.clear();
  }
}

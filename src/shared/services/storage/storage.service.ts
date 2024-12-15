import { Nullable } from "@/shared/lib/types";

export abstract class StorageService {
  abstract isEnabled: boolean;
  abstract get<T>(key: string): Nullable<T> | undefined;
  abstract set(key: string, value: any): void;
  abstract remove(key: string): void;
  abstract clear(): void;
}

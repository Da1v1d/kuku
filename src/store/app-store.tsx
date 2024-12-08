import { create } from "zustand";

type AppStoreState = {
  count: number;
};

type AppStoreActions = {
  increment: () => void;
  decrement: () => void;
};

const useAppStore = create<AppStoreActions & AppStoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export const selectAppStoreCount = (state: AppStoreState) => state.count;

export default useAppStore;

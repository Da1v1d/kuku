import { APP_PREFIX } from "@/shared/lib/constants";
import { Nullable } from "@/shared/lib/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const PLAYER_STORE = `${APP_PREFIX}_player_store`;

type PlayerStore = {
  isOpen: boolean;
  musicId: Nullable<string>;
};

type PlayerStoreActions = {
  open: () => void;
  close: () => void;
  setMusicId: (musicId: PlayerStore["musicId"]) => void;
  reset: () => void;
};

const initialState: PlayerStore = {
  isOpen: false,
  musicId: null,
};

export const usePlayerStore = create<PlayerStore & PlayerStoreActions>()(
  persist(
    (set) => ({
      ...initialState,
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      setMusicId: (musicId) => set({ musicId }),
      reset: () => set(initialState),
    }),
    {
      name: PLAYER_STORE,
      storage: createJSONStorage(() => localStorage),
    }
  )
);

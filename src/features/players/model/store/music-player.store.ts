import { APP_PREFIX } from "@/shared/lib/constants";
import { Nullable, Selector } from "@/shared/lib/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const PLAYER_STORE = `${APP_PREFIX}_player_store`;

type MusicPlayerStore = {
  isOpen: boolean;
  musicId: Nullable<string>;
};

type MusicPlayerStoreActions = {
  open: () => void;
  close: () => void;
  setMusicId: (musicId: MusicPlayerStore["musicId"]) => void;
  reset: () => void;
};

const initialState: MusicPlayerStore = {
  isOpen: false,
  musicId: null,
};

export const useMusicPlayerStore = create<
  MusicPlayerStore & MusicPlayerStoreActions
>()(
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

export const selectMusicPlayerIsOpen = (state: MusicPlayerStore) =>
  state.isOpen;

export const musicplayerSelectors: Selector<
  MusicPlayerStore & MusicPlayerStoreActions
> = {
  isOpen: (state) => state.isOpen,
  musicId: (state) => state.musicId,
  open: (state) => state.open,
  close: (state) => state.close,
  setMusicId: (state) => state.setMusicId,
  reset: (state) => state.reset,
};

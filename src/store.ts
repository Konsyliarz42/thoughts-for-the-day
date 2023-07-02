import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { ThemeMode } from "./themes";

interface GlobalStore {
  theme: ThemeMode;
  setTheme: (_value: ThemeMode) => void;
}

export const useGlobalStore = create<GlobalStore>()(
  persist(
    (set) => ({
      theme: ThemeMode.AUTO,
      setTheme: (value: ThemeMode) => set(() => ({ theme: value })),
    }),
    {
      name: "global-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

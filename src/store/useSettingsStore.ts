import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserSettings {
    theme: 'light' | 'dark' | 'system';
    currency: string;
    warnLowPercent: number;
    language: string;
}

interface SettingsState {
    settings: UserSettings;

    // actions
    updateSettings: (settings: Partial<UserSettings>) => void;
    resetSettings: () => void;
}

// default user settings
const defaultSettings: UserSettings = {
    theme: 'system',
    currency: 'USD',
    warnLowPercent: 15,
    language: 'English',
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      settings: defaultSettings,

      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),

      resetSettings: () =>
        set({ settings: defaultSettings }),
    }),
    {
      name: 'user-settings-storage',
    }
  )
)
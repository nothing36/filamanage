import { useSettingsStore } from '../store/useSettingsStore';
import { useEffect } from 'react';

export const useTheme = () => {
  const { settings, updateSettings } = useSettingsStore();

  // apply theme to document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', settings.theme);
  }, [settings.theme]);

  return {
    theme: settings.theme,
    setTheme: (theme: 'light' | 'dark' | 'system') => {
      updateSettings({ theme });
    }
  };
};
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

export function useChromeStorage(key: string, defaultValue: any) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (typeof chrome !== "undefined" && chrome.storage) {
      chrome.storage.local.get([key], (result) => {
        if (result[key] !== undefined) {
          setValue(result[key]);
        }
      });

      const handleChange = (changes: {
        [key: string]: chrome.storage.StorageChange;
      }) => {
        if (changes[key]) {
          setValue(changes[key].newValue);
        }
      };

      chrome.storage.onChanged.addListener(handleChange);
      return () => chrome.storage.onChanged.removeListener(handleChange);
    }
  }, [key]);

  const saveValue = (newValue: any) => {
    setValue(newValue);
    chrome.storage.local.set({ [key]: newValue });
  };

  return [value, saveValue] as const;
}

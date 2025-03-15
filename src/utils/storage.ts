/* eslint-disable @typescript-eslint/no-explicit-any */
// utils/storage.ts
export function setStorageItem(key: string, value: any) {
  chrome.storage.local.set({ [key]: value }, () => {
    console.log(`✅ Saved: ${key} =`, value);
  });
}

export function getStorageItem(key: string, callback: (value: any) => void) {
  chrome.storage.local.get([key], (result: any) => {
    console.log(`🔹 Loaded: ${key} =`, result[key]);
    callback(result[key]);
  });
}

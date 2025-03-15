/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

function getStorageValue(key: string, defaultValue?: any) {
  // getting stored value
  const saved: any = window.localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key: string, defaultValue?: any) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

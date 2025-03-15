import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "favoriteMatches"; // ✅ กำหนด key ใน localStorage
// const LIMIT = 10; // ✅ จำกัด 10 รายการ

export function useFavoriteMatches() {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem(STORAGE_KEY);
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const addFavorite = useCallback(
    (matchId: number) => {
      if (!matchId) return;
      const list = [matchId];
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    },
    [favorites]
  );

  const removeFavorite = (matchId: number) => {
    setFavorites((prev) => {
      const newFavorites = prev.filter((id) => id !== matchId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return { favorites, addFavorite, removeFavorite };
}

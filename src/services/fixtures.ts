/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "./axiosInstance";

export const fixtureService = {
  getAll: async () => {
    try {
      const response = await axiosInstance.get("/fixtures?date=2025-03-08");
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.error("❌ Error fetching fixtures:", error);
      return null;
    }
  },
};

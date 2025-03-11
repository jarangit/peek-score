/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "./axiosInstance";

export const fixtureService = {
  getAll: async ({ date }: { date: string }) => {
    try {
      const response = await axiosInstance.get(`/fixtures?date=${date}`);
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.error("❌ Error fetching fixtures:", error);
      return null;
    }
  },
};

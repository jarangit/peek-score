/* eslint-disable @typescript-eslint/no-explicit-any */

import axiosInstance from "./axiosInstance";
// import mockDataLeagues from "./mock-data/leagues.json";
export const leaguesService = {
  // src/services/matchService.ts
  getAll: async () => {
    try {
      const response: any = await axiosInstance.get("/leagues");
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.error("❌ Error fetching leagues:", error);
      return null;
    }
    // const leagueIds = [39, 140, 135, 78, 61, 2, 3, 1, 45, 143, 137];
    // const leagues = mockDataLeagues.response.filter((item: any) => leagueIds.includes(item.league.id))
    // return {
    //   ...mockDataLeagues,
    //   response: leagues
    // }
  },
};

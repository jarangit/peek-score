import axiosInstance from "./axiosInstance";
import { leaguesService } from "./leagues";
import { matchServiceAPI } from "./matchs";

export const fixtureService = {
  getAll: async () => {
    try {
      const response = await axiosInstance.get("/fixtures?date=2025-03-08");
      if (response) {
        const league = await leaguesService.getAll();
        const leagueIds = league.response.map((item) => item.league.id);
        const filter = response.data.response.filter((item: any) =>
          leagueIds.includes(item.league.id)
        );
        const groupedMatches = matchServiceAPI.groupByLeagueToArray(filter); // ใช้ matchesData เป็น JSON ที่คุณให้มา
        return {
          ...response.data,
          response: groupedMatches,
        };
      }
    } catch (error) {
      console.error("❌ Error fetching fixtures:", error);
      return null;
    }
  },
};

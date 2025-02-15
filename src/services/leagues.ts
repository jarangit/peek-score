/* eslint-disable @typescript-eslint/no-explicit-any */

import mockDataLeagues from './mock-data/leagues.json'
export const leaguesService = {
  // src/services/matchService.ts
  getAll: async () => {
    const leagueIds = [39, 140, 135, 78, 61, 2, 3, 1, 45, 143, 137];
    const leagues = mockDataLeagues.response.filter((item: any) => leagueIds.includes(item.league.id))
    return {
      ...mockDataLeagues,
      response: leagues
    }
  }
}
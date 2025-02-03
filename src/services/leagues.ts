/* eslint-disable @typescript-eslint/no-explicit-any */

import mockDataLeagues from './mock-data/leagues.json'
export const leaguesService = {
  // src/services/matchService.ts
  getAll: async () => {
    console.log('get data')
    const data = mockDataLeagues.response.filter((item: any) => item.league.type == 'League')
    console.log(data.slice(0, 7))
    // จำลองการ fetch ข้อมูลจาก JSON
    return {
      ...mockDataLeagues,
      response: data.slice(0, 7)

    }
  }
}
/* eslint-disable @typescript-eslint/no-unused-vars */
// src/services/matchService.ts
import mockData from './mock-match.json';
import mockLiveMatchData from './mock-data/liveMatch.json'

export const matchServiceAPI = {
  fetchMatchData: async (_leagueId?: number) => {
    // จำลองการ fetch ข้อมูลจาก JSON
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ response: mockData.api });
      }, 500); // เพิ่ม delay เพื่อจำลอง API response
    });
  },
  getLiveMatch: () => {
    return mockLiveMatchData
  }
}

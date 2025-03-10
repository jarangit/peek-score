/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// src/services/matchService.ts
import mockData from './mock-match.json';
import mockLiveMatchData from './mock-data/liveMatch.json'
import { leaguesService } from './leagues';

export const matchServiceAPI = {
  fetchMatchData: async (_leagueId?: number) => {
    // จำลองการ fetch ข้อมูลจาก JSON
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ response: mockData.api });
      }, 500); // เพิ่ม delay เพื่อจำลอง API response
    });
  },
  groupByLeagueToArray(matches: any) {
    const groupedObject = matches.reduce((acc: any, match: any) => {
      const leagueName = match.league.name;

      // ถ้ายังไม่มีลีกนี้ใน Object ให้เพิ่มเข้าไป
      if (!acc[leagueName]) {
        acc[leagueName] = {
          league: {
            name: leagueName,
            country: match.league.country,
            logo: match.league.logo,
            flag: match.league.flag,
            season: match.league.season,
            round: match.league.round
          },
          matches: []
        };
      }

      // เพิ่มแมตช์เข้าไปในลีกที่ตรงกัน
      acc[leagueName].matches.push({
        ...match
      });

      return acc;
    }, {});

    // ✅ แปลง Object เป็น Array เพื่อให้ FE ใช้ .map() ได้ง่ายขึ้น
    return Object.values(groupedObject);
  },
  getLiveMatch: async () => {
    const league = await leaguesService.getAll()
    const leagueIds = league.response.map((item: { league: { id: any; }; }) => item.league.id)
    const filter = mockLiveMatchData.response.filter((item: any) => leagueIds.includes(item.league.id))
    const groupedMatches = matchServiceAPI.groupByLeagueToArray(filter); // ใช้ matchesData เป็น JSON ที่คุณให้มา

    return {
      ...mockLiveMatchData,
      response: groupedMatches
    }
  }
}

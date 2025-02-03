import teamMockData from './mock-data/search_team.json'

// const BASE_URL = "https://api-football-v1.p.rapidapi.com/v3/teams?search=manches";
// const apiKey = import.meta.env.VITE_RAPID_FOOTBALL_API_KEY
interface IGetTeam {
  search?: string
}
export const teamsServiceAPI = {
  getTeams: async ({ search }: IGetTeam) => {
    console.log('seach', search)
    try {
      // const response = await fetch(`${BASE_URL}`, {
      //   method: "GET",
      //   headers: {
      //     "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      //     "x-rapidapi-key": apiKey
      //   }
      // });

      // if (!response.ok) {
      //   throw new Error(`HTTP error! Status: ${response.status}`);
      // }

      // const data = await response.json();
      const data = teamMockData;
      return data;
    } catch (error) {
      console.error("❌ Error fetching teams by country:", error);
      return null;
    }
  }
}
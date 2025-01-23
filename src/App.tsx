/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import LeagueTabs from "./components/league-tab";
import MatchResults from "./components/match-result";
import SearchBar from "./components/search-bar";
import { fetchMatchData } from "./services/matchs";

function App() {
  const [, setSearchQuery] = useState("");
  const [activeLeague, setActiveLeague] = useState(1);


  const [matchData, setMatchData] = useState<any | null>(null);

  useEffect(() => {
    const getMatchData = async () => {
      const { response }: any = await fetchMatchData();
    
      setMatchData(response);
    };
    getMatchData();
  }, []);
  const leagues = [
    { id: 1, name: "พรีเมียร์ลีก" },
    { id: 2, name: "ลาลีกา" },
    { id: 3, name: "บุนเดสลีกา" },
  ];

  // const filteredMatches = matches.filter(
  //   (match) =>
  //     match.league ===
  //       leagues.find((league) => league.id === activeLeague)?.name &&
  //     (match.homeTeam.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       match.awayTeam.toLowerCase().includes(searchQuery.toLowerCase()))
  // );

  return (
    <div className=" mx-auto overflow-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        ผลการแข่งขันฟุตบอล
      </h1>
      <SearchBar onSearch={setSearchQuery} />
      <LeagueTabs
        leagues={leagues}
        activeLeague={activeLeague}
        onTabClick={setActiveLeague}
      />
      {matchData && matchData.length ? (
        <div className="flex flex-col gap-4">
          {matchData.map((match: any) => (
            <MatchResults
              teams={match.teams}
              goals={match.goals}
              date={match.fixture.date}
              status={match.fixture.status.long}
            />
          ))}
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
}

export default App;

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import LeagueTabs from "./components/league-tab";
import MatchResults, { IMatch } from "./components/match-result";
import SearchBar from "./components/search-bar";
import {  matchServiceAPI } from "./services/matchs";
import DateTaps from "./components/date-tab";
import { teamsServiceAPI } from "./services/teams";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useDebounce } from "./services/hooks/debounce";
// import { fetchGptData } from "./services/gpt";

function App() {
  const [matchData, setMatchData] = useState<any | null>(null);
  const [search, setSearch] = useState("");
  const debouncedQuery = useDebounce(search, 500); // ใช้ Debounce 500ms

  const { data: teamData } = useQuery({
    queryKey: ["getTeams", debouncedQuery],
    queryFn: () => teamsServiceAPI.getTeams({ search: debouncedQuery }),
    enabled: !!debouncedQuery,
  });

  const handleSearch = (data: string) => {
    setSearch(data); // อัปเดต searchTerm เพื่อ Trigger useQuery
  };

  useEffect(() => {
    const getMatchData = async () => {
      const { response }: any = await matchServiceAPI.getLiveMatch();
      console.log(
        "%cMyProject%cline:32%cresponse",
        "color:#fff;background:#ee6f57;padding:3px;border-radius:2px",
        "color:#fff;background:#1f3c88;padding:3px;border-radius:2px",
        "color:#fff;background:rgb(3, 101, 100);padding:3px;border-radius:2px",
        response
      );
      setMatchData(response);
    };
    getMatchData();
  }, []);

  return (
    <div className=" container  mx-auto overflow-auto !p-4">
      <h1 className="text-2xl font-bold text-center mb-6">PeekScore</h1>
      <div className="relative">
        <SearchBar onSearch={handleSearch} />

        {teamData ? (
          <div className="flex flex-col gap-2  p-4 rounded-lg absolute w-full bg-black/40 backdrop-blur-xl border-gray-700 border z-[9999]">
            {teamData
              ? teamData.response.map((team, key) => (
                  <React.Fragment key={key}>
                    <div className="flex items-center justify-start gap-2 ">
                      <img
                        src={team.team.logo}
                        alt={team.team.name}
                        className="w-8 h-8 rounded-full "
                      />
                      <p className=" text-sm font-medium">{team.team.name}</p>
                    </div>
                  </React.Fragment>
                ))
              : ""}
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="bg-background p-6 mb-3 rounded-lg">
        <LeagueTabs />
        <DateTaps />
      </div>

      {matchData && matchData.length ? (
        <div className="flex flex-col gap-4 ">
          {matchData.map((match: IMatch, key: any) => (
            <React.Fragment key={key}>
              <MatchResults data={match} />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
}

export default App;

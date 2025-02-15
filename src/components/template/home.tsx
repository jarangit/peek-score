/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import LeagueTabs from "../../components/league-tab";
import MatchResults from "../../components/match-result";
import SearchBar from "../../components/search-bar";
import { matchServiceAPI } from "../../services/matchs";
import DateTaps from "../../components/date-tab";
import { teamsServiceAPI } from "../../services/teams";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useDebounce } from "../../services/hooks/debounce";
// import { fetchGptData } from "./services/gpt";

function Home() {
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
     
      setMatchData(response);
    };
    getMatchData();
  }, []);

  return (
    <div className="   mx-auto overflow-auto !p-4 ">
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

      {/* league */}
      <div className="mb-3">
        <LeagueTabs />
      </div>
      <div className="bg-background p-3 mb-3 rounded-lg">
        <DateTaps />
      </div>

      {matchData && matchData.length ? (
        <div className="flex flex-col gap-6  ">
          {matchData.map((item: any, key: any) => (
            <React.Fragment key={key}>
              <div>
                <div className="flex gap-3 my-3 items-center">
                  <img
                    src={item.league.logo}
                    alt={item.league.name}
                    className="w-8 h-8 "
                  />
                  <div className="font-bold">{item.league.name}</div>
                </div>
                <div className="flex flex-col gap-2">
                  {item.matches.map((match: any) => (
                    <React.Fragment>
                      <MatchResults data={match} />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
}

export default Home;

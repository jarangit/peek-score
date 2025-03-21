/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import LeagueTabs from "../../components/league-tab";
import MatchResults from "../../components/match-result";
import DateTaps from "../../components/date-tab";
import { teamsServiceAPI } from "../../services/teams";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useDebounce } from "../../services/hooks/debounce";
import { fixtureService } from "../../services/fixtures";
// import { useWebSocket } from "../../hooks/useWebSocket";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import FavMatchesList from "../oganism/favMatchesList";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { addFav } from "../../store/features/fixtures/fixturesSlice";
// import { setStorageItem } from "../../utils/storage";
import LeagueHeader from "../molecule/leagure-header";
// import { fetchGptData } from "./services/gpt";

function Home() {

  const dispatch = useDispatch();
  const favMatches = useSelector(
    (state: RootState) => state.fixtures.favMatches
  );
  // const fixtureSocket: any = useWebSocket("newFixtures");
  const today = new Date();
  const [currentFavMatches] = useLocalStorage("favMatches", []);
  const [matchData, setMatchData] = useState<any | null>(null);
  const [search, setSearch] = useState("");
  const debouncedQuery = useDebounce(search, 500); // ใช้ Debounce 500ms
  const [isFavTab, setIsFavTab] = useState(false);

  const { data: fixtures } = useQuery({
    queryKey: ["getFixtures"],
    queryFn: () =>
      fixtureService.getAll({ date: today.toISOString().split("T")[0] }),
  });
  const { data: teamData } = useQuery({
    queryKey: ["getTeams", debouncedQuery],
    queryFn: () => teamsServiceAPI.getTeams({ search: debouncedQuery }),
    enabled: !!debouncedQuery,
  });

  const handleSearch = (data: string) => {
    setSearch(data); // อัปเดต searchTerm เพื่อ Trigger useQuery
  };

  const sendNotification = () => {
    if (typeof chrome !== "undefined" && chrome.runtime) {
      chrome.runtime.sendMessage(
        {
          type: "NOTIFY",
          title: "📢 แจ้งเตือน!",
          message: "ข้อความนี้ถูกส่งจาก React!",
        },
        (response) => {
          if (chrome.runtime.lastError) {
            console.error("❌ ส่งแจ้งเตือนไม่สำเร็จ", chrome.runtime.lastError);
          } else {
            console.log("✅ แจ้งเตือนสำเร็จ:", response);
          }
        }
      );
    } else {
      console.error("❌ Chrome API ไม่พร้อมใช้งาน");
    }
  };

  useEffect(() => {
    // const getMatchData = async () => {
    //   const { response }: any = await matchServiceAPI.getLiveMatch();
    //   setMatchData(response);
    // };
    // getMatchData();
    if (currentFavMatches?.length) {
      currentFavMatches.forEach((id: number) => {
        dispatch(addFav(id));
      });
    }
    if (fixtures?.response) {
      setMatchData(fixtures.response);
    }
  }, [fixtures, currentFavMatches]);
  return (
    <div className="   mx-auto overflow-auto !p-4 ">
      <div className="relative">
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

      <div className="bg-background p-3 mb-3 rounded-lg">
        <DateTaps />
      </div>

      {/* home layout */}
      {!isFavTab ? (
        <section>
          {/* league */}
          <div className="mb-3">
            <LeagueTabs />
          </div>

          {matchData && matchData.length ? (
            <div className="flex flex-col gap-6  ">
              {matchData.map((item: any, key: any) => (
                <React.Fragment key={key}>
                  <div id={item.league.name}>
                    <LeagueHeader data={item.league}/>
                    <div className="flex flex-col gap-2">
                      {item.matches.map((match: any, matchKey: any) => (
                        <React.Fragment key={matchKey}>
                          <MatchResults
                            data={match}
                            isFav={favMatches.includes(match.fixture.id)}
                          />
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
        </section>
      ) : (
        <FavMatchesList allMatchesList={matchData} />
      )}
    </div>
  );
}

export default Home;

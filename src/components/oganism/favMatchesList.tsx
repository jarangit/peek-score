/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import MatchResult from "../match-result";

type Props = {
  allMatchesList: any[];
};

const FavMatchesList = ({ allMatchesList }: Props) => {
  const favMatches = useSelector(
    (state: RootState) => state.fixtures.favMatches
  );
  const [matchData, setMatchData] = useState([]);
  const filterLeaguesByMatchIds = (data: any, matchIds: number[]) => {
    return data
      .map((league: any) => {
        // ✅ กรอง matches ที่มี id ตรงกับ matchIds
        const filteredMatches = league.matches.filter((match: any) =>
          matchIds.includes(match.fixture.id)
        );

        // ✅ ถ้ามี matches ที่ตรงกัน ให้ return league นี้
        return filteredMatches.length > 0
          ? { ...league, matches: filteredMatches }
          : null;
      })
      .filter(Boolean); // ✅ ลบค่า `null` ออก
  };

  useEffect(() => {
    const result = filterLeaguesByMatchIds(allMatchesList, favMatches);
    if (result?.length) {
      setMatchData(result);
    }
  }, [allMatchesList]);
  return (
    <div>
      <div>
        {matchData?.map((item: any, key) => (
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
                {item.matches.map((match: any, matchKey: any) => (
                  <React.Fragment key={matchKey}>
                    <MatchResult
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
    </div>
  );
};

export default FavMatchesList;

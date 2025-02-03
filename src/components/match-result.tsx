/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/MatchCard.tsx
import { useState } from "react";
import { FaBell } from "react-icons/fa";

type Props = {
  data: IMatch;
};
export interface IMatch {
  fixture: Fixture;
  league: League;
  teams: Teams;
  goals: Goals;
  score: Score;
}

export interface Fixture {
  id: number;
  referee: string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: Periods;
  venue: Venue;
  status: Status;
}

export interface Periods {
  first: number;
  second: any;
}

export interface Venue {
  id: number;
  name: string;
  city: string;
}

export interface Status {
  long: string;
  short: string;
  elapsed: number;
  extra: any;
}

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
  standings: boolean;
}

export interface Teams {
  home: Home;
  away: Away;
}

export interface Home {
  id: number;
  name: string;
  logo: string;
  winner: any;
}

export interface Away {
  id: number;
  name: string;
  logo: string;
  winner: any;
}

export interface Goals {
  home: number;
  away: number;
}

export interface Score {
  halftime: Halftime;
  fulltime: Fulltime;
  extratime: Extratime;
  penalty: Penalty;
}

export interface Halftime {
  home: number;
  away: number;
}

export interface Fulltime {
  home: any;
  away: any;
}

export interface Extratime {
  home: any;
  away: any;
}

export interface Penalty {
  home: any;
  away: any;
}

const MatchResult = ({ data }: Props) => {
  const { teams, goals, fixture } = data;
  const [toggleNotice, setToggleNotice] = useState(false);
  const onToggleNotice = () => {
    setToggleNotice(!toggleNotice);
  };
  return (
    <div className="relative ">
      {/* Teams and Score */}
      <div className="grid grid-cols-3  px-6 bg-background-dark py-2 rounded-lg">
        {/* Home Team */}
        <div className="flex items-center justify-end gap-2 text-right">
          <p className="ml-2 text-sm font-medium truncate">{teams.home.name}</p>
          <img
            src={teams.home.logo}
            alt={teams.home.name}
            className="w-8 h-8 "
          />
        </div>
        {/* Score */}
        <div className="text-center text-lg font-bold">
          <div>
            {goals.home} - {goals.away}
          </div>
          <div className="text-xs text-score-draw">
            {fixture.status.elapsed}'
          </div>
        </div>
        {/* Away Team */}
        <div className="flex items-center justify-start gap-2">
          <img
            src={teams.away.logo}
            alt={teams.away.name}
            className="w-8 h-8 "
          />
          <p className=" text-sm font-medium truncate  ">{teams.away.name}</p>
        </div>
      </div>

      {/* Date and Status */}
      {/* <div className="flex justify-center mt-2 gap-4">
        <p className="text-sm text-gray-600">{status}</p>
        <p className="text-sm text-gray-500">
          {new Date(date).toLocaleDateString()}
        </p>
      </div> */}
      <div className=" absolute right-3 top-[40%] cursor-pointer">
        <FaBell
          className={`${toggleNotice ? "text-team-away" : "text-gray-500"}`}
          onClick={onToggleNotice}
        />
      </div>
    </div>
  );
};

export default MatchResult;

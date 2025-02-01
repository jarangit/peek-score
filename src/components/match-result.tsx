// src/components/MatchCard.tsx
import React from "react";

interface MatchProps {
  teams: {
    home: {
      name: string;
      logo: string;
    };
    away: {
      name: string;
      logo: string;
    };
  };
  goals: {
    home: number;
    away: number;
  };
  date: string;
  status: string;
}

const MatchCard: React.FC<MatchProps> = ({ teams, goals }) => {
  return (
    <div className="pt-3">
      {/* Teams and Score */}
      <div className="grid grid-cols-3">
        {/* Home Team */}
        <div className="flex items-center justify-end gap-2 text-right">
          <p className="ml-2 text-sm font-medium">{teams.home.name}</p>
          <img
            src={teams.home.logo}
            alt={teams.home.name}
            className="w-8 h-8 rounded-full border"
          />
        </div>
        {/* Score */}
        <div className="text-center text-lg font-bold">
          {goals.home} - {goals.away}
        </div>
        {/* Away Team */}
        <div className="flex items-center justify-start gap-2">
          <img
            src={teams.away.logo}
            alt={teams.away.name}
            className="w-8 h-8 rounded-full border"
          />
          <p className=" text-sm font-medium">{teams.away.name}</p>
        </div>
      </div>

      {/* Date and Status */}
      {/* <div className="flex justify-center mt-2 gap-4">
        <p className="text-sm text-gray-600">{status}</p>
        <p className="text-sm text-gray-500">
          {new Date(date).toLocaleDateString()}
        </p>
      </div> */}
    </div>
  );
};

export default MatchCard;

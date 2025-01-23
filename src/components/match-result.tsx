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

const MatchCard: React.FC<MatchProps> = ({ teams, goals, date, status }) => {
  return (
    <div className=" border rounded-lg shadow-md p-3 bg-gray-300 hover:shadow-lg max-h-[80px]">
      {/* Teams and Score */}
      <div className="flex items-center space-x-4 justify-between">
        {/* Home Team */}
        <div className="flex items-center">
          <img
            src={teams.home.logo}
            alt={teams.home.name}
            className="w-8 h-8 rounded-full border"
          />
          <p className="ml-2 text-sm font-medium text-gray-700">
            {teams.home.name}
          </p>
        </div>
        {/* Score */}
        <div className="text-center text-lg font-bold text-blue-600">
          {goals.home} - {goals.away}
        </div>
        {/* Away Team */}
        <div className="flex items-center">
          <img
            src={teams.away.logo}
            alt={teams.away.name}
            className="w-8 h-8 rounded-full border"
          />
          <p className="ml-2 text-sm font-medium text-gray-700">
            {teams.away.name}
          </p>
        </div>
      </div>

      {/* Date and Status */}
      <div className="flex justify-center mt-2 gap-4">
        <p className="text-sm text-gray-600">{status}</p>
        <p className="text-sm text-gray-500">
          {new Date(date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default MatchCard;

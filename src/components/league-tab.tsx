// src/components/LeagueTabs.jsx
import React from 'react';

interface LeagueTabsProps {
  leagues: { id: number; name: string }[];
  activeLeague: number;
  onTabClick: (id: number) => void;
}

const LeagueTabs: React.FC<LeagueTabsProps> = ({ leagues, activeLeague, onTabClick }) => {
  return (
    <div className="flex justify-center space-x-4 mb-6">
      {leagues.map((league) => (
        <button
          key={league.id}
          onClick={() => onTabClick(league.id)}
          className={`px-4 py-2 rounded-lg ${
            activeLeague === league.id
              ? 'bg-blue-500 '
              : 'bg-gray-200 text-gray-800'
          } hover:bg-blue-400 hover:text-white`}
        >
          {league.name}
        </button>
      ))}
    </div>
  );
};

export default LeagueTabs;
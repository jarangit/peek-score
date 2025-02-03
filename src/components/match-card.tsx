/* eslint-disable @typescript-eslint/no-explicit-any */

interface MatchData {
  data: any;
}

const MatchCard = ({ data }: MatchData) => {
  return (
    <div className="max-w-md mx-auto bg-black rounded-xl shadow-md overflow-hidden p-4 border border-gray-300">
      {/* League Header */}
      <div className="flex items-center space-x-2 mb-3">
        <img src={data.league.logo} alt="League Logo" className="w-6 h-6" />
        <h3 className="text-sm font-semibold">{data.league.name}</h3>
      </div>

      {/* Teams Section */}
      <div className="flex justify-between items-center">
        {/* Home Team */}
        <div className="flex flex-col items-center">
          <img
            src={data.teams.home.logo}
            alt={data.teams.home.name}
            className="w-12 h-12"
          />
          <p className="text-sm">{data.teams.home.name}</p>
        </div>

        {/* Score */}
        <div className="text-xl font-bold">
          {data.goals.home} - {data.goals.away}
        </div>

        {/* Away Team */}
        <div className="flex flex-col items-center">
          <img
            src={data.teams.away.logo}
            alt={data.teams.away.name}
            className="w-12 h-12"
          />
          <p className="text-sm">{data.teams.away.name}</p>
        </div>
      </div>

      {/* data Details */}
      <div className="text-xs text-gray-500 mt-3 text-center">
        <p>
          {data.fixture.venue.name}, {data.fixture.venue.city}
        </p>
        <p>{new Date(data.fixture.date).toLocaleDateString()}</p>
        <p className="text-green-600 font-medium">{data.fixture.status.long}</p>
      </div>
    </div>
  );
};

export default MatchCard;

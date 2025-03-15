type Props = {
  data: ILeague;
};
interface ILeague {
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

const LeagueHeader = ({ data }: Props) => {
  const { name, logo } = data;
  return (
    <div>
      <div className="flex gap-3 my-3 items-center">
        <img
          src={logo}
          alt={name}
          className="w-8 h-8 bg-white/90 p-1 rounded-sm"
        />
        <div className="font-bold">{name}</div>
      </div>
    </div>
  );
};

export default LeagueHeader;

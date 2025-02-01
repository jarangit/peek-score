/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/LeagueTabs.jsx
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { leaguesService } from "../services/leagues";

interface LeagueTabsProps {}

const LeagueTabs: React.FC<LeagueTabsProps> = () => {
  const [listLeagues, setListLeagues] = useState([]);
 
  const { data }: any = useQuery({
    queryKey: ["leagues"],
    queryFn: leaguesService.getAll,
  });

  useEffect(() => {
    if (data) {
      setListLeagues(data?.response);
    }
  }, [data]);

  return (
    <div className="flex justify-center flex-wrap w-full gap-3 mb-6">
      {listLeagues.map((item: any, index: any) => (
        <div
          key={index}
          className="border  flex justify-center items-center  text-center px-4 py-1 rounded-lg font-semibold"
        >
          <div className="flex gap-2 items-center">
            <img src={item.league.logo} alt="" width={20} height={20} />
            <div>{item.league.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeagueTabs;

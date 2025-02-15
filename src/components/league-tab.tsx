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
  const [isLive, ] = useState(1);
  const [isActive, ] = useState(2);

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
    <div className="flex items-center gap-2 overflow-hidden overflow-x-auto w-full">
      <div className=" min-w-14 h-14 rounded-full border border-gray-500 flex items-center justify-center overflow-hidden bg-white text-black font-bold ">
        <div>LIVE</div>
      </div>
      {listLeagues.map((item: any, index: any) => (
        <div
          key={index}
          className={` relative min-w-14 h-14 rounded-full border border-gray-500 flex items-center justify-center   ${
            isActive === index ? "border-green-500 bg-green-900/25" : ""
          }
          ${isLive === index ? "border-red-500 bg-red-900/25" : ""}
          `}
        >
          <img src={item.league.logo} alt="" className="object-cover w-8 h-8" />

          {isLive === index && (
            <div className="absolute bottom-0 z-50">
              <div className="text-xs bg-red-600 px-1 rounded-sm font-bold">
                Live
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LeagueTabs;

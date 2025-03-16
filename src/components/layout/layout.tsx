import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "../search-bar";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { FaInbox } from "react-icons/fa";

const Layout = () => {
  const [isFavTab, setIsFavTab] = useState(false);
  const [, setSearch] = useState<string>("");
  const handleSearch = (data: string) => {
    setSearch(data);
  };
  const favMatches = useSelector(
    (state: RootState) => state.fixtures.favMatches
  );

  return (
    <div className="   mx-auto overflow-auto !p-4 ">
      <div className="relative">
        <button
          className=" p-1 px-2 rounded-sm bg-gray-700 absolute right-0"
          onClick={() => setIsFavTab(!isFavTab)}
        >
          <div className="flex items-center gap-2">
            {favMatches?.length}
            <FaInbox />
          </div>
        </button>
        <div className="flex justify-center items-center  gap-3 mb-4">
          <div className=" font-bold text-3xl">
            <span className="text-primary">PEEK</span>SCORE
          </div>
        </div>
      </div>
      <SearchBar onSearch={handleSearch} />
      <Outlet /> {/* ส่วนนี้จะแสดงเนื้อหาของแต่ละหน้า */}
    </div>
  );
};

export default Layout;

import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
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
  const [isPopup, setIsPopup] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 420) {
      setIsPopup(true);
      document.body.classList.add("popup"); // ✅ เพิ่ม class "popup" ให้ body
    }
    console.log("isPopup", isPopup);
  }, []);

  return (
    <div className={` ${isPopup ? "w-[480px]" : "container"}`}>
      <div className=" mx-auto overflow-auto !p-4 ">
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
          <div className="flex justify-center items-center  gap-3 mb-4"  >
            <Link to="/" className=" font-bold text-3xl text-white hover:text-white">
              <span className="text-mint-500">PEEK</span>SCORE
            </Link>
          </div>
        </div>
        <SearchBar onSearch={handleSearch} />
        <Outlet /> {/* ส่วนนี้จะแสดงเนื้อหาของแต่ละหน้า */}
      </div>
    </div>
  );
};

export default Layout;

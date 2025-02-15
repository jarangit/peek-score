import { useState, useEffect } from "react";
import Home from "./components/template/home";

function App() {
  const [isPopup, setIsPopup] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 400) {
      setIsPopup(true);
      document.body.classList.add("popup"); // ✅ เพิ่ม class "popup" ให้ body
    }
  }, []);
  return (
    <>
      <div className={` ${isPopup ? "w-[420px]" : "container"}`}>
        <Home />
      </div>
    </>
  );
}

export default App;

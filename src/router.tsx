// src/router.jsx
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import LeaguePage from "./pages/league";
import App from "./App";
import Layout from "./components/layout/layout";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/league/:id" element={<LeaguePage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;

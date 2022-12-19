import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../Pages/dashboard";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};
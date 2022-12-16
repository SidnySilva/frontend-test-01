import { Routes, Route } from "react-router-dom";
import { Header } from "../Components/header";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
    </Routes>
  );
};
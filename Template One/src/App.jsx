import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

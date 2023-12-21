import { Route, Routes } from "react-router-dom";

import { CreateMovie } from "../pages/CreateMovie";
import { Home } from "../pages/Home";
import { Preview } from "../pages/Preview";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateMovie />} />
      <Route path="/preview/:id" element={<Preview />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

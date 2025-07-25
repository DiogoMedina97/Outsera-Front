import HomeLayout from "@layouts/HomeLayout";
import Dashboard from "@pages/Dashboard";
import List from "@pages/List";
import { Route, Routes } from "react-router";

// --------------------------------------------------

const Router = () => (
  <HomeLayout>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/list" element={<List />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </HomeLayout>
);

// --------------------------------------------------

export default Router;

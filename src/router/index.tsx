import HomeLayout from "@layouts/HomeLayout";
import { Route, Routes } from "react-router";

// --------------------------------------------------

const Router = () => (
  <HomeLayout>
    <Routes>
      <Route path="/" element={<div>Dashboard</div>} />
      <Route path="/list" element={<div>List</div>} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </HomeLayout>
);

// --------------------------------------------------

export default Router;

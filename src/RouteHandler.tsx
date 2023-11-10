import React from "react";
import Homepage from "./modules/homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./modules/test/Test";
import Layout from "./components/Layout/Layout";
import ClipPage from "./modules/clipPage/ClipPage";

const RouteHandler: React.FC = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/clip" element={<ClipPage />} />
      </Routes>
    </Layout>
  </Router>
);

export default RouteHandler;

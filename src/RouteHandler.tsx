import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./modules/test/Test";
import Layout from "./components/Layout/Layout";
import "./global.css";

const RouteHandler: React.FC = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes>
    </Layout>
  </Router>
);

export default RouteHandler;

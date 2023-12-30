
import React from "react";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProfileDashboard from "./components/ProfileDashboard";
import Pricing from "./components/PricingTable";
import CreateNewGraphPage from "./components/CreateNewGraphPage";
import AccountSettingsPage from './components/account';
import GraphDetailsPage from "./components/GraphDetailsPage";
const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/dashboard" element={<ProfileDashboard />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/new-graph" element={<CreateNewGraphPage />} />
        <Route path="/edit-profile" element={<AccountSettingsPage />} />
        <Route path="/graph-details" element={<GraphDetailsPage />} />
        <Route path="/" element={<ProfileDashboard />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;


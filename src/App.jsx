import { Routes, Route, Navigate } from "react-router-dom";

import DashBoard from "./pages/DashBoard";
import EmailList from "./pages/EmailList";
import EmailAccounts from "./pages/EmailAccounts";
import EmailCampaigns from "./pages/EmailCampaigns";

const App = () => {
  return (
    <Routes>
      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/dashboard" />} />

      {/* Pages */}
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/email-list" element={<EmailList />} />
      <Route path="/email-accounts" element={<EmailAccounts />} />
      <Route path="/campaigns" element={<EmailCampaigns />} />
    </Routes>
  );
};

export default App;

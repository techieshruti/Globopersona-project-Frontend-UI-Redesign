import Sidebar from "../components/layout/Sidebar";
import EmailAccountsHeader from "../components/emailAccounts/EmailAccountsHeader";
import EmailHeaderCards from "../components/EmailHeaderCards.jsx";
import EmailAccountRow from "../components/emailAccounts/EmailAccountRow";

import { CheckCircle, Mail, Activity, Settings } from "lucide-react";

const summaryCards = [
  {
    title: "Active Accounts",
    value: "3",
    subtitle: "of 3 total",
    icon: CheckCircle,
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    valueColor: "text-green-800",
    iconBg: "bg-green-500",
  },
  {
    title: "Daily Limit",
    value: "300",
    subtitle: "emails per day",
    icon: Mail,
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    valueColor: "text-blue-800",
    iconBg: "bg-blue-500",
  },
  {
    title: "Sent Today",
    value: "0",
    subtitle: "across all accounts",
    icon: Activity,
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    valueColor: "text-purple-800",
    iconBg: "bg-purple-500",
  },
  {
    title: "Utilization",
    value: "0%",
    subtitle: "of daily capacity",
    icon: Settings,
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    valueColor: "text-orange-800",
    iconBg: "bg-orange-500",
  },
];

const emailAccounts = [
  {
    email: "madhu.k@globopersona.com",
    provider: "SMTP/IMAP",
    status: "Active",
    verified: true,
    sentToday: "0/100 sent today",
  },
  {
    email: "test@globopersona.com",
    provider: "SMTP/IMAP",
    status: "Active",
    verified: true,
    sentToday: "0/100 sent today",
  },
  {
    email: "kotlamadhu0614@gmail.com",
    provider: "Gmail OAuth",
    status: "Active",
    verified: true,
    sentToday: "Last used: 9/15/2025",
  },
];

const EmailAccounts = () => {
  return (
    <div>
      <Sidebar />

      <div className="ml-20 bg-[#f5f7f9] min-h-screen">
        <EmailAccountsHeader />

        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-4 px-6 mt-6">
          {summaryCards.map((card) => (
            <EmailHeaderCards key={card.title} {...card} />
          ))}
        </div>

        {/* Email Accounts Section */}
        <div className="px-6 mt-8">
          <h2 className="text-lg font-semibold text-gray-800">
            Email Accounts
          </h2>
          <p className="text-sm text-gray-500">
            Manage your configured email accounts
          </p>

          <div className="mt-4 flex flex-col gap-3">
            {emailAccounts.map((account, idx) => (
              <EmailAccountRow key={idx} {...account} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailAccounts;

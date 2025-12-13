import Sidebar from "../components/layout/Sidebar";
import EmailCampaignHeader from "../components/EmailCampaigns/EmailCampaignHeader";
import CampaignSummaryCard from "../components/EmailCampaigns/CampaignSummaryCard";
import CampaignFilterBar from "../components/EmailCampaigns/CampaignFilterBar";
import CampaignCard from "../components/EmailCampaigns/CampaignCard";

import {
  LayoutGrid,
  Pencil,
  Sparkles,
  Users,
  Mail,
  MousePointerClick,
  Target,
  SquarePen,
  Brain,
  MousePointer,
} from "lucide-react";

const summaryCards = [
  {
    title: "Total Campaigns",
    value: 12,
    subtitle: "All campaigns",
    icon: Target,
    bg: "bg-blue-50",
    iconBg: "bg-blue-500",
    text: "text-blue-700",
  },
  {
    title: "Manual Campaigns",
    value: 0,
    subtitle: "User created",
    icon: SquarePen,
    bg: "bg-green-50",
    iconBg: "bg-green-500",
    text: "text-green-700",
  },
  {
    title: "AI Campaigns",
    value: 12,
    subtitle: "AI personalized",
    icon: Brain,
    bg: "bg-purple-50",
    iconBg: "bg-purple-500",
    text: "text-purple-700",
  },
  {
    title: "Total Recipients",
    value: 60,
    subtitle: "Email contacts",
    icon: Users,
    bg: "bg-orange-50",
    iconBg: "bg-orange-500",
    text: "text-orange-700",
  },
  {
    title: "Open Rate",
    value: "60%",
    subtitle: "Opens (events)",
    icon: Mail,
    bg: "bg-pink-50",
    iconBg: "bg-pink-500",
    text: "text-pink-700",
  },
  {
    title: "Click Rate",
    value: "0%",
    subtitle: "Average clicks",
    icon: MousePointer,
    bg: "bg-teal-50",
    iconBg: "bg-teal-500",
    text: "text-teal-700",
  },
];

const campaignData = [
  {
    status: "running",
    title: "land scaping",
    description: "No description available",
    stats: {
      recipients: 5,
      openRate: "0.0%",
      sent: 0,
      opens: 0,
      clicked: 0,
    },
    time: "Just now",
    list: "No list",
  },
  {
    status: "completed",
    title: "test final",
    description: "No description available",
    stats: {
      recipients: 5,
      openRate: "0.0%",
      sent: 0,
      opens: 0,
      clicked: 0,
    },
    time: "Just now",
    list: "No list",
  },
  {
    status: "draft",
    title: "Madhu hero",
    description: "No description available",
    stats: {
      recipients: 5,
      openRate: "0.0%",
      sent: 0,
      opens: 0,
      clicked: 0,
    },
    time: "Just now",
    list: "No list",
  },
];

const EmailCampaigns = () => {
  return (
    <div>
      <Sidebar />

      <div className="ml-20 bg-[#f5f7f9] min-h-screen">
        <EmailCampaignHeader />

        {/* Summary cards */}
        <div className="grid grid-cols-6 gap-4 px-6 mt-6">
          {summaryCards.map((item) => (
            <CampaignSummaryCard key={item.title} {...item} />
          ))}
        </div>

        <CampaignFilterBar />

        {/* Campaign cards */}
        <div className="grid grid-cols-3 gap-6 px-6 mt-6 pb-10">
          {campaignData.map((item, i) => (
            <CampaignCard key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmailCampaigns;

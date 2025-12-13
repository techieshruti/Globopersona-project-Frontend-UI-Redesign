import { RotateCw, Plus, Mail, RefreshCcw } from "lucide-react";

const EmailCampaignHeader = () => {
  return (
    <div className="flex justify-between items-center px-6 pt-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white">
          <Mail size={20} />
        </div>
        <div>
          <h1 className="text-xl font-bold">Email Campaigns</h1>
          <p className="text-sm text-gray-500">
            Create, manage, and track your email marketing campaigns
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="px-4 py-2 border rounded-lg text-sm flex items-center gap-2">
          <RefreshCcw size={16} />
          Refresh
        </button>
        <button className="px-4 py-2 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-white rounded-lg text-sm flex items-center gap-2">
          <Plus size={16} />
          New Campaign
        </button>
      </div>
    </div>
  );
};

export default EmailCampaignHeader;

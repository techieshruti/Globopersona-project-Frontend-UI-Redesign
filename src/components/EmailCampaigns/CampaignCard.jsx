import { Sparkles } from "lucide-react";

const CampaignCard = ({
  status,
  ai = true,
  title,
  description,
  stats,
  time,
  list,
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

      {/* top gradient bar */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500" />

      <div className="p-4 flex flex-col gap-4">

        {/* status row */}
        <div className="flex items-center gap-2 text-xs font-medium">
          <span
            className={`px-3 py-1 rounded-full ${
              status === "running"
                ? "bg-green-100 text-green-700"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {status}
          </span>

          {ai && (
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-purple-100 text-purple-700">
              <Sparkles size={12} />
              AI Personalized
            </span>
          )}
        </div>

        {/* title */}
        <div>
          <h3 className="font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>

        {/* main stats */}
        <div className="flex gap-3">
          <div className="flex-1 bg-blue-50 rounded-lg p-3 text-center">
            <p className="text-lg font-bold text-blue-700">
              {stats.recipients}
            </p>
            <p className="text-xs text-blue-500">Recipients</p>
          </div>

          <div className="flex-1 bg-green-50 rounded-lg p-3 text-center">
            <p className="text-lg font-bold text-green-700">
              {stats.openRate}
            </p>
            <p className="text-xs text-green-500">Open Rate</p>
          </div>
        </div>

        {/* sent / opens / clicked */}
        <div className="grid grid-cols-3 text-center text-xs text-gray-500">
          <div>
            <p className="font-semibold text-gray-700">{stats.sent}</p>
            <p>Sent</p>
          </div>
          <div>
            <p className="font-semibold text-green-600">{stats.opens}</p>
            <p>Opens</p>
          </div>
          <div>
            <p className="font-semibold text-purple-600">{stats.clicked}</p>
            <p>Clicked</p>
          </div>
        </div>

        {/* footer */}
        <div className="flex justify-between text-xs text-gray-400 pt-2 border-t">
          <span>{time}</span>
          <span>{list}</span>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;

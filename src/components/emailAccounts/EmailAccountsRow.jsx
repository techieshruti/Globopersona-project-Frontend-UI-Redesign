import { Check, Edit, Trash2, Activity } from "lucide-react";

const EmailAccountRow = ({
  email,
  provider,
  status,
  verified,
  sentToday,
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 flex justify-between items-center">

      {/* Left */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-gray-900">{email}</h3>

          <span className="px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded-full">

            {status}
          </span>

          {verified && (
            <span className="px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded-full">
              Verified
            </span>
          )}
        </div>

        <div className="text-sm text-gray-500 flex items-center gap-2">
          <span>{provider}</span>
          <span>•</span>
          <span>{sentToday}</span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 text-gray-500">
        <Activity size={18} className="cursor-pointer" />
        <Edit size={18} className="cursor-pointer" />
        <Trash2 size={18} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default EmailAccountRow;

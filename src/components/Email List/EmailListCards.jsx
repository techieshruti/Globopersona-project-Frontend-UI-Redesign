import { TriangleAlert } from "lucide-react";

const EmailListCard = ({
  status,
  connection,
  title,
  description,
  metrics,
  footer,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

      <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500" />

      <div className="p-5 flex flex-col gap-4">

        <div className="flex items-center gap-3 text-sm">
          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium">
            {status}
          </span>

          <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 flex items-center gap-1 font-medium">
            <TriangleAlert size={14} />
            {connection}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>

        <div className="flex gap-3">
          <div className="flex-1 bg-blue-50 rounded-xl p-3 text-center">
            <p className="text-lg font-bold text-blue-700">
              {metrics.validContacts}
            </p>
            <p className="text-sm text-blue-500">Valid Contacts</p>
          </div>

          <div className="flex-1 bg-green-50 rounded-xl p-3 text-center">
            <p className="text-lg font-bold text-green-700">
              {metrics.openRate}
            </p>
            <p className="text-sm text-green-500">Open Rate</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-3 text-sm text-gray-600">
          <span className="font-semibold text-green-700">
            {footer.value}
          </span>{" "}
          {footer.label}
        </div>
      </div>
    </div>
  );
};

export default EmailListCard;

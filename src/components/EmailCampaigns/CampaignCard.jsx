const CampaignCard = ({ status, title, recipients, openRate }) => {
  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500" />

      <div className="p-4">
        <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700">
          {status}
        </span>

        <h3 className="mt-3 font-bold">{title}</h3>
        <p className="text-sm text-gray-500">No description available</p>

        <div className="flex gap-3 mt-4">
          <div className="flex-1 bg-blue-50 p-3 rounded-lg text-center">
            <p className="font-bold text-blue-700">{recipients}</p>
            <p className="text-xs text-blue-500">Recipients</p>
          </div>
          <div className="flex-1 bg-green-50 p-3 rounded-lg text-center">
            <p className="font-bold text-green-700">{openRate}</p>
            <p className="text-xs text-green-500">Open Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;

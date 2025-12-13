const CampaignSummaryCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  bg,
  iconBg,
  text,
}) => {
  return (
    <div className={`${bg} p-4 rounded-xl border border-gray-200`}>
      <div className="flex justify-between items-center">
        <div>
          <p className={`text-sm font-medium ${text}`}>{title}</p>
          <p className="text-xl font-bold text-gray-900">{value}</p>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
        <div className={`${iconBg} p-2 rounded-lg`}>
          <Icon size={20} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default CampaignSummaryCard;

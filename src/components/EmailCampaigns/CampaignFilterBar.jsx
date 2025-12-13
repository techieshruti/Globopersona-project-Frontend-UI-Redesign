import { Grid, List, SlidersHorizontal } from "lucide-react";

const CampaignFilterBar = () => {
  return (
    <div className="mx-6 mt-6 bg-white border rounded-xl shadow-sm p-4 flex justify-between">
      <div className="flex gap-3 items-center">
        <input
          className="border px-4 py-2 rounded-lg text-sm w-80"
          placeholder="Search campaigns by name, description, or email list..."
        />
        <select className="border px-4 py-2 rounded-lg text-sm">
          <option>All Status</option>
        </select>
        <select className="border px-4 py-2 rounded-lg text-sm">
          <option>All Types</option>
        </select>
        <button className="border px-4 py-2 rounded-lg text-sm flex gap-2">
          <SlidersHorizontal size={16} />
          Filters
        </button>
      </div>

      <div className="flex gap-3">
        <button className="flex gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm">
          <Grid size={16} />
          Grid
        </button>
        <button className="flex gap-2 px-4 py-2 text-gray-500 text-sm">
          <List size={16} />
          List
        </button>
      </div>
    </div>
  );
};

export default CampaignFilterBar;

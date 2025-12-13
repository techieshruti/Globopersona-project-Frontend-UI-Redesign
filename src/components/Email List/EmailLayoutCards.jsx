import { Grid, List, SlidersHorizontal } from "lucide-react";
import React from "react";

const EmailLayoutCards = () => {
  return (
    <div>
      {/* filter */}
      <div className="mx-5 mt-8 p-4 bg-white border border-gray-200 rounded-xl shadow-md flex justify-between items-center">
        {/* Left section */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex items-center px-4 py-2 border border-gray-200 rounded-lg bg-white w-[420px]">
            <input
              type="text"
              placeholder="Search lists by name, description, or tags..."
              className="outline-none text-sm text-gray-600 w-full"
            />
          </div>

          {/* Status */}
          <select className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 bg-white">
            <option>All Status</option>
          </select>

          {/* Filters */}
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg bg-white text-sm text-gray-600">
            <SlidersHorizontal size={16} />
            Filters
          </button>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 text-sm">
            <Grid size={16} />
            Grid
          </button>

          <button className="flex items-center gap-2 text-gray-500 text-sm">
            <List size={16} />
            List
          </button>
        </div>
      </div>

      {/* Email List UI card */}
      <div>
        {/* top section */}
        <div>
          <p>active</p>
          <p>icon and poor</p>
        </div>

        {/* body */}
        <h1>Final Test</h1>
        <span>subtitle</span>

        {/* button */}
        <div>
          <button>1st</button>
          <button>2nd</button>
        </div>

        {/* footer */}
        <button>valid</button>
      </div>
    </div>
  );
};

export default EmailLayoutCards;

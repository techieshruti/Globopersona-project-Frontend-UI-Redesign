import { RefreshCcw, Plus, Mail } from "lucide-react";

const EmailAccountsHeader = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4 border-b bg-white">

      <div className="flex gap-4 justify-center items-center">
        <div className="relative">
              <h1 className="w-10 h-10 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white">
                <Mail/>
              </h1>
              <span className="absolute w-3 h-3 bg-green-600 border-t-2 border-l-2 bottom-0.5 -right-0.5 rounded-full text-white flex items-center justify-center text-xs font-semibold"></span>
            </div>
        <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          Email Configuration
          <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
            Online
          </span>
        </h1>
        <p className="text-sm text-gray-500">
          Manage your email accounts and SMTP settings
        </p>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm">
          <RefreshCcw size={16} />
          Refresh
        </button>

        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm">
          <Plus size={16} />
          Add Email Account
        </button>
      </div>
    </div>
  );
};

export default EmailAccountsHeader;

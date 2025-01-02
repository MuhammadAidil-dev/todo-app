import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SettingPage = () => {
  return (
    <div className="py-8">
      <div className="border border-slate-500 rounded-sm p-4">
        <span className="flex justify-between">
          <h4 className="font-semibold text-lg after:content-[''] after:block after:border-primary after:border-b-2 after:scale-x-50 after:origin-left">
            Account Information
          </h4>
          <Link
            to="/"
            className="text-sm after:content-[''] after:block after:border-black after:border-b after:scale-x-50 after:origin-right"
          >
            Go back
          </Link>
        </span>
        <AccountInformation />
      </div>
    </div>
  );
};

const AccountInformation = () => {
  return (
    <div className="mt-8 flex flex-col">
      <div className="flex items-center gap-2 lg:gap-4">
        <div className="w-16 h-16 bg-white flex justify-center items-center rounded-full">
          <FaUser />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-sm">Muhammad Aidil</p>
          <p className="text-xs text-slate-500">muhammadaidil@gmail.com</p>
        </div>
      </div>
      <form className="border border-slate-500 p-4 mt-8">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-semibold text-sm">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="outline-none border border-slate-500 py-1 px-2 text-xs rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-semibold text-sm">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="outline-none border border-slate-500 py-1 px-2 text-xs rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="contact" className="font-semibold text-sm">
            Contact
          </label>
          <input
            type="text"
            id="contact"
            className="outline-none border border-slate-500 py-1 px-2 text-xs rounded-sm"
          />
        </div>
        <div className="flex items-center gap-2 mt-4">
          <button className="bg-green-500 py-1 px-2 text-white font-semibold rounded-md text-xs hover:bg-green-700 transition-colors">
            Save change
          </button>
          <button className="bg-red-500 py-1 px-2 text-white font-semibold rounded-md text-xs hover:bg-red-700 transition-colors">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingPage;

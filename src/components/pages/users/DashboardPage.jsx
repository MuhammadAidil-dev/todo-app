import DashboardTaskCompleted from '../../fragments/user-component/dashboard/DashboardTaskCompleted';
import DashboardTaskContainer from '../../fragments/user-component/dashboard/DashboardTaskContainer';
import DashboardTaskProgres from '../../fragments/user-component/dashboard/DashboardTaskProgres';

const DashboardPage = () => {
  return (
    <div className="py-8 flex flex-col w-full">
      <h3 className="text-lg font-semibold mt-4 md:mt-0 lg:text-2xl">
        Welcome back User
      </h3>
      <div className="flex-1 border border-slate-500 flex flex-col rounded-md p-4 md:mt-2 lg:flex-row lg:gap-4">
        <div className="w-full lg:w-[60%]">
          <DashboardTaskContainer />
        </div>
        <div className="w-full lg:w-[40%]">
          <DashboardTaskProgres />
          <DashboardTaskCompleted />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

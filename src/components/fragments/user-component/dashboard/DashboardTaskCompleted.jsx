import { BiTask } from 'react-icons/bi';
import TaskCard from '../../task/TaskCard';

const DashboardTaskCompleted = () => {
  return (
    <div className="bg-background rounded-md shadow-lg p-4 mt-4 flex flex-col">
      <p className="flex items-center gap-1 text-sm text-primary">
        <span className="text-slate-500">
          <BiTask />
        </span>{' '}
        Completed Task
      </p>
      <ListTaskCompleted />
    </div>
  );
};

const ListTaskCompleted = () => {
  return (
    <div className="mt-4 flex flex-col gap-4 max-h-[300px] overflow-y-auto">
      {Array.from({ length: 3 }).map((_, i) => (
        <TaskCard key={i} />
      ))}
    </div>
  );
};

export default DashboardTaskCompleted;

import { BiTask } from 'react-icons/bi';
import TaskCard from '../../task/TaskCard';
import { useAppContext } from '../../../../hooks/hooks';

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
  const { todos } = useAppContext();
  const filteredTodos = todos.filter((todo) => {
    return todo.taskStatus === 'completed';
  });

  return (
    <div className="mt-4 flex flex-col gap-4 max-h-[300px] overflow-y-auto">
      {filteredTodos.length > 0 ? (
        filteredTodos?.map((todo, index) => (
          <TaskCard key={index} todo={todo} />
        ))
      ) : (
        <p className="text-sm text-center">Tidak ada task yang diselesaikan</p>
      )}
    </div>
  );
};

export default DashboardTaskCompleted;

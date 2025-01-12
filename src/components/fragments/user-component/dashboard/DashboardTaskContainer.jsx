import { BiTask } from 'react-icons/bi';
import TaskCard from '../../task/TaskCard';
import { MdAddTask } from 'react-icons/md';
import { useAppContext } from '../../../../hooks/hooks';
import { formatDateString } from '../../../../utils/utils';

const DashboardTaskContainer = ({ handleOpenTaskModal }) => {
  const date = new Date().toISOString();

  return (
    <div className="bg-background rounded-sm shadow-lg flex flex-col p-4">
      <div className="flex justify-between">
        <p className="flex items-center text-primary text-sn gap-1">
          <span className="text-slate-500 text-sm">
            <BiTask />
          </span>{' '}
          To-Do
        </p>
        <button
          onClick={handleOpenTaskModal}
          className="flex items-center text-primary text-sm gap-1 cursor-pointer border border-primary p-1 rounded-sm"
        >
          <span className="text-slate-500 text-sm">
            <MdAddTask />
          </span>{' '}
          Add task
        </button>
      </div>
      <p className="mt-2 text-xs">{formatDateString(date)}</p>
      <TaskList />
    </div>
  );
};

const TaskList = () => {
  const { todos } = useAppContext();
  const filteredTodos = todos.filter((todo) => todo.taskStatus != 'completed');
  return (
    <div className="flex flex-col mt-4 gap-4 max-h-screen overflow-y-auto items-center">
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo, index) => <TaskCard key={index} todo={todo} />)
      ) : (
        <p className="text-center">Tidak ada todo</p>
      )}
    </div>
  );
};

export default DashboardTaskContainer;

import { BiTask } from 'react-icons/bi';
import { useAppContext } from '../../../../hooks/hooks';
import { useEffect, useState } from 'react';

const DashboardTaskProgres = () => {
  return (
    <div className="mt-4 bg-background rounded-md shadow-lg p-4 flex flex-col gap-2">
      <p className="flex items-center text-primary text-sm gap-1">
        <span className="text-slate-500 text-sm">
          <BiTask />
        </span>{' '}
        Task Status
      </p>
      <TaskProgresContainer />
    </div>
  );
};

const TaskProgresContainer = () => {
  const { todos } = useAppContext();
  const [totalTodo, setTotalTodo] = useState(0);
  const totalCompleted = todos.filter(
    (todo) => todo.taskStatus === 'completed'
  ).length;
  const totalInProgres = todos.filter(
    (todo) => todo.taskStatus === 'in progress'
  ).length;
  const totalNotStarted = todos.filter(
    (todo) => todo.taskStatus === 'not started'
  ).length;
  const complete = totalTodo > 0 ? (totalCompleted / totalTodo) * 100 : 0;
  const inProgres = totalTodo > 0 ? (totalInProgres / totalTodo) * 100 : 0;
  const notStarted = totalTodo > 0 ? (totalNotStarted / totalTodo) * 100 : 0;

  useEffect(() => {
    setTotalTodo(todos.length);
  }, [todos]);

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex flex-col gap-2 items-center">
        <TaskProgres progress={complete} color="green" />
        <div className="text-xs font-semibold flex gap-1 items-center">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>{' '}
          <span>Completed</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <TaskProgres progress={inProgres} color="blue" />
        <div className="text-xs font-semibold flex gap-1 items-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>{' '}
          <span>In progres</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <TaskProgres progress={notStarted} color="red" />
        <div className="text-xs font-semibold flex gap-1 items-center">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>{' '}
          <span>Not started</span>
        </div>
      </div>
    </div>
  );
};

const TaskProgres = ({ progress, color }) => {
  const gradient = `conic-gradient(${color} 0% ${progress}%, #cbd5e1 ${progress}% 100%)`;

  return (
    <div
      className="w-[80px] h-[80px] rounded-full flex justify-center items-center"
      style={{
        backgroundImage: gradient,
      }}
    >
      <div className="bg-white w-[80%] h-[80%] rounded-full flex justify-center items-center">
        {progress}%
      </div>
    </div>
  );
};

export default DashboardTaskProgres;

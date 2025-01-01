import { FaRegCircle } from 'react-icons/fa6';

const TaskCard = () => {
  return (
    <div className=" border border-slate-500 p-3 rounded-md flex flex-col">
      <TaskCardBody />
      <TaskCardInformation />
    </div>
  );
};

const TaskCardBody = () => {
  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <span className="text-sm font-bold text-red-500">
        <FaRegCircle />
      </span>
      <div className="flex flex-col sm:w-[80%]">
        <h4 className="text-lg line-clamp-2 font-semibold">
          Membuat aplikasi todo app dengan react dan express
        </h4>
        <p className="text-sm line-clamp-2 text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, eos?
        </p>
      </div>
      <div className="sm:shrink-0 w-[100px] mt-2 overflow-hidden rounded-md">
        <img src="https://placehold.co/100?text=Task Image" alt="task image" />
      </div>
    </div>
  );
};

const TaskCardInformation = () => {
  return (
    <div className="flex items-center text-[9px] gap-2 mt-4">
      <p className="flex items-center gap-1">
        Prority: <span className="text-blue-500">Moderate</span>
      </p>
      <p className="flex items-center gap-1">
        Status: <span className="text-red-500">Not Started</span>
      </p>
      <p className="flex items-center gap-1">
        Created on: <span className="text-slate-500">31/12/2024</span>
      </p>
    </div>
  );
};
export default TaskCard;

import { FaTrash } from 'react-icons/fa6';
import TaskCard from '../../fragments/task/TaskCard';
import { RiEditBoxFill } from 'react-icons/ri';

const MyTaskPage = () => {
  return (
    <div className="py-8 flex flex-col w-full lg:flex-row lg:gap-4">
      <MyTaskList />
      <DetailTask />
    </div>
  );
};

const MyTaskList = () => {
  return (
    <div className="lg:w-full max-h-screen overflow-y-auto flex flex-col border border-slate-500 rounded-md shadow-lg py-4 px-6">
      <p className="text-lg font-semibold after:content-[''] after:block after:border-b-2 after:w-8 after:border-primary">
        My Tasks
      </p>
      <div className="flex flex-col gap-4 mt-4 lg:items-center">
        {Array.from({ length: 4 }).map((_, i) => (
          <TaskCard key={i} />
        ))}
      </div>
    </div>
  );
};

const DetailTask = () => {
  return (
    <div className="lg:w-full max-h-screen overflow-y-auto h-auto flex flex-col border border-slate-500 rounded-md shadow-lg p-4 mt-8 lg:mt-0">
      <div className="flex items-center gap-4">
        <div className="w-[40%] shrink-0 mt-2 overflow-hidden rounded-md">
          <img
            src="https://placehold.co/200?text=Task Image"
            alt="task image"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold">
            Membuat aplikasi todo app dengan react dan express
          </h4>
          <p className="flex items-center gap-1 text-[10px]">
            Prority: <span className="text-blue-500">Moderate</span>
          </p>
          <p className="flex items-center gap-1 text-[10px]">
            Status: <span className="text-red-500">Not Started</span>
          </p>
          <p className="flex items-center gap-1 text-[10px]">
            Created on: <span className="text-slate-500">31/12/2024</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <p className="text-sm text-justify text-slate-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          eveniet quod asperiores quae, at, nobis sapiente dolorem, voluptate
          doloribus repudiandae earum a adipisci corrupti magni consequuntur
          voluptatibus odio labore. Quas.
        </p>
      </div>
      <div className="flex justify-end gap-2 mt-4 lg:mt-auto">
        <button className="p-2 bg-primary text-white rounded-md cursor-pointer text-xs flex justify-center items-center transition-colors hover:bg-secondary">
          <FaTrash />
        </button>
        <button className="p-2 bg-primary text-white rounded-md cursor-pointer text-xs flex justify-center items-center transition-colors hover:bg-secondary">
          <RiEditBoxFill />
        </button>
      </div>
    </div>
  );
};

export default MyTaskPage;

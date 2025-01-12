import { FaTrash } from 'react-icons/fa6';
import TaskCard from '../../fragments/task/TaskCard';
import { RiEditBoxFill } from 'react-icons/ri';
import { useAppContext } from '../../../hooks/hooks';
import { useState } from 'react';
import CONFIG from '../../../config/config';
import {
  deleteTodo,
  formatDate,
  ToastNotification,
} from '../../../utils/utils';
import ModalConfirm from '../../fragments/modal/ModalConfirm';

const MyTaskPage = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  return (
    <div className="py-8 flex flex-col w-full lg:flex-row lg:gap-4">
      <MyTaskList onSelectTodo={handleSelectedTodo} />
      <DetailTaskContainer selectedTodo={selectedTodo} />
    </div>
  );
};

const MyTaskList = ({ onSelectTodo }) => {
  const { todos } = useAppContext();
  return (
    <div className="lg:w-full max-h-screen overflow-y-auto flex flex-col border border-slate-500 rounded-md shadow-lg py-4 px-6">
      <p className="text-lg font-semibold after:content-[''] after:block after:border-b-2 after:w-8 after:border-primary">
        My Tasks
      </p>
      <div className="flex flex-col gap-4 mt-4 items-center">
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <div
              key={index}
              onClick={() => onSelectTodo(todo)}
              className="cursor-pointer transition-colors hover:bg-slate-200 rounded-sm "
            >
              <TaskCard todo={todo} />
            </div>
          ))
        ) : (
          <p className="text-center text-sm">Tidak ada todo</p>
        )}
      </div>
    </div>
  );
};

const DetailTaskContainer = ({ selectedTodo }) => {
  return (
    <div className="lg:w-full max-h-screen overflow-y-auto h-auto flex flex-col border border-slate-500 rounded-md shadow-lg p-4 mt-8 lg:mt-0">
      <DetailTask todo={selectedTodo} />
      <ModalConfirm />
    </div>
  );
};

const DetailTask = ({ todo }) => {
  const stylePriority =
    todo?.taskPriority === 'low'
      ? 'text-green-500'
      : todo?.taskPriority === 'medium'
      ? 'text-orange-500'
      : 'text-blue-500';

  const styleStatus =
    todo?.taskStatus === 'not started'
      ? 'text-red-500'
      : todo?.taskStatus === 'in progress'
      ? 'text-blue-500'
      : 'text-green-500';

  const handleDeleteTodo = async (todoID) => {
    try {
      const { error, message } = await deleteTodo(todoID);
      if (error) {
        throw new Error(message);
      }
      ToastNotification(message, 'success');
    } catch (error) {
      ToastNotification(error.message, 'error');
    }
  };

  if (!todo) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-sm">Tidak ada todo yang dipilih</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center gap-4">
        <div className="w-[40%] h-full shrink-0 mt-2 overflow-hidden rounded-md">
          <img
            src={
              todo?.taskImage
                ? CONFIG.BASE_URL + todo.taskImage
                : 'https://placehold.co/200?text=Task Image'
            }
            alt="task image"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold">{todo.taskTitle}</h4>
          <p className="flex items-center gap-1 text-[10px]">
            Prority: <span className={stylePriority}>{todo.taskPriority}</span>
          </p>
          <p className="flex items-center gap-1 text-[10px]">
            Status: <span className={styleStatus}>{todo.taskStatus}</span>
          </p>
          <p className="flex items-center gap-1 text-[10px]">
            Created on:{' '}
            <span className="text-slate-500">{formatDate(todo.createdAt)}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <p className="text-sm text-justify text-slate-500">
          {todo.taskDescription}
        </p>
      </div>
      <div className="flex justify-end gap-2 mt-4 lg:mt-auto">
        <button
          onClick={() => handleDeleteTodo(todo._id)}
          className="p-2 bg-primary text-white rounded-md cursor-pointer text-xs flex justify-center items-center transition-colors hover:bg-secondary"
        >
          <FaTrash />
        </button>
        <button className="p-2 bg-primary text-white rounded-md cursor-pointer text-xs flex justify-center items-center transition-colors hover:bg-secondary">
          <RiEditBoxFill />
        </button>
      </div>
    </>
  );
};

export default MyTaskPage;

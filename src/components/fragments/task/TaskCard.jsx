import { FaRegCircle } from 'react-icons/fa6';
import {
  formatDate,
  ToastNotification,
  updateTodo,
} from '../../../utils/utils';
import CONFIG from '../../../config/config';
import { BsThreeDots } from 'react-icons/bs';
import { useState } from 'react';
import { useAppContext } from '../../../hooks/hooks';

const TaskCard = ({ todo }) => {
  const [activedDropdown, setActivedDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActivedDropdown((prevDropdown) => (prevDropdown ? null : id));
  };

  return (
    <div className="w-[300px] border border-slate-500 p-3 rounded-md flex flex-col sm:w-[350px]">
      <TaskCardStatusButton
        todo={todo}
        isActive={activedDropdown}
        toggleDropdown={() => toggleDropdown(todo._id)}
      />
      <TaskCardBody todo={todo} />
      <TaskCardInformation todo={todo} />
    </div>
  );
};

const TaskCardBody = ({ todo }) => {
  const imageURL = todo?.taskImage
    ? `${CONFIG.BASE_URL}${todo.taskImage}`
    : 'https://placehold.co/100?text=Task Image';

  return (
    <div className="flex flex-row gap-2">
      <span className="text-sm font-bold text-red-500">
        <FaRegCircle />
      </span>
      <div className="flex flex-col w-[80%]">
        <h4 className="text-lg line-clamp-2 font-semibold">
          {todo?.taskTitle}
        </h4>
        {todo?.taskDescription && (
          <p className="text-sm line-clamp-2 text-slate-500">
            {todo.taskDescription}
          </p>
        )}
      </div>
      <div className="sm:shrink-0 w-[100px] h-[100px] overflow-hidden mt-2 rounded-md">
        <img
          src={imageURL}
          alt="task image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const TaskCardInformation = ({ todo }) => {
  // style priority
  const stylePriority =
    todo?.taskPriority === 'low'
      ? 'text-green-500'
      : todo?.taskPriority === 'medium'
      ? 'text-orange-500'
      : 'text-red-500';

  const styleStatus =
    todo?.taskStatus === 'not started'
      ? 'text-red-500'
      : todo?.taskStatus === 'in progress'
      ? 'text-blue-500'
      : 'text-green-500';

  return (
    <div className="flex items-center text-[9px] gap-2 mt-4">
      <p className="flex items-center gap-1">
        Prority: <span className={stylePriority}>{todo?.taskPriority}</span>
      </p>
      <p className="flex items-center gap-1">
        Status: <span className={styleStatus}>{todo?.taskStatus}</span>
      </p>
      <p className="flex items-center gap-1">
        Created on:{' '}
        <span className="text-slate-500">{formatDate(todo?.createdAt)}</span>
      </p>
    </div>
  );
};

const TaskCardStatusButton = ({ todo, isActive, toggleDropdown }) => {
  const { fetchData } = useAppContext();
  const handleUpdateStatus = async (status) => {
    const formData = new FormData();
    formData.append('taskStatus', status);
    try {
      const { error, message } = await updateTodo({
        id: todo._id,
        updateData: formData,
      });
      if (error) {
        throw new Error(message);
      }
      ToastNotification(message, 'success');
      fetchData();
    } catch (error) {
      ToastNotification(error.message, 'error');
    }
  };

  // list status
  const ListStatus = () => {
    const validStatus = ['completed', 'in progress', 'not started'];
    const filteredStatus = validStatus.filter(
      (data) => data != todo?.taskStatus
    );

    return (
      <ul className="flex flex-col mt-1 gap-2">
        {filteredStatus.map((status, index) => (
          <li
            key={index}
            onClick={() => handleUpdateStatus(status)}
            className="text-[10px] hover:text-green-500 cursor-pointer"
          >
            {status}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="relative flex justify-end border-b border-slate-300 mb-2 pb-1">
      <BsThreeDots onClick={toggleDropdown} className="cursor-pointer" />
      <div
        className={`bg-white shadow-sm absolute top-full w-[150px] z-10 p-2 rounded-sm transform ${
          isActive === todo?._id ? 'scale-y-100' : 'scale-y-0'
        } transition-transform origin-top`}
      >
        <h4 className="text-xs text-primary font-semibold after:content-[''] after:border-b after:block">
          Set status
        </h4>
        <ListStatus />
      </div>
    </div>
  );
};
export default TaskCard;

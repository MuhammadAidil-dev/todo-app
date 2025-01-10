import { FaRegCircle } from 'react-icons/fa6';
import { formatDate } from '../../../utils/utils';
import CONFIG from '../../../config/config';

const TaskCard = ({ todo }) => {
  return (
    <div className="w-[300px] border border-slate-500 p-3 rounded-md flex flex-col sm:w-[350px]">
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
      : 'text-blue-500';

  const styleStatus =
    todo?.taskStatus === 'not started'
      ? 'text-red-500'
      : todo?.taskStatus === 'in progres'
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
export default TaskCard;

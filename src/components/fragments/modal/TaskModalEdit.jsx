import { useState } from 'react';
import { useAppContext } from '../../../hooks/hooks';
import { ToastNotification, updateTodo } from '../../../utils/utils';
import CONFIG from '../../../config/config';

const TaskModalEdit = ({ isOpen, setTaskModal, todo, setSelectedTodo }) => {
  const [taskTitle, setTaskTitle] = useState(todo.taskTitle);
  const [taskDescription, setTaskDescription] = useState(
    todo.taskDescription || ''
  );
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(
    todo.taskImage
      ? CONFIG.BASE_URL + todo.taskImage
      : 'https://placehold.co/100?text=Task Image'
  );
  const [selectedPriority, setSelectedPriority] = useState(todo.taskPriority);

  const { fetchData } = useAppContext();

  const handleChangePriority = (e) => {
    setSelectedPriority(e.target.value);
  };

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('taskTitle', taskTitle);
    formData.append('taskDescription', taskDescription);
    if (selectedImage) {
      formData.append('fileImage', selectedImage);
    }
    formData.append('taskPriority', selectedPriority);

    try {
      const { error, message, todoUpdate } = await updateTodo({
        id: todo._id,
        updateData: formData,
      });
      if (error) {
        throw new Error(message);
      }
      fetchData();
      ToastNotification(message, 'success');
      setTaskModal(false);
      setSelectedTodo(todoUpdate);
      clearInput();
    } catch (error) {
      ToastNotification(error.message, 'error');
    }
  };

  const clearInput = () => {
    setTaskTitle('');
    setTaskDescription('');
    setSelectedImage(null);
    setPreviewImage(null);
    setSelectedPriority('low');
  };

  return (
    <div
      className={`fixed inset-y-0 inset-x-0 bg-black bg-opacity-30 z-10 justify-center items-center ${
        isOpen ? 'flex' : 'hidden'
      }`}
    >
      <div className="flex flex-col bg-white w-[90%] p-4 rounded-md shadow-sm lg:w-[60%] mt-16">
        <span className="flex justify-between">
          <h4 className="font-semibold text-sm after:block after:content-[''] after:border-b-2 after:border-primary after:w-[50%]">
            EditTask
          </h4>
          <button
            onClick={() => setTaskModal(false)}
            className="cursor-pointer text-sm after:block after:content-[''] after:border-b after:border-black after:scale-x-[0.2] hover:after:scale-x-100 after:origin-right after:transition-transform"
          >
            Go back
          </button>
        </span>
        <div className="border border-slate-500 p-4 mt-4">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-sm font-semibold">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                className="outline-none border border-slate-500 rounded-sm py-1 px-2 text-xs"
                autoComplete="off"
                required
              />
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-sm">Priority</h4>
              <div className="flex items-center gap-4">
                <p className="flex items-center gap-1 text-sm text-slate-500 before:content-[''] before:w-2 before:h-2 before:bg-red-500 before:rounded-full">
                  High
                  <input
                    type="radio"
                    name="priority"
                    value="high"
                    checked={selectedPriority === 'high'}
                    onChange={handleChangePriority}
                  />
                </p>
                <p className="flex items-center gap-1 text-sm text-slate-500 before:content-[''] before:w-2 before:h-2 before:bg-orange-500 before:rounded-full">
                  Medium
                  <input
                    type="radio"
                    name="priority"
                    value="medium"
                    checked={selectedPriority === 'medium'}
                    onChange={handleChangePriority}
                  />
                </p>
                <p className="flex items-center gap-1 text-sm text-slate-500 before:content-[''] before:w-2 before:h-2 before:bg-green-500 before:rounded-full">
                  Low
                  <input
                    type="radio"
                    name="priority"
                    value="low"
                    checked={selectedPriority === 'low'}
                    onChange={handleChangePriority}
                  />
                </p>
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="task-description"
                className="font-semibold text-sm"
              >
                Task Description{' '}
                <span className="text-slate-500 font-normal">(Optional)</span>
              </label>
              <textarea
                name="task-description"
                id="task-description"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className="outline-none border border-slate-500 p-2 text-xs w-full h-[100px]"
              ></textarea>
            </div>
            <div className="mt-2">
              <input
                type="file"
                id="upload-image"
                accept="image/*"
                onChange={handleChangeImage}
                className="hidden"
              />
              <h4 className="font-semibold text-sm">
                Upload Image{' '}
                <span className="font-normal text-slate-500">(Optional)</span>
              </h4>
              <div className="flex items-center gap-4">
                <div className="sm:shrink-0 w-[80px] mt-2 overflow-hidden rounded-md lg:w-[100px]">
                  <img src={previewImage} alt="task image" />
                </div>
                <label
                  htmlFor="upload-image"
                  className="p-2 text-xs border border-slate-300 shadow-md rounded-sm cursor-pointer"
                >
                  Browse file
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="bg-primary py-1 px-2 rounded-md font-semibold text-white text-xs mt-4 hover:bg-secondary transition-colors"
            >
              Done
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskModalEdit;

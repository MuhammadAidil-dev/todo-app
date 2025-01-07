import { toast } from 'react-toastify';
import CONFIG from '../config/config';

const formatDate = (inputDate) => {
  if (inputDate) {
    const date = new Date(inputDate);
    return new Intl.DateTimeFormat('id-ID').format(date);
  }
};

const formatDateString = (inputDate) => {
  if (inputDate) {
    return new Date(inputDate).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }
};

// fetch todo
const fetchTodo = async () => {
  try {
    const response = await fetch(`${CONFIG.BASE_URL}/todos`);
    if (!response.ok) {
      throw new Error('Failed to get todo');
    }
    const result = await response.json();
    return {
      error: false,
      todos: result.data.todos,
      message: 'success fetch todo',
    };
  } catch (error) {
    return { error: true, todos: null, message: error.message };
  }
};

const createTodo = async (formData) => {
  try {
    const response = await fetch(`${CONFIG.BASE_URL}/todos`, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      throw new Error('Failed to create todo');
    }

    const result = await response.json();
    if (result.status === 'success') {
      return { error: false, todo: result.data, message: result.message };
    }
  } catch (error) {
    return { error: true, todo: null, message: error.message };
  }
};

// toast notification
const ToastNotification = (message, status) => {
  if (status === 'success') {
    return toast.success(message, {
      pauseOnHover: false,
      autoClose: 3000,
    });
  } else if (status === 'error') {
    return toast.error(message, {
      pauseOnHover: false,
      autoClose: 3000,
    });
  }
};

export {
  formatDate,
  formatDateString,
  fetchTodo,
  ToastNotification,
  createTodo,
};

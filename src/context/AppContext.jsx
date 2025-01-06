import { createContext, useEffect, useState } from 'react';
import CONFIG from '../config/config';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodo();
  }, []);

  // fetch todo
  const fetchTodo = async () => {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}/todos`);
      if (!response.ok) {
        throw new Error('Failed to get todo');
      }
      const result = await response.json();
      setTodos(result.data.todos);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AppContext.Provider value={{ todos }}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;

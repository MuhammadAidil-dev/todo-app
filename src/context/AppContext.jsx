import { createContext, useEffect, useState } from 'react';
import { fetchTodo } from '../utils/utils';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { error, todos: todosData, message } = await fetchTodo();
      if (error) {
        throw new Error(message);
      }
      setTodos(todosData);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AppContext.Provider value={{ todos, fetchData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

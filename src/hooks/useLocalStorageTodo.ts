import { useState, useEffect } from 'react';

import { Todo } from '@/types/types';

export const useLocalStorageTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (index: number) => {
    const newTodo = todos.filter((todo) => todo.id !== index);
    setTodos(newTodo);
  };

  useEffect(() => {
    const storedTodo = localStorage.getItem('todos');

    if (storedTodo) {
      setTodos(JSON.parse(storedTodo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return [todos, addTodo, removeTodo] as const;
};

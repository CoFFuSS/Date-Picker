import { useState, useEffect } from 'react';

import { Todo } from '@/types/interfaces';

export const useLocalStorageTodo = () => {
  const [todo, setTodo] = useState<Todo[]>([]);

  const addTodo = (newTodo: Todo) => {
    setTodo([...todo, newTodo]);
  };

  const removeTodo = (index: number) => {
    const newTodo = todo.filter((_, i) => i !== index);
    setTodo(newTodo);
  };

  useEffect(() => {
    const storedTodo = localStorage.getItem('todos');

    if (storedTodo) {
      setTodo(JSON.parse(storedTodo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo));
  }, [todo]);

  return [todo, addTodo, removeTodo] as const;
};

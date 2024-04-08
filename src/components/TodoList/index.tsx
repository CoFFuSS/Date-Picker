import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { Todo } from '@/types/interfaces';

interface TodoListProps {
  selectedDate: string;
  todos: Todo[];
  addTodo: (newTodo: Todo) => void;
  removeTodo: (index: number) => void;
  todoText: string;
  setTodoText: Dispatch<SetStateAction<string>>;
}

export const TodoList = ({
  selectedDate,
  todos,
  addTodo,
  removeTodo,
  todoText,
  setTodoText,
}: TodoListProps) => {
  const filteredTodos = todos.filter(({ createdAt }) => createdAt === selectedDate);

  const handleAddTodo = () => {
    addTodo({ id: 1, title: todoText, createdAt: selectedDate });
  };

  const handleRemoveTodo = () => {
    removeTodo(1);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => () => {
    setTodoText(e.target.value);
  };

  return (
    <div>
      <input
        onChange={handleChange}
        value={todoText}
      />
      <button
        onClick={handleAddTodo}
        type='submit'
      >
        Add Todo
      </button>
      <button
        onClick={handleRemoveTodo}
        type='submit'
      >
        Remove Todo
      </button>
      {filteredTodos.map((todo) => {
        const { id, createdAt, title } = todo;

        return (
          <h1 key={id}>
            {createdAt}
            {id}
            {title}
          </h1>
        );
      })}
    </div>
  );
};

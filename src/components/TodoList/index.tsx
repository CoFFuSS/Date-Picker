import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

import { Todo } from '@/types/types';

import {
  Container,
  DateInfoBlock,
  DateInputField,
  EmptyError,
  InputLabel,
  TodoButton,
  Wrapper,
} from './styled';

interface TodoListProps {
  isShown: boolean;
  selectedDate: string;
  todos: Todo[];
  addTodo: (newTodo: Todo) => void;
  removeTodo: (index: number) => void;
  todoText: string;
  setTodoText: Dispatch<SetStateAction<string>>;
}

export const TodoList = ({
  isShown,
  selectedDate,
  todos,
  addTodo,
  removeTodo,
  todoText,
  setTodoText,
}: TodoListProps) => {
  const filteredTodos = todos.filter(({ createdAt }) => createdAt === selectedDate);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  const handleAddTodo = () => {
    if (todoText.length > 0) {
      setIsEmpty(true);
      const lastTodo = todos[todos.length - 1];
      const id = lastTodo ? lastTodo.id + 1 : 1;
      addTodo({ id, title: todoText, createdAt: selectedDate });
      setTodoText('');
    } else {
      setIsEmpty(false);
    }
  };

  const handleRemoveTodo = (id: number) => () => {
    removeTodo(id);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  return (
    <Wrapper isShown={isShown}>
      <DateInfoBlock>Selected day - {selectedDate}</DateInfoBlock>
      <Container>
        <InputLabel htmlFor='inputTodo'>
          <DateInputField
            value={todoText}
            onChange={handleChange}
            placeholder='Enter Todo Text'
            data-testid='todo-input'
          />
        </InputLabel>
        <TodoButton
          onClick={handleAddTodo}
          type='submit'
          data-testid='add-todo-button'
        >
          Add Todo
        </TodoButton>
      </Container>
      {!isEmpty && <EmptyError>You dont enter anything</EmptyError>}
      {filteredTodos.map(({ id, title }) => (
        <Container key={id}>
          {title}
          <TodoButton
            onClick={handleRemoveTodo(id)}
            type='submit'
            data-testid={`remove-todo-button-${id}`}
          >
            Remove Todo
          </TodoButton>
        </Container>
      ))}
    </Wrapper>
  );
};

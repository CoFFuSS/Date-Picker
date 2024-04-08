import { ComponentType, useContext, useState } from 'react';

import { TodoList } from '@/components/TodoList';
import { useLocalStorageTodo } from '@/hooks/useLocalStorageTodo';
import { CalendarContext } from '@/context/CalendarContext';

export const todoLogicDecorator = (Component: ComponentType<{}>) => () => {
  const [todoText, setTodoText] = useState<string>('');
  const [todo, addTodo, removeTodo] = useLocalStorageTodo();
  const { selectedValue } = useContext(CalendarContext);

  return (
    <div>
      <Component />
      <TodoList
        selectedDate={selectedValue}
        todos={todo}
        addTodo={addTodo}
        removeTodo={removeTodo}
        todoText={todoText}
        setTodoText={setTodoText}
      />
    </div>
  );
};

import { ComponentType, useContext, useState } from 'react';

import { TodoList } from '@/components/TodoList';
import { CalendarContext } from '@/context/CalendarContext';
import { Todo } from '@/types/types';

export const todoLogicDecorator =
  (
    Component: ComponentType<{}>,
    todo: Todo[],
    addTodo: (newTodo: Todo) => void,
    removeTodo: (index: number) => void,
  ) =>
  () => {
    const [todoText, setTodoText] = useState<string>('');
    const { selectedValue, isShown } = useContext(CalendarContext);

    return (
      <>
        <Component />
        <TodoList
          isShown={isShown}
          selectedDate={selectedValue}
          todos={todo}
          addTodo={addTodo}
          removeTodo={removeTodo}
          todoText={todoText}
          setTodoText={setTodoText}
        />
      </>
    );
  };

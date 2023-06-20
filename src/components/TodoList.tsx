import React, { Dispatch, FC } from "react";
import { TodoItem } from "./TodoItem";
import { TodoData } from "../App";

interface PropsTodoList {
  todo: TodoData[];
  setTodo: Dispatch<React.SetStateAction<TodoData[]>>;
}

export const TodoList: FC<PropsTodoList> = ({ todo, setTodo }) => {
  const deleteHandler = (id: string) => {
    const removeTodo = todo.filter((el) => el.id !== id);
    setTodo(removeTodo);
  };

  const checkedHandler = (id: string) => {
    const checkedTodo = todo.map((el) => {
      if (el.id === id) {
        el.completed = !el.completed;
      }
      return el;
    });

    setTodo(checkedTodo);
  };
  return (
    <div>
      {todo.map((item) => (
        <TodoItem
          key={item.id}
          todo={item}
          deleteHandler={deleteHandler}
          checkedHandler={checkedHandler}
          setTodo={setTodo}
        />
      ))}
    </div>
  );
};

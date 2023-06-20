import React, { Dispatch, FC, useState } from "react";
import { TodoData } from "../App";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

interface PropsDataTodo {
  todo: TodoData;
  deleteHandler: (id: string) => void;
  checkedHandler: (id: string) => void;
  setTodo: Dispatch<React.SetStateAction<TodoData[]>>;
}

export const TodoItem: FC<PropsDataTodo> = ({
  todo,
  deleteHandler,
  checkedHandler,
  setTodo,
}) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [editText, setEditText] = useState(todo.title);

  const editHandler = (id: string) => {
    setTodo((prevTodos) => {
      return prevTodos.map((prevTodo) => {
        if (prevTodo.id === id) {
          return { ...prevTodo, title: editText };
        }
        return prevTodo;
      });
    });

    setOpenEdit(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        width: "100%",
        gap: "50px",
      }}
    >
      {openEdit ? (
        <div
          style={{
            display: "flex",
            gap: "30px",
            border: "2px solid pink",
            borderRadius: "10px",
            width: "320px",
            boxShadow: "-8px -2px 22px 8px rgba(34, 60, 80, 0.2)",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <Button
            variant="outlined"
            type="submit"
            onClick={() => editHandler(todo.id)}
          >
            save
          </Button>

          <Button
            variant="outlined"
            type="submit"
            onClick={() => setOpenEdit(false)}
          >
            cancel
          </Button>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "30px",
            border: "2px solid aqua",
            borderRadius: "10px",
            width: "320px",
            boxShadow: "-8px -2px 22px 8px rgba(34, 60, 80, 0.2)",
          }}
        >
          <input type="checkbox" onChange={() => checkedHandler(todo.id)} />

          <h3 style={{ textDecoration: todo.completed ? "line-through" : "" }}>
            {todo.title}
          </h3>
          <Button
            variant="outlined"
            type="submit"
            onClick={() => deleteHandler(todo.id)}
          >
            delete
          </Button>
          <Button
            variant="outlined"
            type="submit"
            onClick={() => setOpenEdit(true)}
          >
            edit
          </Button>
        </div>
      )}
    </div>
  );
};

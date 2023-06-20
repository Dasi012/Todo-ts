import { ChangeEvent, FC, FormEvent, useState } from "react";
import { TodoData } from "../App";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

interface PropsForm {
  newTodoHandler: (data: TodoData) => void;
}

export const TodoForm: FC<PropsForm> = ({ newTodoHandler }) => {
  const [value, setValue] = useState("");

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      id: Date.now().toString(),
      title: value,
      completed: false,
    };
    newTodoHandler(data);
    setValue("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          type="text"
          value={value}
          onChange={changeHandler}
        />
        <Button variant="outlined" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};

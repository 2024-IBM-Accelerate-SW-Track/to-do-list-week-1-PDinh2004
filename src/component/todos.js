import React from "react";
import { useState } from "react";
import "../component/todos.css";
// eslint-disable-next-line
import { Card, CardContent, Grid, ListItemButton, ListItemText, Checkbox, FormControlLabel } from "@mui/material";
import Alert from '@mui/material/Alert';

// 1. This component formats and returns the list of todos.
// 2. Treat the question mark like an if statement.
// If the todos array has items in the list [todos.length], we want to return the list
// Else, return a message saying "You have no todo's left"
// 3. The map function is called to assign each array item with a key
// 4. Think of lines 14-23 as a loop. For each todo in the todo list, we want to give the list item
// a key, and it's own card shown in the UI

const Todos = ({ todos }) => {
  /* 
  Want to be able to increment and decrement state
  */

  const [dic, setDic] = useState({});
  const [numComplete, setNumComplete] = useState(0);

  const todoList = todos.length ? (
    todos.map((todo) => {
      if (!(todo.id in dic)) {
        setDic({ ...dic, [todo.id]: false });
      }
      return (
        <Grid key={todo.id}>
          <Card style={{ margin: "10px" }}>
            {/* Remember, we set the local state of this todo item when the user submits the form in 
              AddTodo.js. All we need to do is return the todo list item */}
            <CardContent>
              {/* Add checkbox */}
              <FormControlLabel control={
                <Checkbox
                  onChange={() => {
                    let nDic = dic;
                    nDic[todo.id] = !nDic[todo.id];
                    setDic(nDic);
                    // console.log(dic);
                    setNumComplete(Object.values(dic).filter(i => i === true).length);
                  }}
                />}
                label={todo.content}
              />
              {/* <span style={{ padding: "50px" }}>{todo.content}</span> */}
            </CardContent>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>{"You have no todo's left"}</p>
  );
  // Lastly, return the todoList constant that we created above to show all of the items on the screen.
  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      {todoList}

      {numComplete !== 0 ? (
        <Alert severity="success">
          Tasks Completed: {numComplete}
        </Alert>
      ) : null}
    </div>
  );
};

export default Todos;

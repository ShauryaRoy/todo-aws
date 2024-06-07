import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(()=>{
  fetch("http://localhost:3000/todos").then(async function (res) {
    const json = await res.json();
    setTodos(json.todos);
  });
},[refresh])
  return (
    <div>
      <CreateTodo refresh={refresh} setRefresh={setRefresh}></CreateTodo>
      <Todos todos={todos} refresh={refresh} setRefresh={setRefresh}></Todos>
    </div>
  );
}

export default App;

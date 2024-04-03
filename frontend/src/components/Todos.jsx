// todos = [
//     {
//     title: "go to gym",
//     description: "go to gym",
//     }

import { Update } from "./Update";

// ]
export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick={()=>{
              fetch("http://localhost:3000/completed", {
                method: "PUT",
                body: JSON.stringify({
                  id: todo._id,
                }),
                headers: {
                  "Content-type": "application/json",
                },
              }).then(async function (res) {
                const json = await res.json();
                alert("Todo marked as completed");
              });
            }} >
              {todo.completed == true ? "Completed" : "Mark as Complete"}
            </button>
            <button onClick={()=>{
              fetch("http://localhost:3000/delete", {
                method: "DELETE",
                body: JSON.stringify({
                  id: todo._id,
                }),
                headers: {
                  "Content-type": "application/json",
                },
              }).then(async function (res) {
                const json = await res.json();
                alert("Todo deleted");
              });
            }}>Delete</button>
            {/* <Update></Update> */}
            
          </div>
        );
      })}
    </div>
  );
}

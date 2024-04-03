const express = require("express");
// const {create} = require("domain");
const { createTodo, updateTodo } = require("./type");
const { todo } = require("./db");
const cors = require("cors");
const app = express();
const port = 3000;

// to parse the body if it is json body
app.use(express.json());
app.use(cors());

//Create Todo
app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  //put it in mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "Todo created",
  });
});

//Get Todo
app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

//Mark complete
app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  // check for id and the update true
  await todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});

// app.put("/update", async (req, res) => {
//   const updatePayload = req.body;
//   const parsePayload = updateTodo.safeParse(updatePayload);
//   if (!parsePayload) {
//     res.status(411).json({
//       msg: "You sent the wrong inputs",
//     });
//     return;
//   }
//   await todo.updateOne(
//     {
//       _id: req.body.id,
//     },
//     {
//       title: req.body.title,
//       description: req.body.description,
//     }
//   );
//   res.json({
//     msg: "Todo updated successfully",
//   });
// });

app.delete("/delete", async (req, res) => {
  const deletePayload = req.body;
  await todo.deleteOne({
    _id: deletePayload.id, 
  });
  res.json({ msg: "Todo deleted successfully" });
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

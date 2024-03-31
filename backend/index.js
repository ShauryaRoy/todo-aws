const express = require("express")
import { create } from "domain";
import {createTodo ,updateTodo} from "./type"
const app = express();
const port = 3000;

// to parse the body if it is json body
app.use(express.json());




//Create Todo
app.post("/todo",(req,res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse({createPayload});
    if(!parsePayload){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    //put it in mongodb
})

//Get Todo
app.get("/todo",(req,res)=>{
  
})

//Mark complete
app.put("/completed",(req,res)=>{
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse({updatePayload});
    if(!updatePayload){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
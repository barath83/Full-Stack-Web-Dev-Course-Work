const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Todo = require('./models/Todo');



mongoose
.connect('mongodb+srv://barath:barath@cluster0.zz590.mongodb.net/todos?retryWrites=true&w=majority')
.then(()=>{
    console.log("Connected to database");
}).catch(()=>{
    console.log('Connection failed.');
})

const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res) =>{
    Todo.find((err,todo) => {
        if(err){
            console.log(err);
        }else{
            res.json(todo);
        }
    });
});

app.post("/create",(req,res)=>{
    const todo = new Todo(req.body);
    todo.save()
        .then((todo)=>{
            res.json(todo);
        }).catch((err) =>{
            res.status(500).send(Err.message);
        });
});

app.get("/:id",(req,res) =>{
    const id = req.params.id;
    Todo.findById(id,(err,todo) =>{
        res.json(todo);
    });
});


app.post("/:id", (req, res) => {
    const id = req.params.id;
    Todo.findById(id, (err, todo) => {
      if (!todo) {
        res.status(404).send("Todo not found");
      } else {
        todo.text = req.body.text;
  
        todo
          .save()
          .then((todo) => {
            res.json(todo);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });


app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
  });
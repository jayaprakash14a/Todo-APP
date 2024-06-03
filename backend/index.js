const express = require("express");
const { createTodoZ, updateTodoZ } = require("./types");
const { todo } = require("./db");
const app= express();
const cors=require("cors");

app.use(express.json());
app.use(cors())

app.post('/todos',async (req,res)=>{
    const payload=req.body;
    console.log(payload)
    const parsedPayload = createTodoZ.safeParse(payload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return;
    }

    await todo.create({
        title: payload.title,
        description: payload.description,
        completed:false
    })

    res.json({
        msg:"Todo created"
    })
});

app.get('/todos',async (req,res)=>{
    
    const todos = await todo.find({});

    res.status(200).json({
        todos
    })

});


app.put('/completed',async (req,res)=>{
    const updatePayload=req.body;
    const parsedPayload = updateTodoZ.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    },{
        completed:true
    })

    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000,()=>{
    console.log("server started at 3000")
});




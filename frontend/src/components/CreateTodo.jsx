import { useState } from "react";

export function CreateTodo(){
    const [title,SetTitle] = useState("");
    const [description,SetDescription] = useState("");

    return <div>
        <input style={{
            padding:10, margin:10
        }} type="text" placeholder="title" onChange={(e)=>{
            SetTitle(e.target.value);
        }}></input><br/>
        <input style={{
            padding:10, margin:10
        }} type="text" placeholder="description" onChange={(e)=>{
            SetDescription(e.target.value);
        }}></input><br/>

        <button style={{
            padding:10, margin:10
        }} onClick={()=>{
            fetch("http://localhost:3000/todos",{
                method:"POST",
                body: JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "content-type":"application/json"     
                }
            }).then(async function(res){
                const json = await res.json();
                alert ("Todo added");
            })
        }}>Add a todo</button>
    </div>
}


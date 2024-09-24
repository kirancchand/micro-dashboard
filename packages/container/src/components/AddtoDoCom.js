import React,{useState} from 'react';

export default function AddTodo(props){
        // return(
        //     <label>Add Todo Object</label>
        // )

    const [desc,setDesc]=useState("");

    function addTodo() {
        props.addTodo(desc);
    }
    const handleChange=(ev)=>{
        setDesc(ev.target.value)
    }
    return (
        <div>
            <label>Add Todo Object</label>
            <input type='Text' placeholder="Enter Todo" name="desc" value={desc} onChange={(ev)=>handleChange(ev)}></input>
             <button onClick={()=>addTodo()}>Submit</button>
        </div>
    );
}
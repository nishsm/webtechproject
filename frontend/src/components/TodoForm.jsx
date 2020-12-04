import React from "react";

export default function TodoForm({handleAdd})
{
    const [description ,setDescription]=React.useState("");
    return (

        <form onSubmit = {e => e.preventDefault()}>
            <label htmlFor="description"> description</label>

            <input placeholder="Add Todo" type="text" id="description" value={description} onChange={e=>setDescription(e.target.value)} />
            <button onClick={()=> handleAdd(description)}>Add</button>
        </form>
     
    );
}

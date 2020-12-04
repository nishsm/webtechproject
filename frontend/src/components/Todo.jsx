import React from "react";
import DeleteButton from "./DeleteButton";

 

export default function Todo({ todo,handleDelete })
{
    return  (
        <li>{todo.description} 
        <DeleteButton _handleDelete={handleDelete} />
        </li>
    )

    

}


   
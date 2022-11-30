import React from "react";


export default function Sign(){
    return(
        <>
        <input type="text" name="name" id="name" />
         <input type="email" name="email" id="email" />
         <input type="password" name="password" id="password" />
         <button>criar conta</button>
        </>
    )
}
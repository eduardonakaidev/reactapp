import React, { useState } from "react";
import SuplementoImg from '../assets/sei-la.jpg'
import '../styles/item.css' 

export default function ItemCard(){
    const [comprar,setComprar] = useState('');
    return(
        <>
        <div className="Box-item">
         <img className="imagem-item" src={SuplementoImg} alt="suplemnto" />
         <h1 className="nome-do-produto">Whey Integrammedica Chocolate</h1>
         <button onClick={comprar} className="botao-comprar">Comprar</button>
         </div>
        </>
    )
}
import React from "react";
import '../../styles/StylesCadastro.css'
import Logo from '../../assets/E.png'

export default function Sign(){
    return(
        <div className="Tela">
      
        <div className="Caixa">
        <img className="Logom" src={Logo} alt="Logo" />
        <input className="Input" placeholder="Nome..." type="text" name="name" id="name" />
         <input className="Input" placeholder="Email..." type="email" name="email" id="email" />
         <input className="Input" placeholder="Senha..."type="password" name="password" id="password" />
         <button className="Botao">criar conta</button>
         </div>
        
        </div>
    )
}
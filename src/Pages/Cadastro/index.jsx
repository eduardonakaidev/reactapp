import React from "react";
import '../../styles/StylesCadastro.css'
import Logo from '../../assets/E.png'
import Header from "../../Components/header";
import Navegacao from "../../Components/navegation";
import Footer from "../../Components/footer";


export default function Sign() {
    return (

        <div className="Tela">
            <Header />

            <div className="Caixa">
                <img className="Logom" src={Logo} alt="Logo" />
                <input className="Inputnome" placeholder="Nome" type="text" name="name" id="name" />
                <input type="text" className="Inputsobre" name="sobrename" id="sobrename" placeholder="sobrenome" />
                <input className="Input" placeholder="Email" type="email" name="email" id="email" />
                <input className="Input" placeholder="Senha" type="password" name="password" id="password" />
                <input className="Input" placeholder=" Confirme a Senha" type="password" name="password" id="password" />
                <button className="Botao">criar conta</button>
                
            </div>

            <Footer />
        </div>
    )
}
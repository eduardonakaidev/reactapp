import React from 'react'
import { Link } from 'react-router-dom'
import carshop from '../styles/StyleHeader.css'
import { BiCart } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import Logo from '../assets/E.png'
import {FaBoxes} from 'react-icons/fa'


export default function Header() {
    return (

        <header className='upbarra'>
            

                <div className='logoEJ'>
                    <Link to={"/"}><img className='LogoImg' src={Logo} alt="Logo" /></Link>
                </div>
                <div className='posiname' >
                    <h1 className='namelogo'> <strong>JE Suplements</strong></h1>
                    
                </div>

                <input    type="search" name="pesquisa" className='pesquisa' placeholder='Pesquisar' />
                
                <div className='posicart'>
                    <Link to={'/cart'}><BiCart className='Bicart' /></Link>
                    
                </div>


                <div className='usuariologin'></div>
                <div><Link to={"/user"}><FiUser className='icouser' /></Link>
                <br />
               
                    <Link className='abacadastro' to={'/Cadastro'}>Cadastro   |      </Link>
                    <Link className='abalogin' to={'/Login'}>  Login</Link>
                </div>
                
            
        </header >





        


    )
}
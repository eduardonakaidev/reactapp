import React from 'react'
import { Link } from 'react-router-dom'
import carshop from '../styles/StyleHeader.css'
import {BiCart} from 'react-icons/bi'
import {FiUser} from 'react-icons/fi'
import Logo from '../assets/E.png'


export default function Header() {
    return (
        <div>
            <header className='upbarra'>
               <Link className='Logo' to={"/"}><img className='LogoImg' src={Logo} alt="Logo" /></Link> 
                <h1 className='namelogo'> <strong>JE Suplements</strong> </h1>
                <input type="search" name="pesquisa" className='pesquisa' placeholder='Pesquisar'/>
                
                <Link  to={'/cart'}><BiCart className='Bicart' /></Link>
                
                <div className='usuariologin'></div>
                <div><Link to={"/user"}><FiUser className='icouser'/></Link><br />
                <Link className='abacadastro' to={'/Cadastro'}>Cadastro   |      </Link>
                <Link className='abalogin' to={'/Login'}>  Login</Link>
                </div>
                
            
            
            </header>
            

            
            

        </div>


    )}
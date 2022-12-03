import {} from 'react'
import '../styles/StyleNavigation.css'
import { Link } from 'react-router-dom'



export default function Navegacao(){
    return(
        <div>
            <nav className='navegation'>
                <div className='barranavegacao'>
                <Link className='buttonH' to={'/'}>Home</Link>
                <Link className='buttonS' to={'/whey'}>Whey</Link>
                <Link className='buttonC' to={'/Creatina'}>Creatina</Link>
                <Link className='buttonHip' to={'/Hipercaloricos'}>Hipercaloricos</Link>
                <Link className='buttonT' to={'/Termogenicos'}>Termogenicos</Link>
                </div>
                
                
                
                

            </nav>
          
        </div>
    )
}
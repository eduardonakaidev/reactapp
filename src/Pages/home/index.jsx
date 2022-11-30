import React from "react";
import Header from "../../Components/header";
import Navegacao from "../../Components/navegation";
import Footer from "../../Components/footer";
import ItemCard from "../../Components/ItemCard";
import '../../styles/global.css'

export default function Home(){
    return(
        <div className="Tela">
            
            <Header/>
            <Navegacao/>
            
            <main className="Main">
                
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
              
            </main>
           <Footer/> 
        </div>
        
    )
}
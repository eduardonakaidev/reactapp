import React, { useEffect, useState } from "react";
import Header from "../../Components/header";
import Navegacao from "../../Components/navegation";
import Footer from "../../Components/footer";
import '../../styles/global.css'
import ItemCard from "../../Components/ItemCard";



export default function Vitrini(){
  
    return(
        <>
          <Header/>
          <Navegacao/>
          
          <main className="Main">
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          
            
          </main>
          <Footer/>
        </>
    )
}
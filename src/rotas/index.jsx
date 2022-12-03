import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../Pages/home";
import Suplementos from "../Pages/vitrine";
import CartPage from "../Pages/CartPage/Index";
import UserScreen from '../Pages/Login'
import Cadastro from '../Pages/Cadastro'


export default function RoutesApp() {
    return (





        <BrowserRouter>
            <Routes>
                <Route element={< Home />} path="/" exact />
                <Route element={< Suplementos />} path="/whey" />
                <Route element={<CartPage/>} path="/Cart"/>
                <Route element={<UserScreen/>} path="/Usuario"/>
                <Route element={<Cadastro/>} path="/Cadastro"/>
                
            </Routes>
        </BrowserRouter>


    )
}


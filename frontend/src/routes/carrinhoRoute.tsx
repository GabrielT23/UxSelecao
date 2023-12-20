import { Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import { CarrinhoPizza } from "../pages";
import { CarrinhoBebida } from "../pages/carrinho/CarrinhoBebida";
import { CarrinhoPetisco } from "../pages/carrinho/CarrinhoPetisco";
import { CarrinhoSobremesa } from "../pages/carrinho/CarrinhoSobremesa";
import { Cadastro } from "../pages/formularios/Cadastro";
import { Endereco } from "../pages/formularios/Endereco";
import { Login } from "../pages/formularios/Login";

export const AppRoutesCarrinho = () => {
    return(
        <Routes>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/endereco" element={<Endereco/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/sobremesa" element={<CarrinhoSobremesa/>}/>
            <Route path="/petisco" element={<CarrinhoPetisco/>}/>
            <Route path="/bebida" element={<CarrinhoBebida/>}/>
            <Route path="/pizza" element={<CarrinhoPizza/>}/>
            <Route path="*" element={<Navigate to="/app/home"/>}/>
        </Routes>
    );
}
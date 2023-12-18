import { Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import { Carrinho } from "../pages";
export const AppRoutesCarrinho = () => {
    return(
        <Routes>
            <Route path="/" element={<Carrinho/>}/>
            <Route path="*" element={<Navigate to="/app/home"/>}/>
        </Routes>
    );
}
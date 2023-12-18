import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { Contatos, Home, Sobre } from "../pages";
export const AppRoutes = () => {
    const {setIsDrawerOptions} = useDrawerContext();

    useEffect(()=>{
        setIsDrawerOptions([
            {
                label: 'Home',
                path: '/home',
            },
            {
                label: 'Contatos',
                path: '/app/contatos',
            },
            {
                label: 'Sobre',
                path: '/app/sobre',
            }
        ])
    });
    return(
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/contatos" element={<Contatos/>}/>
        </Routes>
    );
}
import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { Contatos, Home, Sobre } from "../pages";
export const AppRoutes = () => {
    const { setIsDrawerOptions } = useDrawerContext();
  
    useEffect(() => {
      const options = [
        {
          label: 'Home',
          path: '/app/home',
        },
        {
          label: 'Contatos',
          path: '/app/contatos',
        },
        {
          label: 'Sobre',
          path: '/app/sobre',
        },
      ];
      setIsDrawerOptions(options);
    }, [setIsDrawerOptions]);
  
    return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>
    );
  };
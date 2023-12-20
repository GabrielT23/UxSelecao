import { AppBar, Box, Button, Icon, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { CardCarrinho, CardProduto, Footer, Header, HorizontalMenu } from "../components";

interface ILayoutFormularioprops {
    children?: React.ReactNode;
}

export const LayoutFormulario: React.FC<ILayoutFormularioprops> = ({children}) =>{
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    return(
         <Box width="100%"
         minHeight="100vh"
    
         style={{
             backgroundColor: '#F0F0F0'
         }}>
            <Header />
                <Box width="100%" display="flex" alignItems="center" justifyContent="center" height="100vh">
                    <Box marginBottom={theme.spacing(30)} height="max-content">
                        {children}
                    </Box>
                </Box>
            <Footer/>
         </Box>
    );
}
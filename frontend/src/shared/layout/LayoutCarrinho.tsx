import { AppBar, Box, Button, Icon, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { CardCarrinho, CardProduto, Footer, Header, HorizontalMenu } from "../components";

interface ILayoutCarrinhoprops {
    children?: React.ReactNode;
}

export const LayoutCarrinho: React.FC<ILayoutCarrinhoprops> = ({children}) =>{
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    return(
         <Box width="100%"
         minHeight="100vh"
    
         style={{
             backgroundColor: '#F0F0F0'
         }}>
            <Header />
                <Box display="flex" flexDirection="column">
                    <Box display="flex" alignItems="center" justifyContent="center" marginTop={theme.spacing(1)}>
                        <HorizontalMenu/>
                    </Box>
                    <Box marginTop={theme.spacing(3)} display="flex">
                        <Box width={theme.spacing(300)} display="flex" flexWrap="wrap" height="100%">
                          {children}

                        </Box>
                        <Box width="100%" >
                            <CardCarrinho/>
                        </Box>
                    </Box>
                </Box>
            <Footer/>
         </Box>
    );
}
import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

interface ILayoutInformacoesprops {
    titulo: string;
    children?: React.ReactNode;
}

export const LayoutInformacoes: React.FC<ILayoutInformacoesprops> = ({children, titulo}) =>{
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    return(
        <Box margin="0" height="100%" display="flex" flexDirection="column" gap={1}>
            {smDown && (<Box width={theme.spacing(5)} style={{
                    backgroundColor: 'rgba(96, 79, 79, 0.3)',
                    color: '#ffffff'
                }}>
                <IconButton>
                    <Icon>menu</Icon>
                </IconButton>
            </Box>)}
            <Box display='flex' alignContent='center' justifyContent='center' padding={1} width={theme.spacing(17)} height={theme.spacing(7)} marginLeft={theme.spacing(10)} marginTop={theme.spacing(10)}
                style={{
                    backgroundColor: 'rgba(96, 79, 79, 0.3)',
                    color: '#ffffff'
                }}>
                <Typography variant="h4">
                    {titulo}
                </Typography>
            </Box>

            <Box display='flex' alignContent='center' justifyContent='flex-start' padding={1} width={theme.spacing(50)} height="100%" marginLeft={theme.spacing(1)} marginTop={theme.spacing(1)}
                style={{
                    backgroundColor: 'rgba(96, 79, 79, 0.3)',
                    color: '#ffffff'
                }}>
                <Typography>
                    {children}
                </Typography>
            </Box>
        </Box>
    );
}
import { Box, Button, Typography, useTheme } from "@mui/material"


export const CardProduto = () => { 
    const theme = useTheme();
    return(
    <Box marginTop={theme.spacing(1)} marginLeft={theme.spacing(6)} width="40%" height="20vh" style={{
        backgroundColor: '#ffffff'
        }}
    >
        <Box display="flex" marginLeft={theme.spacing(3)} justifyContent="space-between">
            <Box marginTop={theme.spacing(1)}>
                <Typography color="black" style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Frango Catupiry
                </Typography>
            </Box>
            <Box marginRight={theme.spacing(2)} marginTop={theme.spacing(1)}>
                <Button variant="contained" color="secondary" 
                style={{ fontSize: "15px", padding: "5px 10px", height: "30px", width: "85px" }}>
                    Adicionar
                </Button>
            </Box>
        </Box>
        <Box display="flex" marginTop={theme.spacing(7)} marginLeft={theme.spacing(3)} justifyContent="space-between">
            <Box>
                <Typography color="black" style={{ fontSize: "15px"}}>
                frango, catupiry, mussarela
                </Typography>
            </Box>
            <Box marginRight={theme.spacing(1)}>
                <Typography color="black" style={{ fontSize: "18px", fontWeight: "bold" }}>
                    R$ 23,00
                </Typography>
            </Box>
        </Box>
    </Box>)}
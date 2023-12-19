import { Box, Button, Typography, useTheme } from "@mui/material"

interface IProdutoprops {
    nome: string;
    valor: string;
}

const Produto: React.FC<IProdutoprops> = ({nome, valor}) => {
    const theme = useTheme();
    return(
        <Box display="flex" marginLeft={theme.spacing(3)} justifyContent="space-between">
            <Box marginTop={theme.spacing(1)}>
                <Typography color="black" style={{ fontSize: "15px", fontWeight: "bold" }}>
                     {nome}
                </Typography>
                </Box>
            <Box marginRight={theme.spacing(1)} marginTop={theme.spacing(1)}>
                <Typography color="black" style={{ fontSize: "15px", fontWeight: "bold" }}>
                    R$ {valor}
                </Typography>
            </Box>
        </Box>
    )
}

export const CardCarrinho = () => { 
    const theme = useTheme();
    return(
    <Box marginTop={theme.spacing(1)} marginLeft={theme.spacing(6)} width="75%" style={{
        backgroundColor: '#ffffff'
        }}
    >
        <Box display="flex" marginLeft={theme.spacing(3)} justifyContent="space-between" marginBottom={theme.spacing(6)}>
            <Box marginTop={theme.spacing(1)}>
                <Typography color="black" style={{ fontSize: "24px", fontWeight: "bold" }}>
                    Total 
                </Typography>
                </Box>
            <Box marginRight={theme.spacing(1)} marginTop={theme.spacing(1)}>
                <Typography color="black" style={{ fontSize: "24px", fontWeight: "bold" }}>
                    R$ 39,00
                </Typography>
            </Box>
        </Box>
        <Box>
            <Produto nome="Frango Catupiry" valor="23,00"/>
            <Produto nome="Coca cola 2L" valor="10,00"/>
            <Produto nome="Mouse de Cholate" valor="6,00"/>
        </Box>
        <Box marginTop={theme.spacing(10)} marginBottom={theme.spacing(24)}  width="100%" display="flex" justifyContent="center">
            <Box marginRight={theme.spacing(2)} marginTop={theme.spacing(1)}>
                <Button variant="contained" color="secondary" 
                style={{ fontSize: "15px", padding: "5px 10px", height: "30px", width: "85px" }}>
                    Finalizar
                </Button>
            </Box>
        </Box>
    </Box>
    )}
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleCardapioClick = () => {
    // Navegar para a rota '/carrinho' quando o botão for clicado
    navigate("/carrinho/pizza");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="100%"
      alignItems="center"
      marginTop={25}
      justifyContent="center"
      style={{}}
    >
      <Typography color="#ffffff" variant="h4">
        Faça seu Pedido
      </Typography>
      <Button
        variant="contained"
        color="primary"
        style={{
          fontSize: '2rem',
        }}
        onClick={handleCardapioClick}
      >
        Cardápio
      </Button>
    </Box>
  );
};

import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


export const HorizontalMenu = () => {
  const navigate = useNavigate();

  const handlePizzaClick = () => {
    // Navegar para a rota '/carrinho' quando o botão for clicado
    navigate("/carrinho/pizza");
  };
  const handleBebidaClick = () => {
    // Navegar para a rota '/carrinho' quando o botão for clicado
    navigate("/carrinho/bebida");
  };
  const handlePetiscoClick = () => {
    // Navegar para a rota '/carrinho' quando o botão for clicado
    navigate("/carrinho/petisco");
  };
  const handleSobremesaClick = () => {
    // Navegar para a rota '/carrinho' quando o botão for clicado
    navigate("/carrinho/sobremesa");
  };
    return (
      <Box display="flex">
        <Box bgcolor="#ffffff" p={1} borderRadius={8}>
          <Button onClick={handlePizzaClick}>
            <Typography color="black" style={{ fontSize: "20px", fontWeight: "bold" }}>Pizzas</Typography>
          </Button>
        </Box>
  
        <Box bgcolor="#ffffff" p={1} borderRadius={8} marginLeft={4}>
          <Button onClick={handlePetiscoClick}>
            <Typography color="black" style={{ fontSize: "20px", fontWeight: "bold" }}>Petiscos</Typography>
          </Button>
        </Box>
  
        <Box bgcolor="#ffffff" p={1} borderRadius={8} marginLeft={4}>
          <Button onClick={handleBebidaClick}>
            <Typography color="black" style={{ fontSize: "20px", fontWeight: "bold" }}>Bebidas</Typography>
          </Button>
        </Box>
  
        <Box bgcolor="#ffffff" p={1} borderRadius={8} marginLeft={4}>
          <Button onClick={handleSobremesaClick}>
            <Typography color="black" style={{ fontSize: "20px", fontWeight: "bold" }}>Sobremesa</Typography>
          </Button>
        </Box>
      </Box>
    );
  };

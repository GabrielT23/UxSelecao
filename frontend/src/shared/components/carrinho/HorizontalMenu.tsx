import { Box, Button, Typography } from "@mui/material";


export const HorizontalMenu = () => {
    return (
      <Box display="flex">
        <Box bgcolor="#ffffff" p={1} borderRadius={8}>
          <Button>
            <Typography color="black" style={{ fontSize: "20px", fontWeight: "bold" }}>Pizzas</Typography>
          </Button>
        </Box>
  
        <Box bgcolor="#ffffff" p={1} borderRadius={8} marginLeft={4}>
          <Button>
            <Typography color="black" style={{ fontSize: "20px", fontWeight: "bold" }}>Petiscos</Typography>
          </Button>
        </Box>
  
        <Box bgcolor="#ffffff" p={1} borderRadius={8} marginLeft={4}>
          <Button>
            <Typography color="black" style={{ fontSize: "20px", fontWeight: "bold" }}>Bebidas</Typography>
          </Button>
        </Box>
  
        <Box bgcolor="#ffffff" p={1} borderRadius={8} marginLeft={4}>
          <Button>
            <Typography color="black" style={{ fontSize: "20px", fontWeight: "bold" }}>Sobremesa</Typography>
          </Button>
        </Box>
      </Box>
    );
  };

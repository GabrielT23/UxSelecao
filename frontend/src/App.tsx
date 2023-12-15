import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ThemeProvider } from "@emotion/react";
import { PrincipalTheme } from "./shared/themes";
import { Box } from "@mui/material";
import { MenuLateral } from "./shared/components";

export const App = ()=> {
  return (
    <Box  width="100vw"
    height="100vh"
    style={{
        backgroundImage: `url(${require("./img/imagemPizza.jpg")})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}>
      <ThemeProvider theme={PrincipalTheme}>
        <BrowserRouter>
        <MenuLateral>
           <AppRoutes/>
        </MenuLateral>
        </BrowserRouter>
      </ThemeProvider>
    </Box>
  );
}


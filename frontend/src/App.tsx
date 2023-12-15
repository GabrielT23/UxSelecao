import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ThemeProvider } from "@emotion/react";
import { PrincipalTheme } from "./shared/themes";
import { Box } from "@mui/material";
import { MenuLateral } from "./shared/components";
import { DrawerProvider } from "./shared/contexts";

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
        <DrawerProvider>
          <BrowserRouter>
          <MenuLateral>
            <AppRoutes/>
          </MenuLateral>
          </BrowserRouter>
        </DrawerProvider>
      </ThemeProvider>
    </Box>
  );
}


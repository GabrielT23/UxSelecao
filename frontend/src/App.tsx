import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ThemeProvider } from "@emotion/react";
import { PrincipalTheme } from "./shared/themes";
import { Box } from "@mui/material";
import { MenuLateral } from "./shared/components";
import { DrawerProvider } from "./shared/contexts";
import { AppRoutesCarrinho } from "./routes/carrinhoRoute";

export const App = ()=> {
  return (
    <Box
      width="100%"
      height="100vh"
      style={{
        backgroundImage: `url(${require("./img/imagemPizza.jpg")})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <ThemeProvider theme={PrincipalTheme}>
        <DrawerProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/app/*"
                element={<MenuLateral><AppRoutes /></MenuLateral>}
              />
              <Route
                path="/carrinho/*"
                element={<AppRoutesCarrinho />}
              />
              <Route
                path="*"
                element={<Navigate to="/app/home" />}
              />
            </Routes>
          </BrowserRouter>
        </DrawerProvider>
      </ThemeProvider>
    </Box>
  );
}


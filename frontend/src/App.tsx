import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ThemeProvider } from "@emotion/react";
import { PrincipalTheme } from "./shared/themes";

export const App = ()=> {
  return (
    <ThemeProvider theme={PrincipalTheme}>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </ThemeProvider>
  );
}


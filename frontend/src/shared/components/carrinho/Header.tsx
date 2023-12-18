import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";


export const Header = () => {
    return (
      <AppBar position="static" style={{ backgroundColor: "#604F4F" }}>
        <Toolbar>
          <Typography variant="h6"
          component={RouterLink}
          to="/app/home"
          sx={{ flexGrow: 1, color: "#FFE500", textDecoration: "none" }}>
            Pizzaria UX
          </Typography>
          <Button variant="contained" color="error">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    );
  };
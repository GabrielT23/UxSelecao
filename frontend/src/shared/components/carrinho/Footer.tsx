import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer = () => {
    return (
      <Box
        component="footer"
        sx={{
          backgroundColor: "#604F4F",
          color: "white",
          py: 2,
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        <Container>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography>Política de Privacidade</Typography>
            </Grid>
            <Grid item>
              <Typography>Termos de Uso</Typography>
            </Grid>
            <Grid item>
              <Typography>Política de Reembolso</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  };
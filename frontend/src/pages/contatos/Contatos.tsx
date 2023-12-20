import { Box, Typography } from "@mui/material";
import { LayoutInformacoes } from "../../shared/layout";

export const Contatos = () => {
  return (
    <LayoutInformacoes titulo="Contatos">
      <Box>
        <Typography color="#FFE500" variant="h5">
          Endereço
        </Typography>

        <Typography color="#ffffff">
          Rua Manoel Marinho de Andrade, <br />Sobral, 214
        </Typography>
      </Box>
      <Box marginTop={1}>
        <Typography color="#FFE500" variant="h5">
          Entre em contato por:
        </Typography>
        <Box marginTop={1} display="flex">
          <Typography color="#FFE500">
            Telefone:
          </Typography>
          <Typography marginLeft={1} color="#ffffff">
            88982231204
          </Typography>
        </Box>
        <Box marginTop={1} display="flex">
          <Typography color="#FFE500">
            E-mail:
          </Typography>
          <Typography marginLeft={1} color="#ffffff">
            gabaraujoteixeira@gmail.com
          </Typography>
        </Box>
      </Box>
    </LayoutInformacoes>
  );
}


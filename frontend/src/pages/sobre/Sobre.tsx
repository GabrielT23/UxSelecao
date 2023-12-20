import { Box, Typography } from "@mui/material";
import { LayoutInformacoes } from "../../shared/layout";

export const Sobre = ()=>{

    return(
        <LayoutInformacoes titulo="Sobre">
                <Typography>
                    Este é um projeto de site para delivery de pizza. vale ressaltar que a intenção inicial do projeto não possuir aplicação prática, mas apenas aprimorar e colocar em práticas habilidades de desenvolvimento Web.
                </Typography>
                <Typography marginTop={8}>
                    Desenvolvido por: <br/>
                    Gabriel Araújo Teixeira
                </Typography>
        </LayoutInformacoes>
    );
}
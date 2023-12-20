import { Box, Typography } from "@mui/material";
import { LayoutCarrinho, LayoutFormulario } from "../../shared/layout";
import { CardProduto, CadastroForm } from "../../shared/components";

export const Cadastro = ()=>{

    return(
        <LayoutFormulario>
            <CadastroForm/>
        </LayoutFormulario>
    );
}
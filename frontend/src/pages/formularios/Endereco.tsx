import { Box, Typography } from "@mui/material";
import { LayoutCarrinho, LayoutFormulario } from "../../shared/layout";
import { CardProduto, CadastroForm, EnderecoForm } from "../../shared/components";

export const Endereco = ()=>{

    return(
        <LayoutFormulario>
            <EnderecoForm/>
        </LayoutFormulario>
    );
}
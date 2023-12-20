import { Box, Typography } from "@mui/material";
import { LayoutCarrinho, LayoutFormulario } from "../../shared/layout";
import { CardProduto, CadastroForm } from "../../shared/components";
import { LoginForm } from "../../shared/components/formularios/LoginForm";

export const Login = ()=>{
    return(
        <LayoutFormulario>
            <LoginForm/>
        </LayoutFormulario>
    );
}
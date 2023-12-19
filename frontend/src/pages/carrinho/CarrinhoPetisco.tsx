import { Box, Typography } from "@mui/material";
import { LayoutCarrinho } from "../../shared/layout";
import { CardProduto } from "../../shared/components";

export const CarrinhoPetisco = ()=>{

    return(
        <LayoutCarrinho>
            <CardProduto nome="Batata frita" valor="10,00"/>
            <CardProduto nome="macaxeira frita" valor="10,00"/>
            <CardProduto nome="filé trinchado" valor="30,00"/>
            <CardProduto nome="Camarão alho e óleo" valor="35,00"/>
        </LayoutCarrinho>
    );
}
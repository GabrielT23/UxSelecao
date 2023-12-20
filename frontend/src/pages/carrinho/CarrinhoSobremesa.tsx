import { LayoutCarrinho } from "../../shared/layout";
import { CardProduto } from "../../shared/components";

export const CarrinhoSobremesa = ()=>{

    return(
        <LayoutCarrinho>
            <CardProduto nome="Mouse de Limão" valor="5,00"/>
            <CardProduto nome="Mouse de Chocolate" valor="6,00"/>
        </LayoutCarrinho>
    );
}
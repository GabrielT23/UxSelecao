import { LayoutCarrinho } from "../../shared/layout";
import { CardProduto } from "../../shared/components";

export const CarrinhoBebida = ()=>{

    return(
        <LayoutCarrinho>
            <CardProduto nome="Coca cola 1,5L" valor="10,00"/>
            <CardProduto nome="Delrio Guaraná 2L" valor="7,00"/>
            <CardProduto nome="Brama Lata" valor="3,00"/>
            <CardProduto nome="Agua de Coco 600 ml" valor="6,00"/>
            <CardProduto nome="RedBull 300 ml" valor="10,00"/>
        </LayoutCarrinho>
    );
}
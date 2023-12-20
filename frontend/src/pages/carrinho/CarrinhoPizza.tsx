import { LayoutCarrinho } from "../../shared/layout";
import { CardProduto } from "../../shared/components";

export const CarrinhoPizza = ()=>{

    return(
        <LayoutCarrinho>
            <CardProduto nome="Frango Catupiry" descricao="frango, catupiry, tomate e mussarela" valor="23,00"/>
            <CardProduto nome="Calabresa" descricao="calabresa, mussarela, tomate e cebola" valor="22,00"/>
            <CardProduto nome="Carne de Sol" descricao="carne de sol, mussarela, cebola e bacon" valor="25,00"/>
            <CardProduto nome="Mista" descricao="queijo, presunto e tomate" valor="20,00"/>
            <CardProduto nome="Portuguesa" descricao="Ovo, presunto, mussarela e bacon" valor="24,00"/>
            <CardProduto nome="2 queijos" descricao="Mussarela, queijo qualho e tomate" valor="18,00"/>
        </LayoutCarrinho>
    );
}
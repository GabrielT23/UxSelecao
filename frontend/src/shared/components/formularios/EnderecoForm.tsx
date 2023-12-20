import React, { useState } from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Form } from "@unform/web";
import { VTextField } from "./VTextField";
import { EnderecoService } from "../../services/api/users/EnderecoService";
import { useNavigate } from "react-router-dom";

export const EnderecoForm = () => {
  const navigate = useNavigate();

  interface IFormData {
    cep: string;
    estado: string;
    cidade: string;
    bairro: string;
    numero: number;
    complemento: string;
    endereco: string;
    userId: string;
  }

  const [enderecoData, setEnderecoData] = useState({
    bairro: "",
    complemento: "",
    cidade: "",
    estado: "",
    endereco: "",
  });

  const checkCep = async (event: React.FocusEvent<HTMLInputElement>) => {
    const cep = event.target.value.replace(/\D/g, '');

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      // Atualiza o estado com os valores da API
      setEnderecoData({
        bairro: data.bairro,
        complemento: data.complemento,
        cidade: data.localidade,
        estado: data.uf,
        endereco: data.logradouro,
      });
    } catch (error) {
      console.error("Erro ao obter dados do CEP:", error);
    }
  };

  const handleSave = (dados: IFormData) => {
    const userId = JSON.parse(localStorage.getItem('IdUser') as string);
    dados.numero = +dados.numero;
    dados = { ...dados, userId, ...enderecoData };  // Adiciona os dados do endereço
    EnderecoService.create(dados)
      .then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          localStorage.removeItem('IdUser');
          navigate("/carrinho/login");
        }
      });
  }

  return (
    <Form placeholder="Cadastro" onSubmit={handleSave}>
      <Box padding={4} marginTop={10} width={400} display="flex" flexDirection="column" component={Paper} variant="outlined" style={{ backgroundColor: "#ffffff" }} borderRadius={8}>
        <Typography color="#8B8766" fontSize={24}>
          Cadastre-se
        </Typography>
        <Typography color="#8B8766" fontSize={15} marginTop={2} marginBottom={1}>
          Preencha os campos abaixo com seus dados
        </Typography>
        <Grid container direction="column" spacing={1} height="100%">
          <Grid item>
            <VTextField onBlur={checkCep} size="small" fullWidth placeholder="cep" name="cep" />
          </Grid>
          <Grid item>
            <VTextField size="small" fullWidth placeholder="estado" name="estado" value={enderecoData.estado} />
          </Grid>
          <Grid item>
            <VTextField size="small" fullWidth placeholder="cidade" name="cidade" value={enderecoData.cidade} />
          </Grid>
          <Grid item>
            <VTextField size="small" fullWidth placeholder="bairro" name="bairro" value={enderecoData.bairro} />
          </Grid>
          <Grid item>
            <VTextField size="small" fullWidth placeholder="numero" name="numero" />
          </Grid>
          <Grid item>
            <VTextField size="small" fullWidth placeholder="complemento" name="complemento" value={enderecoData.complemento} />
          </Grid>
          <Grid item>
            <VTextField size="small" fullWidth placeholder="endereco" name="endereco" value={enderecoData.endereco} />
          </Grid>
          <Grid item justifyContent="center" alignItems="center" display="flex">
            <Button type="submit" variant="contained" color="error">Enviar</Button>
          </Grid>
        </Grid>
      </Box>
    </Form>
  );
};

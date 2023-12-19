import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Form } from "@unform/web";
import { VTextField } from "./VTextField";

export const CadastroForm = () => {
  interface IhadleSaveprops{
    email: string;
    senha: string;
  }
  const handleSave = (dados: IhadleSaveprops)=>{
    console.log(dados)
  }
  return (
    <Form placeholder="Cadastro" onSubmit={handleSave}>
      <VTextField placeholder="Email" name="Email"/>
      <VTextField placeholder="Senha" name="Senha"/>
      <VTextField placeholder="Cpf" name="Cpf"/>
      <VTextField placeholder="Telefone" name="Telefone"/>
      <Button type="submit" variant="contained" color="error">Submit</Button>
    </Form>
  
  );
};
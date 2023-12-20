import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Form } from "@unform/web";
import { VTextField } from "./VTextField";
import { UsersService } from "../../services/api";
import { useNavigate } from "react-router-dom";

export const CadastroForm = () => {
  const navigate = useNavigate();
  interface IFormData{
    name: string;
    email: string;
    password: string;
    cpf: string;
    telefone: string;
  }
  const handleSave = (dados: IFormData)=>{
    UsersService.create(dados)
    .then((result) => {
      if(result instanceof Error){
        alert(result.message);
      }else{
        localStorage.setItem('IdUser', JSON.stringify(result))
        navigate("/carrinho/endereco");
      }
    });
  }
  return (
    <Form placeholder="Cadastro" onSubmit={handleSave}>
      <Box padding={4} marginTop={10}  width={400} display="flex" flexDirection="column" component={Paper} variant="outlined" style={{backgroundColor: "#ffffff"}} borderRadius={8}>
        <Typography color="#8B8766" fontSize={24}>
          Cadastre-se
        </Typography>
        <Typography color="#8B8766" fontSize={15} marginTop={2} marginBottom={1}>
          Prencha os campos abaixo com seus dados
        </Typography>
        <Grid container direction="column" spacing={1} height="100%">
          <Grid item>
            <VTextField size="small" fullWidth placeholder="Nome" name="name"/>
          </Grid>
          <Grid item>
            <VTextField type="email" size="small" fullWidth placeholder="Email" name="email"/>
          </Grid>
          <Grid item>
            <VTextField size="small" fullWidth placeholder="password" name="password"/>
          </Grid>
          <Grid item>
            <VTextField mask="cpf" size="small" fullWidth placeholder="Cpf" name="cpf"/>
          </Grid>
          <Grid item>
            <VTextField mask="telefone" size="small" fullWidth placeholder="Telefone" name="telefone"/>
          </Grid>
          <Grid item justifyContent="center" alignItems="center" display="flex">
            <Button type="submit" variant="contained" color="error">Enviar</Button>
          </Grid>
        </Grid>
      </Box>
    </Form>
  
  );
};
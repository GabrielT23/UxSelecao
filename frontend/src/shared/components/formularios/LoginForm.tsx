import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Form } from "@unform/web";
import { VTextField } from "./VTextField";
import { useNavigate } from "react-router-dom";
import { AuthenticateService } from "../../services/api/users/AuthenticateService";
import { Link as RouterLink } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();
  interface IFormData{
    email: string;
    password: string;
  }
  const handleSave = (dados: IFormData)=>{
    AuthenticateService.authenticate(dados)
    .then((result) => {
      if(result instanceof Error){
        alert(result.message);
      }else{
        localStorage.setItem('token', JSON.stringify(result))
        navigate("/carrinho/pizza");
      }
    });
  }
  return (
    <Form placeholder="Cadastro" onSubmit={handleSave}>
      <Box padding={4} marginTop={10}  width={370} display="flex" flexDirection="column" component={Paper} variant="outlined" style={{backgroundColor: "#ffffff"}} borderRadius={8}>
        <Typography color="#8B8766" fontSize={24}>
          Login
        </Typography>
        <Typography color="#8B8766" fontSize={15} marginTop={2} marginBottom={1}>
          Prencha os campos abaixo com seus dados
        </Typography>
        <Grid container direction="column" spacing={1} height="100%">
          <Grid item>
            <VTextField type="email" size="small" fullWidth placeholder="Email" name="email"/>
          </Grid>
          <Grid item>
            <VTextField size="small" fullWidth placeholder="Password" name="password"/>
          </Grid>
          <Grid marginTop={2} item justifyContent="center" alignItems="center" display="flex">
            <Button type="submit" variant="contained" color="error">Entrar</Button>
          </Grid>
        </Grid>
        <Typography display="flex" justifyContent="center" color="#8B8766" fontSize={20} marginTop={4}  component={RouterLink}
          to="/carrinho/cadastro">
          cadastre-se
        </Typography>
      </Box>
    </Form>
  
  );
};
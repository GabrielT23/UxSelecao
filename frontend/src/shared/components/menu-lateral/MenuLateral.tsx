import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Divider, Drawer, useTheme, List, ListItem, ListItemText, IconButton } from "@mui/material";
import {Box} from "@mui/system";

interface IMenuLateralprops {
    children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateralprops> = ({children})=>{
    const theme = useTheme();

    return (
        <>
  <Box
    display="flex"
    height="100vh"
  >
    <Drawer variant="permanent">
      <Box width={theme.spacing(46)} height="100%" display="flex" flexDirection="column"
        style={{
            backgroundColor: 'rgba(96, 79, 79, 0.3)',
        }}
      >
        <Box width='100%' height={theme.spacing(30)} display="flex" alignItems="center" justifyContent="center"
        style={{
            color: '#FFE500',
            fontSize: '32pt',
        }}>
            Pizzaria UX
        </Box>
        <Box flex={1} display="flex" flexDirection="column" alignItems="center" marginTop={theme.spacing(5)}
          style={{
            color: '#ffffff'}}>
        <List dense>
          <ListItem>
            <ListItemText
              primary="Home"
              primaryTypographyProps={{ style: { fontSize: '20pt' } }}
              />
          </ListItem>
          <ListItem >
            <ListItemText
              primary="Contatos"
              primaryTypographyProps={{ style: { fontSize: '20pt' } }}
              />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Sobre"
              primaryTypographyProps={{ style: { fontSize: '20pt' } }}
              />
          </ListItem>
        </List>
        
        <Box display="flex" justifyContent="center" marginTop={theme.spacing(15)} marginRight={theme.spacing(3)}
          style={{
            borderBottom: '2px solid yellow', // Adicione esta linha para a borda inferior amarela
            paddingBottom: theme.spacing(1), // Ajuste conforme necessário
          }}>
          <IconButton color="secondary">
            <Facebook />
          </IconButton>
          <IconButton color="secondary">
            <Instagram />
          </IconButton>
          <IconButton color="secondary">
            <Twitter />
            <Divider style={{backgroundColor: "yellow"}}/>
          </IconButton >
        </Box>
        <Box marginTop={theme.spacing(1)} marginRight={theme.spacing(3)}>
          @2023 pizzaria UX
        </Box>
      </Box>
    </Box>
  </Drawer>

    <Box marginLeft={theme.spacing(46)} flexGrow={1} padding={theme.spacing(2)}>
      {/* Conteúdo principal (children) aqui */}
      {children}
    </Box>
  </Box>
</>
    );
};
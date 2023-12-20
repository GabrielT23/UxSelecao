import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Divider, Drawer, useTheme, List, ListItemText, IconButton, useMediaQuery, ListItemButton } from "@mui/material";
import {Box} from "@mui/system";
import { useDrawerContext } from "../../contexts";
import React from "react";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface IListItemLinkprops {
  to: string;
  label: string;
  onclick: (()=> void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkprops> = ({to, label, onclick}) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({path: resolvedPath.pathname, end: false})

  const handleClick = ()=> {
    navigate(to);
    if(onclick) onclick();
  }
  return(
      <ListItemButton selected={!!match} onClick={handleClick}>
        <ListItemText
          primary={label}
          primaryTypographyProps={{ style: { fontSize: '20pt' } }}
          />
      </ListItemButton>
  )
}


interface IMenuLateralprops {
    children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateralprops> = ({children})=>{
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const {isDrawerOpen, toggleDrawerOpen, drawerOptions} = useDrawerContext();
    return (
    <>
    <Drawer open ={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
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
        <List dense component="nav">
          {drawerOptions.map(drawerOption =>(   
            <ListItemLink
            key={drawerOption.path}
            label={drawerOption.label}
            to={drawerOption.path}
            onclick={smDown ? toggleDrawerOpen: undefined}
          />))}
        </List>
        
        <Box display="flex" justifyContent="center" marginTop={theme.spacing(15)} marginRight={theme.spacing(3)}
          style={{
            borderBottom: '2px solid yellow', // Adicione esta linha para a borda inferior amarela
            paddingBottom: theme.spacing(1), // Ajuste conforme necessário
          }}>
          <IconButton color="inherit">
            <Facebook />
          </IconButton>
          <IconButton color="inherit">
            <Instagram />
          </IconButton>
          <IconButton color="inherit">
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
</>
    );
};
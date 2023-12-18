import {createTheme} from '@mui/material';

export const PrincipalTheme = createTheme({
    palette: {
        primary: {
            main: 'rgba(96, 79, 79, 0.3)',
            dark: 'rgba(96, 79, 79, 0.5)',
            light: '#604F4F',
            contrastText: '#FFE500'
        },
        secondary: {
            main: '#FF1C1C',
            dark: '#FF1C1B',
            light: '#604F4F',
            contrastText: '#ffffff'
        },
        background: {
            default: 'F0F0F0' ,
            paper: 'ffffff'
        },
    }
});
//@flow
import * as React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import './JnJThemeProvider.scss';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'J&J Circular',
        body1: {
            fontSize: 16,
            lineHeight: 1.625,
            fontWeight: 300,
        },
        body2: {
            fontSize: 20,
            lineHeight: 1.5,
            fontWeight: 300,
        }
    },
    palette: {
        primary: {
            main: '#ca001b'
        },
        secondary: {
            main: '#000099'
        },
        text: {
            primary: '#212121',
            secondary: '#ffffff'
        },
        divider: '#e6e6e6'
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 480,
            md: 768,
            lg: 1280,
            xl: 1776
        }
    }
});

interface JnJThemeProviderProps {
    children: React.ReactChildren
}

export default function JnJThemeProvider(props: JnJThemeProviderProps) {
    return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
}

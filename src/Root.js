import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import './assets/css/fonts.css';
import theme from './theme';
import App from './App';

const Root = () => (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </BrowserRouter>
);

const GlobalStyle = createGlobalStyle`
    body {
        background: ${props => props.theme.mainColor};
        color: ${props => props.theme.textColor};
        font-family: "Noto Sans KR";
        margin: 0;
        padding: 0;
        -ms-overflow-style: none; 
    };
    ::-webkit-scrollbar { display: none; };
`;

export default Root;

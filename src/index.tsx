import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

let theme = createTheme({
  // palette: {
  //   background: {
  //     default: "linear-gradient(red, yellow)"
  //   }
  // },
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: {
  //       body: {
  //         background: 'linear-gradient(red, yellow)',
  //         backgroundRepeat: "no-repeat",
  //         backgroundAttachment: "fixed",
  //       },
  //     },
  //   },
  // },
});
theme = responsiveFontSizes(theme)

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />

      <App />
    </ThemeProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

let theme = createTheme({
  typography: {
    h5: {
      fontSize: '18px',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 0 16px #eee"
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: 'black'
        },
      }
    },
  }
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

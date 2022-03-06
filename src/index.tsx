import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
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
        select: {
          padding: '14px'
        },
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "13px",
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center'
        }
      }
    }
  }
});
theme = responsiveFontSizes(theme)

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </BrowserRouter>
    </ThemeProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

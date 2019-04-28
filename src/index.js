import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff1493',
    },
  },
});

ReactDOM.render(
   <MuiThemeProvider theme={theme}>
    <App />
   </MuiThemeProvider>,
  document.getElementById('root')
);

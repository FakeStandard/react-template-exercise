import React from 'react';
import { Box, createTheme, CssBaseline, Paper, ThemeProvider, Typography } from "@mui/material";

// set up custom theme(optional)

// define theme
const theme = createTheme({
  palette: {
    primary: { // 主要色調
      light: "#63b8ff",
      main: "#0989e3",
      dark: "#005db0",
      contrastText: "#000"
    },
    secondary: { // 次要色調
      main: '#4db6ac',
      light: '#82e9de',
      dark: '#00867d',
      contrastText: '#000'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height="100vh" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Paper elevation={3} sx={{ padding: "1rm", backgroundColor: "secondary.light" }}>
          <Typography color="primary.dark" variant="h1">
            Starter App
          </Typography>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default App;

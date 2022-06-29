import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { routes as appRoutes } from './routes'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// set up custom theme(optional)

// define theme
const theme = createTheme({
  palette: {
    primary: { // 主要色調
      light: "#63b8ff",
      main: "#FFF5B0",
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
    // just change the theme settings here 
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height='100vh' display='flex' flexDirection='column'>
        <Router>
          {/* set up navigation bar */}
          <Navbar />
          <Routes>
            {appRoutes.map((route) => (
              <Route key={route.key} path={route.path} element={<route.component />} />
            ))}
          </Routes>
          {/* set up footer */}
          <Footer />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;

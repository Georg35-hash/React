import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography, Box } from "@mui/material";
import { lightTheme, darkTheme, StyledButton } from "./App";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Typography variant="h4" gutterBottom>
          {darkMode ? "Dark theme" : "Light theme"}
        </Typography>
        <StyledButton variant="contained" color="primary" onClick={toggleTheme}>
          Switch theme
        </StyledButton>
      </Box>
    </ThemeProvider>
  );
}

export default App;

import { createTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#bb86fc",
    },
  },
});

export const StyledButton = styled(Button)`
  margin-top: 20px;
`;

import logo from './logo.svg';
import './App.css';
import {CardAnnounce} from "./components/CardAnnounce"
import { createTheme, ThemeProvider, Typography } from "@mui/material/styles";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Open Sans", "sans serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CardAnnounce/>
    </ThemeProvider>
    
  );
}

export default App;

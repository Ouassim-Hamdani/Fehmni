import logo from './logo.svg';
import './App.css';
import {Footer} from "./components/Footer"
import { createTheme, ThemeProvider} from "@mui/material/styles";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Open Sans", "sans serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Footer/>
    </ThemeProvider>
    
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { SearchSection } from './components/search-page/SearchSection';
import { createTheme, ThemeProvider} from "@mui/material/styles";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Open Sans", "sans serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <SearchSection/>
    </ThemeProvider>
    
  );
}

export default App;

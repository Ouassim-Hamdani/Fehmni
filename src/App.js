import './App.css';
import { FavoritesPage } from './pages/FavoritesPage';
import { createTheme, ThemeProvider} from "@mui/material/styles";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Open Sans", "sans serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <FavoritesPage/>
    </ThemeProvider>
    
  );
}

export default App;

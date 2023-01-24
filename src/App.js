import './App.css';
import { FavoritesPage } from './pages/FavoritesPage';
import { createTheme, ThemeProvider} from "@mui/material/styles";
function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <FavoritesPage/>
    </ThemeProvider>
    
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { TopSection } from './components/announcement-page/TopSection';
import { createTheme, ThemeProvider} from "@mui/material/styles";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Open Sans", "sans serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <TopSection/>
    </ThemeProvider>
    
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { ProfileSection } from './components/profile-page/ProfileSection';
import { createTheme, ThemeProvider} from "@mui/material/styles";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Open Sans", "sans serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <ProfileSection/>
    </ThemeProvider>
    
  );
}

export default App;

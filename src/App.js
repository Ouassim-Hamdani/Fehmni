import logo from './logo.svg';
import './App.css';
import {RecentAnnouncements} from "./components/landing-page/RecentAnnouncements"
import { createTheme, ThemeProvider} from "@mui/material/styles";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Open Sans", "sans serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <RecentAnnouncements/>
    </ThemeProvider>
    
  );
}

export default App;

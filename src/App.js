import './App.css';
import { FavoritesPage } from './pages/FavoritesPage';
import { createTheme, ThemeProvider} from "@mui/material/styles";
import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";
import { LandingPage } from './pages/LandingPage';
import { AnnouncementPage } from './pages/AnnouncementPage';
import { ProfilePage } from './pages/ProfilePage';
import { SearchPage } from './pages/SearchPage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage';
import { useState } from 'react';

function App() {
  localStorage.setItem("userId","1")
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const theme = createTheme({
    typography: {
      fontFamily: ["Open Sans", "sans serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/announcement" element={<AnnouncementPage/>}></Route>
        <Route path="/profile" element={localStorage.getItem("userId")!=="null"?<ProfilePage/>:<LandingPage/>}></Route>
        <Route path="/favorites" element={<FavoritesPage/>}></Route>
        <Route path="/search" element={<SearchPage/>}></Route>
        <Route path="/login" element={<SignInPage />}></Route>
        <Route path="/register" element={<SignUpPage/>}></Route>
        <Route path="/reset-password" element={<ResetPasswordPage/>}></Route>
      </Routes>
    </Router>
    
    </ThemeProvider>
    
  );
}

export default App;

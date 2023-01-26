import './App.css';
import {Dashboard} from "./components/pages/Dashboard"
import {Scan} from "./components/pages/Scan"
import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";
import { MessagePage } from './components/pages/MessagePage';
import { ScansPage } from './components/pages/ScansPage';
import { PatientsPage } from './components/pages/PatientsPage';
import { DoctorsPage } from './components/pages/DoctorsPage';
import { AdminDashboard } from './components/pages/AdminDashboard';
import { AdminPatients } from './components/pages/AdminPatients';
import { PatientPage } from './components/pages/PatientPage';
import { Login } from './components/pages/Login';
import { useAuthContext } from './hooks/useAuthContext'
function App() {
  const { user } = useAuthContext()
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Dashboard/>: <Navigate to="/login" />}></Route>
        <Route path="/patients" element={<PatientsPage/>}></Route>
        <Route path='/messages' element={<MessagePage/>}></Route>
        <Route path='/scans' element={<ScansPage/>}></Route>
        <Route path='/scan' element={<Scan/>}></Route>
        <Route path='/doctors' element={<DoctorsPage/>}></Route>        
        <Route path='/admin' element={<AdminDashboard/>}></Route>
        <Route path='/patients-admin' element={<AdminPatients/>}></Route>
        <Route path='/patient/1' element={<PatientPage/>}></Route>
        <Route path="/login" element={!user ?<Login/>: <Navigate to="/" />}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;

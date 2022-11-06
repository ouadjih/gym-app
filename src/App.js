
import { Navigate, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import './App.css';
import { AthleteList, Home, Login,NewAthlete} from './pages';
import{userInputs } from "./formSource";
function App() {

  const {currentUser} = useContext(AuthContext)
  const RequireAuth = ({ children })=>{
      return currentUser? children : <Navigate to="/login"/>
  }
  console.log(currentUser)
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
        <Route path="login" element={<Login/>}/>
        <Route path="" element={<RequireAuth><Home/></RequireAuth>}/>     
        <Route path="new" element={<RequireAuth><NewAthlete title={"Add New Athlete"} inputs={userInputs}/></RequireAuth>}/>
        <Route path="AthleteList" element={<RequireAuth><AthleteList/></RequireAuth>}/>   
        </Route>
      </Routes>
    </div>
  );
}

export default App;

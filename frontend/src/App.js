import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import PrivateRoute from './routes/PrivateRoute'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<PrivateRoute element={<Dashboard/>}/>}/>
      </Routes>
    </Router>
  );
}

export default App;

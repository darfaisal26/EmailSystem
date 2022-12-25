import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import './App.css';
import Login from './Views/Login';
import Register from './Views/Register';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route    path ='/' element={<Login/>}/>
        <Route    path='/Register'   element={<Register/>}/>

      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;

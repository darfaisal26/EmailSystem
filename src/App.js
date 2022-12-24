import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import './App.css';
import SignIn from './Components/SignIn';
import SignUP from './Components/SignUP';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route    path='/'   element={<SignUP/>}/>
        <Route    path ='/SignIn' element={<SignIn/>}/>

      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;

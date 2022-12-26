import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import './App.css';
import SignIn from './Components/SignIn';
import SignUP from './Components/SignUP';
import Home from './Components/Home';
import Email from './Components/Email';
import Users from './Components/Users';
import Error from './Components/Error';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route    path='/'   element={<SignUP/>}/>
      <Route    path ='/SignIn' element={<SignIn/>}/>
      <Route    path='/Home'   element={<Home/>}/>
      <Route    path='/Email'   element={<Email/>}/>
      <Route    path='/Users' element={<Users/>}/>
      <Route    path='/contactus' element={<ContactUs/>}/>
      <Route    path='*' element={<Error/>}/>

      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;

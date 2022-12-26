
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import './App.css';
import Login from './Views/Login';
import Register from './Views/Register';




function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri:
      "http://emailproject-env.eba-pwtpkn6y.ap-south-1.elasticbeanstalk.com/graphql",
      
  });
return (
    <ApolloProvider client={client}>
    <div>
      <BrowserRouter>
      <Routes>
        <Route    path ='/' element={<Login/>}/>
        <Route    path='/Register'   element={<Register/>}/>

      </Routes>
      </BrowserRouter>
      </div>
      </ApolloProvider>
  );
}

export default App;

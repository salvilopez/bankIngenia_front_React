import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import LoginPage from './Pages/Login/LoginPage';
import RegisterPage from './Pages/Register/RegisterPage';

function App() {
  //TODO para pruebas 
 // let loggedIn= sessionStorage.getItem('logged')
  //Todo false y sale directamente el login, true y sale el dashboard
  let loggedIn= true;


  return (
    
   <Router>
    {/* Switch de rutas */}
      <Switch>
          {/* Ruta a la raíz con redirección a Login si no está logueado */}
           <Route exact path='/'>
            {loggedIn ? 
              <Redirect from = '/' to = '/dashboard/inicio'/>
              :          
              <Redirect from = '/' to = '/login'/>
            }
          </Route> 
          {/* Ruta a Login */}
          <Route exact path='/login' component = {LoginPage}/>

          {/* Ruta a dashboard con redirección a login si no está logueado */}
          <Route path='/dashboard'>
            {loggedIn ? 
                <Sidebar/>
                :          
                <Redirect from = '/dashboard' to = '/login'/>
            }
          </Route>  
          <Route path='/registro'>
        <RegisterPage/>
          
          </Route>     
      </Switch>
   </Router>
  );
}

export default App;

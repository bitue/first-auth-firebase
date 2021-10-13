
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Private/PrivateRoute';

function App() {
  return (
    <div className="App">

      <AuthProvider>

        <BrowserRouter>
          <Switch>

            <Route exact path='/'>
              <Header></Header>

              <Home></Home>
            </Route>
            <Route path='/home'>
              <Header></Header>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Header></Header>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Header></Header>
              <Register></Register>
            </Route>
            <PrivateRoute  path='/dashboard'>
              <Header></Header>
              <Dashboard></Dashboard>

            </PrivateRoute>



          </Switch>
        </BrowserRouter>



      </AuthProvider>


    </div>
  );
}

export default App;

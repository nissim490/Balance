import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Footer from './shared/components/Navigation/Footer';
import Container from './shared/components/Navigation/Container';
import HeadBar from './shared/components/Navigation/HeadBar';
import HomePage from './pages/HomePage';
import Sidebar from './shared/components/Navigation/Sidebar';
import Budget from './pages/Balance';
import Auth from './user/pages/Auth';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';

const App = () => {
  const { token, login, logout, userId ,name} = useAuth();
  let routes;
 

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
        <HomePage />
        </Route>
       
        <Route path="/Budget"exact>
          <Budget />
        </Route>
        <Redirect to="/Budget" />
      </Switch>
    );

     } else {
      routes = (
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Redirect to="/auth" />
        </Switch>
      );
    }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
        name:name
      }}
    >
   <Router>
            
      <Container>
        <Sidebar />
        <main className='app' >{routes}</main>
        <HeadBar name={name}/>
        <Footer />     
      </Container>
       
  </Router>
  </AuthContext.Provider>
  );
};
export default App;
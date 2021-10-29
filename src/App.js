import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/MyNavbar.js';
import RegisterPage from './Pages/RegisterPage';
import HomePage from './Pages/HomePage';
import {BrowserRouter, Route, Switch, useParams } from 'react-router-dom';
import React, { useContext, useState, useMemo } from 'react';
import { UserContext } from "./UserContext";
import UserSettingsPage from './Pages/SettingsPage';
import PlayerPage from './Pages/PlayerPage';
import LoginPage from './Pages/LoginPage';
import ClanPage from './Pages/ClanPage';
import EmailVerificationPage from './Pages/EmailVerificationPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';

function App() {
    const [user, setUser] = useState(null);

   if(localStorage.getItem('user') && user == null)
   {
    setUser(JSON.parse(localStorage.getItem('user')));
   }

  return  <div className="App d-block"  >
    <UserContext.Provider value={{user, setUser}}>
    <BrowserRouter>

      <div className="container" style={{ backgroundColor:'#d3d3d3'}}>
          <MyNavbar  />


      <main className="form-signin">
      
      
        <Route path="/" exact component={HomePage}  />

        <Route path="/login" exact  component={LoginPage}  />
        <Route path="/register" exact component={RegisterPage}  />
        <Route path="/usersettings"exact  component={UserSettingsPage}  />
        <Route path="/settings"exact  component={UserSettingsPage}  />
        <Route path="/clan" exact component={ClanPage}  />
        <Route path="/clan/:clanTag"> <ClanPage /> </Route>
        <Route path="/player"exact  component={PlayerPage}/>
        <Route path="/player/:playerTag"><PlayerPage /></Route>
        <Route path="/register/authenticate/:verificationCode"><EmailVerificationPage /></Route>
        <Route path="/forgotpassword/:passwordResetCode"exact  component={ForgotPasswordPage}/>
        <Route path="/forgotpassword"exact  component={ForgotPasswordPage}/>
        
      
      </main>
      
      </div>
        </BrowserRouter>
        </UserContext.Provider>
    </div>
    
}

export default App;

// <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus/>
/*
  <Route path="/player/:playerTag"
            render={
              props=> <PlayerPage id={props.match.params.id} />
            } />
            */
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import PremiumContent from "./PremiumContent";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import { useEffect, useState } from "react";
import { getToken, getUser, resetUserSession, setUserSession } from "./service/AuthService";
import axios from "axios";

const verifyTokenAPIURL = "https://qtmxgpkmrc.execute-api.us-east-1.amazonaws.com/log/verify";

function App() {

  const [isAuthenticating, setAuthenticating] = useState(true);

  useEffect(() =>{
    const token = getToken();
    if(token === 'undefined' || token === undefined || token === null || !token){
      return;
    }

    const requestConfig = {
      headers: {
          'x-api-key': 'XvMCNtqeh81cZpC4Ztz9X7bl67Ax4Fjn6ep9eCR5'
      }
    }

    const requestBody = {
      user: getUser(),
      token:token
  }

  axios.post(verifyTokenAPIURL, requestBody, requestConfig).then((response) =>{
      setUserSession(response.data.user, response.data.token);
      setAuthenticating(false);
  }).catch(() => {
      resetUserSession();
      setAuthenticating(false);
  })

    
  }, []);

  const token = getToken();
  if(isAuthenticating && token){
    return <div className="content">Authenticating...</div>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
          <NavLink activeClassName="active" to="/register">Register</NavLink>
          <NavLink activeClassName="active" to="/login">Login</NavLink>
          <NavLink activeClassName="active" to="/premium-content">Premium  Content</NavLink>
        </div>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route element={<PublicRoute />} >
              <Route  path="/register" element={<Register />} />
              <Route  path="/login" element={< Login />} />
            </Route>
            <Route element={<PrivateRoute />} >
              <Route  path="/premium-content" element={ <PremiumContent />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

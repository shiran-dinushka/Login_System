import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import PremiumContent from "./PremiumContent";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
function App() {

  
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

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import PremiumContent from "./PremiumContent";
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
            <Route exact path="/" Component={Home} />
            <Route exact path="/register" Component={Register} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="/premium-content" Component={PremiumContent} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

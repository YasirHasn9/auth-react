import { Route, Link } from "react-router-dom";
import { Public } from "./component/public";
import { Protected } from "./component/protected";

// auth
import { ProtectedRoute } from "./auth/protectedRoute";
import "./App.css";

import { Login } from "./component/login";
export function App() {
  return (
    <div className="app">
      <ul className="navbar">
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/protected" component={Protected} />
    </div>
  );
}

// 1. it has the same Route api
import { Redirect, Route } from "react-router-dom";

// this component takes a component as an argument and also passed props
export const ProtectedRoute = ({ component: Component, ...rest }) => {
  // 2. is uses route and also passed all the props
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

import React, { useContext } from "react";
import {Route, Redirect} from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";







function PrivateRoute({ children, ...rest }) {
    const {user} = useContext(AuthContext).allContext
  
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;
import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  AssociatesPage,
  ExplorePage,
  FourZeroFour,
  HomePage,
  SignInPage,
  NewLocation,
  PrintPage,
} from "./pages";
import { PrivateRoute } from "./lib/components";
import { GlobalContext } from "./context";

const App = () => {
  const [auth, setAuth] = useState(false);
  const { userState } = useContext(GlobalContext);

  useEffect(() => {
    if (userState.auth === true) setAuth(true);
  }, [userState]);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/signin" />
          </Route>
          <Route path="/new" exact>
            <NewLocation />
          </Route>
          <Route path="/print" exact>
            <PrintPage />
          </Route>
          <Route path="/signin" exact component={SignInPage} />
          <PrivateRoute auth={auth} path="/home" exact>
            <HomePage />
          </PrivateRoute>
          <PrivateRoute auth={auth} path="/users/explore" exact>
            <ExplorePage />
          </PrivateRoute>
          <PrivateRoute auth={auth} path="/users/associates/:id">
            <AssociatesPage />
          </PrivateRoute>
          <Route path="*" exact component={FourZeroFour} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

import "./App.css";
import React from "react";
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

const App = () => {
  const isAuthenticated = true;
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
          <Route path="/qr" exact>
            <PrintPage />
          </Route>
          <Route path="/signin" exact component={SignInPage} />
          <PrivateRoute auth={isAuthenticated} path="/home" exact>
            <HomePage />
          </PrivateRoute>
          <PrivateRoute auth={isAuthenticated} path="/users/explore" exact>
            <ExplorePage />
          </PrivateRoute>
          <PrivateRoute auth={isAuthenticated} path="/users/associates/:id">
            <AssociatesPage />
          </PrivateRoute>
          <Route path="*" exact component={FourZeroFour} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

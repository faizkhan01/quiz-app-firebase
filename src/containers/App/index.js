import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Header from "../../components/Header";
import Homepage from "../../containers/Homepage/index";
import Quiz from "../../containers/Quiz/index";
import Navbar from "../../containers/Navbar/Navbar";
import Login from "../Login/Login";
import PrivateRoute from "../Login/PrivateRoute";

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState({
    signed: false,
    name: "",
    email: "",
    password: "",
    message: "",
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Container maxWidth="sm">
          <Box my={4}>
            <Navbar />
            <Header />

            <Switch>
              <Route exact path="/" component={Homepage} />
              <PrivateRoute path="/quiz" component={Quiz} />
            </Switch>
          </Box>
        </Container>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;

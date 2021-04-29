import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Header from "../../components/Header";
import Homepage from "../../containers/Homepage/index";
import Quiz from "../../containers/Quiz/index";

const App = () => {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box my={4}>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/quiz" component={Quiz} />
          </Switch>
        </Box>
      </Container>
    </Router>
  );
};

export default App;

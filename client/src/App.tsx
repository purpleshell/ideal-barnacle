import ApolloClient from "apollo-boost";
import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MobileNav from "./components/MobileNav";
import ExercisePage from "./pages/ExercisePage";
import ExercisesPage from "./pages/ExercisesPage";
import LandingPage from "./pages/LandingPage";

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://overload-server.herokuapp.com/graphql"
      : "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ApolloProvider client={client}>
            <Router>
              <MobileNav />
              <Route path="/" exact component={LandingPage} />
              <Route exact path="/exercises/" component={ExercisesPage} />
              <Route path="/exercise/:id" component={ExercisePage} />
            </Router>
          </ApolloProvider>
        </header>
      </div>
    );
  }
}

export default App;

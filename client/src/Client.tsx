import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider, Query } from "react-apollo";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import MobileNav from "./components/MobileNav";
import { AM_I_LOGGED_IN } from "./components/Schema";
import ExercisePage from "./pages/ExercisePage";
import ExercisesPage from "./pages/ExercisesPage";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";

const apolloclient = new ApolloClient({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://overload-server.herokuapp.com/graphql"
      : "http://localhost:4000/graphql",
  credentials: "include"
});

const Client = () => {
  return (
    <>
      <ApolloProvider client={apolloclient}>
        <Query query={AM_I_LOGGED_IN}>
          {({ loading, error, data }) => {
            // while waiting for query response, render onboarding site
            if (loading) return <Site />;
            if (error) return <p>{error.message}</p>;

            // if user is not logged in, render the marketing website
            if (data.me) {
              return <App />;
            }
            // if user is logged in, render the app
            return <Site />;
          }}
        </Query>
      </ApolloProvider>
    </>
  );
};

const Site = () => {
  return (
    <div className="site">
      <div className="site-background-blur">
        <div className="container">
          <Router>
            <header>
              <div className="logo">
                <span className="primary">OVER</span>LOAD
              </div>
              <nav>
                <Link className="site-nav-link link" to="/login">
                  LOGIN
                </Link>
              </nav>
            </header>
            <main>
              <h1 className="site-heading">Your Personal Fitness Database</h1>
              <h2 className="app-details-preview">
                Record your training. View tailor made logs, graphs, diagrams
                and suggestions for your individual data.
              </h2>
              <h3>Plans starting at $1.99/month.</h3>
              <button className="cta-btn">START YOUR FREE TRIAL</button>
              <h4>Free trial available for new subscribers only.</h4>
              <Link className="learn-more-link link" to="/learn-more">
                Learn More
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z" />
                  </svg>
                </div>
              </Link>
            </main>
            <footer>
              <a
                className="photo-cred"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  textDecoration: "none",
                  padding: "4px 6px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  lineHeight: 1.2,
                  display: "inline-block",
                  borderRadius: "3px"
                }}
                href="https://unsplash.com/@aloragriffiths?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
                target="_blank"
                rel="noopener noreferrer"
                title="Download free do whatever you want high-resolution photos from Alora Griffiths"
              >
                <span style={{ display: "inline-block", padding: "2px 3px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      height: "12px",
                      width: "auto",
                      position: "relative",
                      verticalAlign: "middle",
                      top: "-2px",
                      fill: "white"
                    }}
                    viewBox="0 0 32 32"
                  >
                    <title>unsplash-logo</title>
                    <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
                  </svg>
                </span>
                <span style={{ display: "inline-block", padding: "2px 3px" }}>
                  Alora Griffiths
                </span>
              </a>
            </footer>
          </Router>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Router>
        <header>
          <MobileNav />
        </header>
        <main>
          <Route path="/" exact component={LandingPage} />
          <Route exact path="/exercises/" component={ExercisesPage} />
          <Route path="/exercise/:id" component={ExercisePage} />
          <Route exact path="/profile/" component={ProfilePage} />
        </main>
      </Router>
    </div>
  );
};

export default Client;

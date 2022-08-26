import React, { Suspense } from "react";
import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import { Switch, Redirect } from "react-router-dom";
import LoadRoute from "./components/loadRouter/LoadRoute";
import Header from "./components/elements/header/Header";
import { GlobalStyle } from "./components/styles/globalStyle";
import "./assets/fonts/default-icons/style.css"
import routes from "./routes/routes";

function App() {

  return (
    <HelmetProvider>
      <Suspense fallback="loading...">
        <Header/>
        <Switch>
          {routes.map((route, i) => (
            <LoadRoute key={i} {...route} />
          ))}
          <Redirect to="/page-not-found"/>
        </Switch>
      </Suspense>
      <GlobalStyle/>
    </HelmetProvider>
  );
}

export default App;

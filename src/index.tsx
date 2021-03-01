import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage  from "./pages/HomePage/HomePage";
import CommentPage  from "./pages/CommentPage/CommentPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import client from "./graphql/githubapi";
import { Provider } from 'react-redux';
import store from './redux/store';
import "./index.scss";


ReactDOM.render( 
   <Provider store={store}>
      <ApolloProvider client={client}>
         <React.StrictMode>
            <Router>
               <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/issue/:number" component={CommentPage} />
                  <Route component={NotFoundPage} />
               </Switch>
            </Router>
         </React.StrictMode>
      </ApolloProvider>
   </Provider>,

  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Pages
import HomePage  from "./pages/HomePage/HomePage";
import CommentPage  from "./pages/CommentPage/CommentPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
// Apollo GraphQl
import { ApolloProvider } from '@apollo/client';
import client from "./graphql/githubapi";
// Redux Management
import { Provider } from 'react-redux';
import store from './redux/store';
// Theme with styledComponents
import { ThemeProvider} from 'styled-components';
import { theme } from "./theme/theme";
import { GlobalStyle } from "./theme/globalStyles";


ReactDOM.render( 
   <Provider store={store}>
      <ApolloProvider client={client}>
         <ThemeProvider theme={theme}>
            <React.StrictMode>
               <GlobalStyle />
               <Router>
                  <Switch>
                     <Route exact path="/" component={HomePage} />
                     <Route exact path="/issue/:number" component={CommentPage} />
                     <Route component={NotFoundPage} />
                  </Switch>
               </Router>
            </React.StrictMode>
         </ThemeProvider>
      </ApolloProvider>
   </Provider>,

  document.getElementById("root")
);

import React from "react";
import { mount, shallow, render } from 'enzyme';
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import SearchBar from "../components/SearchBar/SearchBar";
import { Provider } from "react-redux";
import store from "../redux/store";



describe('Testing SearchBar', () => {

   // it('renders snapshots, too', () => {

   //    const wrapper = render(
   //       <Provider store={store}>
   //          <ThemeProvider theme={theme}>
   //             <SearchBar />
   //          </ThemeProvider>
   //       </Provider>
      
   //    ); 
      
      
   //    expect(wrapper).toMatchSnapshot()
   // })

})
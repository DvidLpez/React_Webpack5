import React from "react";
import { mount, shallow, render } from 'enzyme';
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import SearchBar from "../components/SearchBar/SearchBar";
import { Provider } from 'react-redux';
import store from "../redux/store";
import * as reactRedux from 'react-redux';



describe('TESTING SEARCHBAR', () => {

   const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
   
   it('*** Check initial state and Render HTML ***', () => {

      beforeEach(() => {
         useSelectorMock.mockClear();
      })
      
      useSelectorMock.mockReturnValue({term: '', status: ''});

      const wrapper = render(
         <Provider store={store}>
            <ThemeProvider theme={theme}>
               <SearchBar />
            </ThemeProvider>
         </Provider>
      
      ); 

      expect(wrapper.find('#all').prop('checked')).toBe(true); // OK
      expect(wrapper.find('#open').prop('checked')).toBe(false); // OK
      expect(wrapper.find('#closed').prop('checked')).toBe(false); // OK
      expect(wrapper.find('#searchbar').text()).toBe(''); // OK
      expect(wrapper.find('input')).toHaveLength(4); // OK
      expect(wrapper).toMatchSnapshot(); // OK
   })
})

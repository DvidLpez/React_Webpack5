import React from "react";
import { mount, shallow, render } from 'enzyme';
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import SearchBar from "../components/SearchBar/SearchBar";
import { Provider } from 'react-redux';
import store from "../redux/store";
import * as reactRedux from 'react-redux';

const renderWrapper = ()=> {
   return render(
      <Provider store={store}>
         <ThemeProvider theme={theme}>
            <SearchBar />
         </ThemeProvider>
      </Provider>
   )
}

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

describe('TESTING SEARCHBAR COMPONENT', () => {
   
   it('- Default Searchbar HTML output', () => {
      beforeEach(() => {
         useSelectorMock.mockClear();
      });
      useSelectorMock.mockReturnValue({term: '', status: ''});
      const wrapper = renderWrapper(); 
      expect(wrapper.find('#all').prop('checked')).toBe(true); 
      expect(wrapper.find('#open').prop('checked')).toBe(false); 
      expect(wrapper.find('#closed').prop('checked')).toBe(false); 
      expect(wrapper.find('#searchbar').val()).toMatch(''); 
      expect(wrapper.find('input')).toHaveLength(4); 
      expect(wrapper).toMatchSnapshot(); 
   });

   describe('- CHECK STATES OPEN AND CLOSE', () => {
      it('- Input open is checked', () => {
         beforeEach(() => {
            useSelectorMock.mockClear();
         });
         useSelectorMock.mockReturnValue({ term: '', status: 'open' });
         const wrapper = renderWrapper();
         expect(wrapper.find('#all').prop('checked')).toBe(false); 
         expect(wrapper.find('#open').prop('checked')).toBe(true); 
         expect(wrapper.find('#closed').prop('checked')).toBe(false); 
         expect(wrapper.find('input')).toMatchSnapshot(); 
      });

      it('- Input closed is checked', () => {
         beforeEach(() => {
            useSelectorMock.mockClear();
         });
         useSelectorMock.mockReturnValue({ term: '', status: 'closed' });
         const wrapper = renderWrapper();
         expect(wrapper.find('#all').prop('checked')).toBe(false); 
         expect(wrapper.find('#open').prop('checked')).toBe(false); 
         expect(wrapper.find('#closed').prop('checked')).toBe(true); 
         expect(wrapper.find('input')).toMatchSnapshot(); 
      });
   });

   describe('- CHECK SEARCH VALUE', () => {
      it('- Add vaule as a term to search', () => {
         beforeEach(() => {
            useSelectorMock.mockClear();
         });
         useSelectorMock.mockReturnValue({ term: 'useEffect', status: '' });
         const wrapper = renderWrapper();
         expect(wrapper.find('#searchbar').val()).toMatch('useEffect');
         expect(wrapper.find('#searchbar')).toMatchSnapshot();
      });
   });
   
});

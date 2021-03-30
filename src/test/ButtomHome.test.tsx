import React from "react";
import ButtomHome from "../components/ButtomHome/ButtomHome";
import { mount, shallow, render} from 'enzyme';
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import { MemoryRouter } from "react-router-dom";


describe('TESTING HOME BUTTOM', () => {

   it('- Check url, value and HTML output', () => {
      const wrapper = render(
         <ThemeProvider theme={theme}>
            <MemoryRouter>
               <ButtomHome />
            </MemoryRouter>
         </ThemeProvider >
      );

      let anchor = wrapper.find('a'),
      url = anchor.attr('href'),
      value = anchor.html();

      expect(url).toEqual('/');   // OK
      expect(value).toMatch('Go Home');  // OK
      expect(wrapper).toMatchSnapshot();  // OK
   });
});

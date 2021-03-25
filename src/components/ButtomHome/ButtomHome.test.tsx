import React from "react";
import ButtomHome from "./ButtomHome";
import { mount, shallow, render} from 'enzyme';
import { LinkHome } from "../StyledComponents/styledComponents";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme/theme";
import { MemoryRouter } from "react-router-dom";

// export const mountWithTheme = (children: any) =>
//    mount(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export const renderWithTheme = (children: any) =>
   render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

// export const shallowWithTheme = (children: any) =>
//    shallow(<ThemeProvider theme={theme}>{children}</ThemeProvider>);


describe('TESTING HOME BUTTOM', () => {

   it(' *** Check url and Value in buttom home ***', () => {

      const wrapper = renderWithTheme(
         <MemoryRouter>
            <ButtomHome />
         </MemoryRouter>
      );

      let anchor = wrapper.find('a'),
      url = anchor.attr('href'),
      value = anchor.html();

      expect(url).toEqual('/');   // OK
      expect(value).toMatch('Go Home');  // OK
      expect(wrapper).toMatchSnapshot();  // OK
   });

});

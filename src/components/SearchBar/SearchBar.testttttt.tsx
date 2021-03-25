import React from "react";
import { mount, shallow, render } from 'enzyme';
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme/theme";
import SearchBar from "./SearchBar";

export const mountWithTheme = (children: any) =>
   mount(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export const renderWithTheme = (children: any) =>
   render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export const shallowWithTheme = (children: any) =>
   shallow(<ThemeProvider theme={theme}>{children}</ThemeProvider>);



describe('Testing SearchBar', () => {



   // it('renders snapshots, too', () => {
   //    const wrapper = shallow(<SearchBar />)
   //    expect(wrapper).toMatchSnapshot()
   // })

})
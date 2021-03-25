import React from "react";
import { mount, shallow, render } from 'enzyme';
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme/theme";
import NotFoundPage from "./NotFoundPage";
import { MemoryRouter } from "react-router-dom";

export const mountWithTheme = (children: any) =>
   mount(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export const renderWithTheme = (children: any) =>
   render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export const shallowWithTheme = (children: any) =>
   shallow(<ThemeProvider theme={theme}>{children}</ThemeProvider>);



describe('Testing Page Not Found', () => {



   // it('renders snapshots, too', () => {
   //    const wrapper = shallow(<NotFoundPage />)
   //    expect(wrapper).toMatchSnapshot()
   // })



   it('renders snapshots, too', () => {
      const wrapper = mountWithTheme(
         <MemoryRouter initialEntries={['/random']}>
            <NotFoundPage />
         </MemoryRouter>
      )
      expect(wrapper).toMatchSnapshot()
   })

})
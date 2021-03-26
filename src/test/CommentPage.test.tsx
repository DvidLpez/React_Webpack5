import React from "react";
import { mount, shallow, render } from 'enzyme';
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import { MemoryRouter } from 'react-router-dom';
import CommentPage from "../pages/CommentPage/CommentPage";
import { Provider } from "react-redux";
import store from "../redux/store";


describe('Testing Page Comments', () => {



   it('renders snapshots, too', () => {

      const routeComponentPropsMock = {
         // add jest.fn() as needed to any of the objects
         history: {} as any,
         location: {} as any,
         match: { params: {number: 'aafdasd'}} as any
      }
     
      const wrapper = mount(
         <Provider store={store}>
             <ThemeProvider theme={theme}>
               <MemoryRouter>
                  <CommentPage  {...routeComponentPropsMock}/>
               </MemoryRouter>
            </ThemeProvider>
         </Provider>
      )
      expect(wrapper).toMatchSnapshot()
   })

})
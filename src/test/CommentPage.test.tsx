import React from "react";
import { mount, shallow, render } from 'enzyme';
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import { MemoryRouter } from 'react-router-dom';
import CommentPage from "../pages/CommentPage/CommentPage";
import { Provider } from "react-redux";
import store from "../redux/store";
import * as reactRedux from 'react-redux';
import IAppState from "../interfaces/IAppState";

describe('TESTING COMMENT PAGE', () => {

   const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')

   it('*** Check Comment Page ***', () => {

      beforeEach(() => {
         useSelectorMock.mockClear()
      })

      useSelectorMock.mockReturnValue({ data: [
         { 
            number: '21098', 
            state: 'closed',
            comments: {
               totalCount: 3,
               nodes: [{
                  bodyHTML: "<h1>Test Comment Page with Enzyme</h1>",
                  author: {
                     login: 'David López',
                  },
                  createdAt: "2021-03-25T15:03:36Z"
               }]
            }
         }
      ]})

      const routeComponentPropsMock = {
         // add jest.fn() as needed to any of the objects
         history: {} as any,
         location: {} as any,
         match: { params: { number: '21098'}} as any
      }
     
      const wrapper = render(
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
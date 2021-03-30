import React from "react";
import { mount, shallow, render } from 'enzyme';
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import { MemoryRouter } from 'react-router-dom';
import CommentPage from "../pages/CommentPage/CommentPage";
import { Provider } from "react-redux";
import store from "../redux/store";
import * as reactRedux from 'react-redux';
import IIssue from "../interfaces/IIssue";



const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

const routeComponentPropsMock = {
   history: {} as any,
   location: {} as any,
   match: { params: { number: '21098' } } as any
}

const IsuueMock:IIssue = {
   number: routeComponentPropsMock.match.params.number,
   title: "Jest/Enzyme comment page test",
   body: "Testing page with jest/enzyme",
   bodyText: "Testing page with jest/enzyme",
   bodyHTML: "<h1>Testing page with jest/enzyme</h1>",
   createdAt: "2021-03-22T15:03:36Z",
   url: "https://lopezblasco.com",
   author: {
      login: "David López"
   },
   state: 'closed',
   comments: {
      totalCount: 1,
      nodes: [{
         body: "Test comment Page with Enzyme",
         bodyHTML: "<h2>Test Comment Page with Enzyme</h2>",
         author: {
            login: 'David López',
         },
         createdAt: "2021-03-25T15:03:36Z",
         
      }],
      __typename: 'IssueCommentConnection'
   }
}

const renderWrapper = () => {
   return render(
      <Provider store={store}>
         <ThemeProvider theme={theme}>
            <MemoryRouter>
               <CommentPage  {...routeComponentPropsMock} />
            </MemoryRouter>
         </ThemeProvider>
      </Provider>
   )
}

describe('TESTING COMMENT PAGE', () => {
   it('- Render page with issue in Redux', () => {

      beforeEach(() => {
         useSelectorMock.mockClear();
      });

      useSelectorMock.mockReturnValue({ data: [IsuueMock], loading: false, error: false});
      const wrapper = renderWrapper();
      expect(wrapper.find('h1').first().text()).toEqual('Issue comments');
      expect(wrapper.find('h3').text()).toEqual('*** Comments ***');
      expect(wrapper.find('div').hasClass('comment_html')).toBeTruthy();

      expect(wrapper).toMatchSnapshot();
   });


   it('- Render page if is loading', () => {

      beforeEach(() => {
         useSelectorMock.mockClear();
      });

      useSelectorMock.mockReturnValue({ data: [], loading: true, error: false });
      const wrapper = renderWrapper();
      expect(wrapper.find('p').text()).toEqual('Loading');
      expect(wrapper).toMatchSnapshot();
   });
   
   
   
   it('- Render page if has an error', () => {
      
      beforeEach(() => {
         useSelectorMock.mockClear();
      });
      
      useSelectorMock.mockReturnValue({ data: [], loading: false, error: true });
      const wrapper = renderWrapper();
      expect(wrapper.find('p').text()).toEqual('Opps!! We have an error. Try again!!');
      expect(wrapper).toMatchSnapshot();
   });
})
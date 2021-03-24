// hello.test.js

import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";

import ButtomHome from "./ButtomHome";

// let container: any = null;
// beforeEach(() => {
//    // configurar un elemento del DOM como objetivo del renderizado
//    container = document.createElement("div");
//    document.body.appendChild(container);
// });

// afterEach(() => {
//    // limpieza al salir
//    unmountComponentAtNode(container);
//    container.remove();
//    container = null;
// });

// it("renderiza con o sin nombre", () => {
//    act(() => {
//       render(<ButtomHome />, container);
//    });
//    expect(container.textContent).toBe("Hey, stranger");

// });

import { shallow } from 'enzyme';

describe('Hello, Enzyme!', () => {
   it('renders', () => {
      const wrapper = shallow(<div>
         <h1>Hello, Enzyme!</h1>
      </div>)
      expect(wrapper.find('h1').html()).toMatch(/Hello, Enzyme/)
   })

   it('renders snapshots, too', () => {
      const wrapper = shallow(<div>
         <h1>Hello, Enzyme!</h1>
      </div>)
      expect(wrapper).toMatchSnapshot()
   })
})

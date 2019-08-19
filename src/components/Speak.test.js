import React from "react"; 
import renderer from "react-test-renderer"; 
import Speak from "./Speak.js"; 

describe('<Speak />', () => {
    // 2. write this test
    it('matches snapshot', () => {
      const tree = renderer.create(<Speak />); // generates a DOM tree
  
      // snapshots are a JSON representation of the DOM tree
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
import React from "react";
import Heading from "./Heading";
import { shallow } from 'enzyme';

describe("Heading tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Heading />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })
});

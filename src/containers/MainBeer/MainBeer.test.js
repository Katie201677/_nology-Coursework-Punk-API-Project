import React from "react";
import MainBeer from "./MainBeer";
import { shallow } from 'enzyme';

describe("MainBeer tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<MainBeer />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })
});

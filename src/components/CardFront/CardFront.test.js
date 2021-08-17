import React from "react";
import CardFront from "./CardFront";
import { shallow } from 'enzyme';
import { beers } from "../../data/beers";

describe("CardFront tests", () => {
  let component;
  let testBeer;

  beforeEach(() => {
    testBeer = beers[0];
    component = shallow(<CardFront beer={testBeer}/>);
  })

  it("should render", () => {
    expect(component).toBeTruthy();
  })

  it("should render an h1 element", () => {
    expect(component.find("h1")).toBeTruthy();
  })

  it("should render the abv in a p tag", () => {
    const abv = testBeer.abv;
    const para = component.find("div").childAt(2);
    expect(para.text()).toBe(`${abv}%`);
  })
});

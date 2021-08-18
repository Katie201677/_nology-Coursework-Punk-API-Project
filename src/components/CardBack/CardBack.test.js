import React from "react";
import CardBack from "./CardBack";
import { shallow } from 'enzyme';
import { beers } from "../../data/beers";

describe("CardBack tests", () => {
  let component;
  let testBeer;

  beforeEach(() => {
    testBeer = beers[0];
    component = shallow(<CardBack beer={testBeer}/>);
  })

  it("should render", () => {
    expect(component).toBeTruthy();
  })

  it("should render an h1 element", () => {
    expect(component.find("h1")).toBeTruthy();
  })

  it("should render the relevant quote tag with a description", () => {
    const description = testBeer.description;
    const para = component.find("blockquote");
    expect(para.text()).toContain(description);
  })
});

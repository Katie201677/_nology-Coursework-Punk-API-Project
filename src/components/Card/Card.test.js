import React from "react";
import Card from "./Card";
import CardFront from "../CardFront";
import CardBack from "../CardBack";
import { shallow } from 'enzyme';
import { beers } from "../../data/beers";

describe("Card tests", () => {
  let component;
  let testBeer;

  beforeEach(() => {
    testBeer = beers[0];
    component = shallow(<Card beer={testBeer}/>);
  })

  it("should render", () => {
    expect(component).toBeTruthy();
  })

  it("should render a CardFront component", () => {
    expect(component.find(CardFront).length).toEqual(1);
  });

  it("should render a CardBack component", () => {
    expect(component.find(CardBack).length).toEqual(1);
  });

  it("should not have the flipped class by default", () => {
    const element = component.find(".card");
    expect(element.hasClass('flipped')).toBe(false);
  })

  it("should toggle flipped class when component is clicked", () => {
    expect(component.find('.card').hasClass('flipped')).toBe(false);

    component.find('.card').simulate('click');
    expect(component.find('.card').hasClass('flipped')).toBe(true);

    component.find('.card').simulate('click');
    expect(component.find('.card').hasClass('flipped')).toBe(false);
  })
});

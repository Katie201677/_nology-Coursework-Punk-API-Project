import React from "react";
import CardList from "./CardList";
import Card from "../Card";
import { shallow } from 'enzyme';
import { beers } from "../../data/beers";

describe("CardList tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<CardList beers={beers}/>);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

  it("should render the correct number of Card components", () => {
    const beersLength = beers.length;
    expect(component.find(".card").length).toEqual(beersLength);
  })
});

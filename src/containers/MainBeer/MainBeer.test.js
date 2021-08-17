import React from "react";
import MainBeer from "./MainBeer";
import CardList from "../../components/CardList"
import { shallow } from 'enzyme';
import { beers } from "../../data/beers";

describe("MainBeer tests", () => {
  let component;
  let emptyBeers = [];

  beforeEach(() => {
    component = shallow(<MainBeer beers={beers}/>);
  });

  it('should render', () => {
    expect(component).toBeTruthy();
  });

  it("should render CardList when beers length is positive", () => {
    expect(component.find(".list")).toBeTruthy;
  });

  it("should not render Not Found when beers length is positive", () => {
    expect(component.find(".notFound").length).toEqual(0);
  })

  it("should render Not Found when there are no beers", () => {
    const emptyComponent = shallow(<MainBeer beers={emptyBeers} />);
    expect(emptyComponent.find(".notFound")).toBeTruthy;
  });
});

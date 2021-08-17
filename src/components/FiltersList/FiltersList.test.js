import React from "react";
import FiltersList from "./FiltersList";
import FilterItem from "../FilterItem";
import { shallow } from 'enzyme';

describe("FiltersList tests", () => {
  let component;
  let filters;

  beforeEach(() => {
    filters = [false, false, false]
    component = shallow(<FiltersList filters={filters} />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

  it("should render the correct number of filter items", () => {
    expect(component.find(FilterItem).length).toEqual(3);
  })
});

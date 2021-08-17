import React from "react";
import NavBar from "./NavBar";
import SearchBar from "../../components/SearchBar";
import FiltersList from "../../components/FiltersList";
import { shallow } from 'enzyme';

describe("NavBar tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<NavBar />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should render Search Bar", () => {
    expect(component.containsMatchingElement(<SearchBar />)).toEqual(true);
  });

  it("should render FiltersList", () => {
    expect(component.containsMatchingElement(<FiltersList />)).toEqual(true);
  });
});

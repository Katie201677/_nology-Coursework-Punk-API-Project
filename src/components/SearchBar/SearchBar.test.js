import React from "react";
import SearchBar from "./SearchBar";
import { shallow } from 'enzyme';

describe("SearchBar tests", () => {
  let component;
  let mockFn;
  let testPlaceholder;

  beforeEach(() => {
    mockFn = jest.fn();
    testPlaceholder = "placeholder";
    component = shallow(<SearchBar updateSearchTerm={mockFn} placeholder={testPlaceholder} />);
  });

  it('should render', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct placeholder', () => {
    expect(component.find("input").prop("placeholder")).toBe(testPlaceholder);
  });

  it("should call the parent function on input", () => {
    component.find("input").simulate("input", { target: { value: "search term" } })
    expect(mockFn).toHaveBeenCalled();
  });

  it("should call the parent function on input with user input", () => {
    component.find("input").simulate("input", { target: { value: "search term" } })
    expect(mockFn).toHaveBeenCalledWith("search term");
  })
});


import React from "react";
import NotFound from "./NotFound";
import { shallow } from 'enzyme';

describe("NotFound tests", () => {
  let component;
  let text;

  beforeEach(() => {
    text = "test text"
    component = shallow(<NotFound text={text}/>);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

  it("should display the relevant text", () => {
    expect(component.text()).toContain(text);
  })
});

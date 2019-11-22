import React from "react";
import { shallow } from "enzyme";
import TotalPrice from "../TotalPrice";

const props = {
  income: 1000,
  outcome: 2000
};

let wrapper;
describe("test TotalPrice component", () => {
  beforeEach(() => {
    wrapper = shallow(<TotalPrice {...props} />);
  });

  it("should render the component to match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("component should render correct income&outcome number", () => {
    expect(wrapper.find(".income span").text() * 1).toEqual(1000);
    expect(wrapper.find(".outcome span").text() * 1).toEqual(2000);
  });
});

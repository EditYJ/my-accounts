import React from "react";
import { mount } from "enzyme";
import ViewTab from "../ViewTab";
import { LIST_VIEW,CHART_VIEW } from "../../utility";

const props = {
  activTab: CHART_VIEW,
  onTabChange: jest.fn()
}

let wrapper
describe('ViewTab test',()=>{
  beforeEach(() => {
    wrapper = mount(<ViewTab {...props} />);
  });
  
  it("should render the component to match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('test onTabChange',()=>{
    const firstViewTab = wrapper.find(".nav-item").first()
    const lastViewTab = wrapper.find(".nav-item").last()

    firstViewTab.find('a').simulate('click')
    expect(props.onTabChange).toHaveBeenCalledWith(LIST_VIEW)

    lastViewTab.find('a').simulate('click')
    expect(props.onTabChange).toHaveBeenCalledWith(CHART_VIEW)

    expect(lastViewTab.find('a').hasClass('active')).toBeTruthy()
    expect(firstViewTab.find('a').hasClass('active')).toBeFalsy()

  })
})
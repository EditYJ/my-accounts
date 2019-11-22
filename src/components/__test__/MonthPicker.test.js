import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import MonthPicker from "../MonthPicker";

const props = {
  year: 2018,
  month: 8,
  onChange: jest.fn()
};

let wrapper;

describe("test MonthPicker component", () => {
  beforeEach(() => {
    wrapper = mount(<MonthPicker {...props} />);
  });

  it("should render the component to match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("测试默认状态-按钮上渲染年和月是否正确，下拉框是否显示", () => {
    const text = wrapper
      .find(".dropdown-toggle")
      .first()
      .text();
    expect(text).toEqual("2018年 08月");
    expect(wrapper.find(".dropdown-menu").length).toEqual(0);
    expect(wrapper.state("isOpen")).toEqual(false);
    expect(wrapper.state("selectedYear")).toEqual(props.year);
  });

  it("测试点击以后状态-下拉框是否显示,年和月的列表是否正确等", () => {
    wrapper.find(".dropdown-toggle").simulate("click");
    expect(wrapper.state("isOpen")).toEqual(true);
    expect(wrapper.find(".dropdown-menu").length).toEqual(1);
    expect(wrapper.find(".years-range .dropdown-item").length).toEqual(9);
    expect(wrapper.find(".months-range .dropdown-item").length).toEqual(12);
    expect(wrapper.find(".years-range .dropdown-item.active").text()).toEqual(
      "2018年"
    );
    expect(wrapper.find(".months-range .dropdown-item.active").text()).toEqual(
      "08月"
    );

    expect(
      wrapper
        .find(".years-range .dropdown-item")
        .first()
        .text()
    ).toEqual(`${props.year - 4}年`);

    expect(
      wrapper
        .find(".months-range .dropdown-item")
        .first()
        .text()
    ).toEqual(`01月`);
  });

  it("点击年和月份以后是否触发正确的回调", () => {
    wrapper.find(".dropdown-toggle").simulate("click");
    wrapper
      .find(".years-range .dropdown-item")
      .first()
      .simulate("click");
    expect(
      wrapper
        .find(".years-range .dropdown-item")
        .first()
        .hasClass("active")
    ).toEqual(true);
    expect(wrapper.state("selectedYear")).toEqual(2014);
    wrapper
      .find(".months-range .dropdown-item")
      .first()
      .simulate("click");
    expect(wrapper.state("isOpen")).toEqual(false);
    expect(props.onChange).toHaveBeenCalledWith(2014, 1);
  });

  it("点击document应该关闭展开的日历选择器", () => {
    let eventMap = {};
    document.addEventListener = jest.fn((event, cb) => {
      eventMap[event] = cb
    });
    const wrapper = mount(<MonthPicker {...props} />);
    wrapper.find(".dropdown-toggle").simulate("click");
    expect(wrapper.state("isOpen")).toEqual(true);
    expect(wrapper.find(".dropdown-menu").length).toEqual(1);

    eventMap.click({
      target: ReactDOM.findDOMNode(wrapper.instance())
    })
    expect(wrapper.state("isOpen")).toEqual(true);
    eventMap.click({
      target: document
    })
    expect(wrapper.state("isOpen")).toEqual(false);
  });
});

import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";

import CreateButton from "../../components/CreateButton";
import MonthPicker from "../../components/MonthPicker";
import PriceList from "../../components/PriceList";
import TotalPrice from "../../components/TotalPrice";
import ViewTab from "../../components/ViewTab";
import Home from "../Home";
import {
  LIST_VIEW,
  parseToYearAndMounth,
  CHART_VIEW,
  addZero,
  TYPE_INCOME,
  TYPE_OUTCOME
} from "../../utility";

let wrapper;

describe("test Home container component", () => {
  beforeEach(() => {
    wrapper = mount(<Home />);
  });

  it("测试默认首页状态", () => {
    const currentYear = parseToYearAndMounth('2019/06/11')
    expect(wrapper.find(PriceList).length).toEqual(1)
    expect(wrapper.find(PriceList).props().items.length).toEqual(2)
    expect(wrapper.find(ViewTab).props().activTab).toEqual(LIST_VIEW)
    expect(wrapper.find(MonthPicker).props().year).toEqual(currentYear.year)
    expect(wrapper.find(MonthPicker).props().month).toEqual(currentYear.month)
  });
});

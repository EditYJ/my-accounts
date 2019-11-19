import React from "react";
import { shallow } from "enzyme";
import PriceList from "../PriceList";
import { items, categories } from "../../containers/Home";

const itemsWithCategory = items.map(item => {
  item.category = categories[item.cid];
  return item;
});

const props = {
  items: itemsWithCategory,
  onModifyItem: jest.fn(),
  onDeleteItem: jest.fn()
};

let wrapper;
describe("test PriceList component", () => {
  beforeEach(() => {
    wrapper = shallow(<PriceList {...props} />);
  });

  it("should render the component to match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correct price items length", () => {
    expect(wrapper.find(".list-group-item").length).toEqual(
      itemsWithCategory.length
    );
  });

  it("should render correct icon and price for each item", () => {
    const iconList = wrapper.find(".show-category");
    expect(iconList.length).toEqual(3);
    expect(iconList.map(item => item.props().icon)).toEqual(
      itemsWithCategory.map(item => item.category.iconName)
    );
    expect(wrapper.find(".pl-title").map(item => item.text())).toEqual(
      itemsWithCategory.map(item => item.title)
    );
    expect(wrapper.find(".pl-date").map(item => item.text())).toEqual(
      itemsWithCategory.map(item => item.date)
    );
    expect(wrapper.find(".pl-price").map(item => item.text())).toEqual(
      itemsWithCategory.map(
        item => `${item.category.type === "income" ? "+" : "-"}${item.price}元`
      )
    );
  });

  it("should trigger the function callbacks", () => {
    const firstItem = wrapper.find('.list-group-item').first()
    firstItem.find('a').first().simulate('click')
    expect(props.onModifyItem).toHaveBeenCalledWith(itemsWithCategory[0])
    firstItem.find('a').last().simulate('click')
    expect(props.onDeleteItem).toHaveBeenCalledWith(itemsWithCategory[0])
  });
});

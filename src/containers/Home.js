import React from "react";

import CreateButton from "../components/CreateButton";
import MonthPicker from "../components/MonthPicker";
import PriceList from "../components/PriceList";
import TotalPrice from "../components/TotalPrice";
import ViewTab from "../components/ViewTab";
import {
  LIST_VIEW,
  parseToYearAndMounth,
  CHART_VIEW,
  addZero
} from "../utility";

export const categories = {
  1: {
    id: 1,
    name: "旅行",
    type: "outcome",
    iconName: "ios-plane"
  },
  2: {
    id: 2,
    name: "食物",
    type: "outcome",
    iconName: "ios-pizza"
  },
  3: {
    id: 3,
    name: "理财",
    type: "income",
    iconName: "logo-yen"
  }
};
export const items = [
  {
    id: 1,
    title: "去日本旅游",
    price: 200,
    date: "2019-06-24",
    cid: 1
  },
  {
    id: 2,
    title: "买了一些吃的",
    price: 150,
    date: "2019-06-11",
    cid: 2
  },
  {
    id: 3,
    title: "理财收入",
    price: 200,
    date: "2019-09-10",
    cid: 3
  }
];
const newItem = {
  id: 4,
  title: "新添加的项目",
  price: 300,
  date: "2018-10-10",
  cid: 1
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items,
      currentDate: parseToYearAndMounth('2019/06/11'),
      tabView: LIST_VIEW
    };
  }

  changeView = view => {
    this.setState({
      tabView: view
    });
  };

  changeDate = (year, month) => {
    this.setState({
      currentDate: {
        year,
        month
      }
    });
  };

  modifyItem = modifiedItem => {
    const modifiedItems = this.state.items.map(item => {
      if (item.id === modifiedItem.id) {
        return { ...item, title: "修改后的标题" };
      } else {
        return item;
      }
    });
    this.setState({
      items: modifiedItems
    });
  };

  createItem = () => {
    this.setState({
      items: [newItem, ...this.state.items]
    });
  };

  deleteItem = deletedItem => {
    const filteredItems = this.state.items.filter(
      item => item.id !== deletedItem.id
    );
    this.setState({
      items: filteredItems
    });
  };

  render() {
    const { items, currentDate, tabView } = this.state;
    const itemsWithCategory = items
      .map(item => {
        item.category = categories[item.cid];
        return item;
      })
      .filter(item => {
        return (
          item.date.includes(
            `${this.state.currentDate.year}-${addZero(
              this.state.currentDate.month
            )}`
          )
        );
      });
    return (
      <React.Fragment>
        <header className="App-header">
          <h2 style={{ textAlign: "center" }}>记账本</h2>
          <div className="row">
            <div className="col">
              <MonthPicker
                year={currentDate.year}
                month={currentDate.month}
                onChange={this.changeDate}
              />
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <TotalPrice income={200} outcome={520} />
            </div>
          </div>
        </header>
        <div className="content-area py-2 px-2">
          <CreateButton onClick={this.createItem} />
          <ViewTab activTab={tabView} onTabChange={this.changeView} />
          {tabView === LIST_VIEW && (
            <PriceList
              items={itemsWithCategory}
              onModifyItem={this.modifyItem}
              onDeleteItem={this.deleteItem}
            />
          )}
          {tabView === CHART_VIEW && (
            <div>
              <h1>这里是图表</h1>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;

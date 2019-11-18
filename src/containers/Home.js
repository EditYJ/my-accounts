import React from 'react';

import CreateButton from '../components/CreateButton';
import MonthPicker from '../components/MonthPicker';
import PriceList from '../components/PriceList';
import TotalPrice from '../components/TotalPrice';
import ViewTab from '../components/ViewTab';
import { LIST_VIEW } from '../utility';

const items = [
  {
    id: 1,
    title: "去日本旅游",
    price: 200,
    date: "2019-06-24",
    category: {
      id: 1,
      name: "旅行",
      type: "outcome",
      iconName: "ios-plane"
    }
  },
  {
    id: 2,
    title: "买了一些吃的",
    price: 150,
    date: "2019-07-11",
    category: {
      id: 2,
      name: "食物",
      type: "outcome",
      iconName: "ios-pizza"
    }
  },
  {
    id: 3,
    title: "理财收入",
    price: 200,
    date: "2019-09-10",
    category: {
      id: 3,
      name: "理财",
      type: "income",
      iconName: "logo-yen"
    }
  }
];

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <h2 style={{textAlign: 'center'}}>记账本</h2>
          <div className="row">
            <div className="col">
              <MonthPicker year={2018} month={6} />
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <TotalPrice income={200} outcome={520} />
            </div>
          </div>
        </header>
        <div className="content-area py-2 px-2">
          <CreateButton />
          <ViewTab activTab={LIST_VIEW} />
          <PriceList items={items} />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

import PriceList from "./components/PriceList";

const items = [
  {
    id: 1,
    title: "去旅游啦",
    price: 200,
    date: "2019-06-01",
    category: {
      id: 1,
      name: "旅行",
      type: "outcome"
    }
  },
  {
    id: 2,
    title: "去探险啦",
    price: 800,
    date: "2019-06-01",
    category: {
      id: 1,
      name: "旅行",
      type: "income"
    }
  }
];

function App() {
  return (
    <div className="App">
      <PriceList
        items={items}
        onModifyItem={item => {
          alert(item.id);
        }}
        onDeleteItem={item => {
          alert(item.id);
        }}
      />
    </div>
  );
}

export default App;

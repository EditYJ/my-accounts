/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";
import React from "react";
import Ionicon from "react-ionicons";
import { TYPE_INCOME } from "../utility";

const PriceList = ({ items, onModifyItem, onDeleteItem }) => {
  return (
    <ul className="list-group list-grop-flush">
      {items.map(item => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={item.id}
        >
          <span className="col-1">
            <Ionicon
              className="rounded-circle show-category"
              fontSize="30px"
              style={{ backgroundColor: "#007bff", padding: "5px" }}
              color={"#fff"}
              icon={item.category.iconName}
            />
          </span>
          <span className="col-5 pl-title" style={{ textAlign: "center" }}>
            {item.title}
          </span>
          <span className="col-2 font-weight-bold pl-price">
            {item.category.type === TYPE_INCOME ? "+" : "-"}
            {item.price}元
          </span>
          <span className="col-2 pl-date">{item.date}</span>
          <a
            href="#"
            className="col-1"
            onClick={() => {
              onModifyItem(item);
            }}
          >
            <Ionicon
              className="rounded-circle"
              fontSize="30px"
              style={{ backgroundColor: "#28a745", padding: "5px" }}
              color={"#fff"}
              icon="ios-create-outline"
            />
          </a>
          <a
            href="#"
            className="col-1"
            onClick={() => {
              onDeleteItem(item);
            }}
          >
            <Ionicon
              className="rounded-circle"
              fontSize="30px"
              style={{ backgroundColor: "#dc3545", padding: "5px" }}
              color={"#fff"}
              icon="ios-close"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

PriceList.propTypes = {
  items: PropTypes.array.isRequired,
  onModifyItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired
};
PriceList.defaultProps = {
  onModifyItem: () => {},
  onDeleteItem: () => {}
};

export default PriceList;

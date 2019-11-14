/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";
import { LIST_VIEW, CHART_VIEW } from "../utility";

const generateLinkClass = (current, view) => {
  return current === view ? "nav-link active" : "nav-link";
};

const ViewTab = ({ activTab, onTabChange }) => {
  return (
    <ul className="nav nav-tabs nav-fill my-2">
      <li className="nav-item">
        <a
          className={generateLinkClass(activTab, LIST_VIEW)}
          href="#"
          onClick={event => {
            event.preventDefault();
            onTabChange(LIST_VIEW);
          }}
        >
          <Ionicon
            className="mr-2"
            fontSize="25px"
            color={"#007bff"}
            icon="ios-paper"
          />
          列表模式
        </a>
      </li>
      <li className="nav-item">
        <a
          className={generateLinkClass(activTab, CHART_VIEW)}
          href="#"
          onClick={event => {
            event.preventDefault();
            onTabChange(CHART_VIEW);
          }}
        >
          <Ionicon
            className="mr-2"
            fontSize="25px"
            color={"#007bff"}
            icon="ios-pie"
          />
          图表模式
        </a>
      </li>
    </ul>
  );
};

ViewTab.propTypes = {
  activTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired
};

ViewTab.defaultProps = {
  onTabChange: view => {
    console.log(view);
  }
};

export default ViewTab;

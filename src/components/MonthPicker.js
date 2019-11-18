/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";
import React from "react";

import { addZero, range, viewActive } from "../utility";

class MonthPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedYear: this.props.year,
      // selectedMonth: this.props.month
    };
  }

  // 切换下拉显隐
  toggleDropdown = event => {
    event.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  toggleYearLis = (event, yearNumber) => {
    event.preventDefault();
    this.setState({
      selectedYear: yearNumber
    });
  };

  toggleMonthLis = (event, isAll, monthNumber) => {
    event.preventDefault();
    this.setState({
      isOpen: false
      // selectedMonth: monthNumber
    });
    this.props.onChange(isAll, this.state.selectedYear, monthNumber);
  };

  render() {
    const { year, month } = this.props;
    const { isOpen } = this.state;
    const monthRange = range(12, 1);
    const yearRange = range(9, -4).map(number => number + year);

    return (
      <div className="dropdown month-picker-component">
        <h6>选择月份</h6>
        <button
          className="btn btn-secondary dropdown-toggle"
          onClick={this.toggleDropdown}
        >
          {month ? `${year}年 ${addZero(month)}月` : "全部"}
        </button>
        {isOpen && (
          <div className="dropdown-menu" style={{ display: "block" }}>
            <div
              className="row"
              style={{ display: "flex", "justify-content": "center" }}
            >
              <a
                className="query-all"
                href="#"
                onClick={event => this.toggleMonthLis(event, true)}
              >
                查询全部
              </a>
            </div>
            <div className="row">
              <div className="col border-right">
                {yearRange.map((yearNumber, index) => {
                  return (
                    <a
                      key={index}
                      href="#"
                      className={viewActive(
                        yearNumber,
                        this.state.selectedYear
                      )}
                      onClick={event => this.toggleYearLis(event, yearNumber)}
                    >
                      {yearNumber}年
                    </a>
                  );
                })}
              </div>
              <div className="col">
                {monthRange.map((monthNumber, index) => {
                  return (
                    <a
                      key={index}
                      href="#"
                      className={viewActive(monthNumber, month)}
                      onClick={event =>
                        this.toggleMonthLis(event, false, monthNumber)
                      }
                    >
                      {addZero(monthNumber)}月
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

MonthPicker.protoType = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

MonthPicker.defaultProps = {
  onChange: () => {}
};

export default MonthPicker;

import React from "react";
import PropTypes from "prop-types";

const TotalPrice = ({ income, outcome }) => {
  return (
    <div className="row">
      <h5 className="col">
        收入: <span>{income}</span>
      </h5>
      <h5 className="col">
        支出: <span>{outcome}</span>
      </h5>
    </div>
  );
};

TotalPrice.protoType = {
  income: PropTypes.number.isRequired,
  outcome: PropTypes.number.isRequired
};

TotalPrice.defaultProps = {
  income: 0,
  outcome: 0
};

export default TotalPrice;

import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";

const CreateButton = ({ onClick }) => (
  <button
    className="btn btn-primary btn-block d-flex justify-content-center align-items-center"
    onClick={event => onClick(event)}
  >
    <Ionicon
      className="mr-2"
      fontSize="25px"
      color={"#fff"}
      icon="ios-add-circle"
    />
    创建一条新的记账记录
  </button>
);

CreateButton.protoType = {
  onClick: PropTypes.func.isRequired
};

CreateButton.defaultProps = {
  onClick: () => {}
};

export default CreateButton;

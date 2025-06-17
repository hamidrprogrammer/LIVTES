/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import PropTypes from "prop-types";
import React from "react";
import "./buy-option-design.css";
import { JSX } from "react/jsx-runtime";

interface Props {
  property1: "default";
  className: any;
  text: string;
  text1: string;
  hasDiv: boolean;
}

export const BuyOptionDesign = ({
  className,
  text = "One pack",
  text1 = "LVQ+ 30 Tablets",
  hasDiv = true,
}: Props): JSX.Element => {
  return (
    <div className={`buy-option-design ${className}`}>
      <div className="text-container">
        <div className="one-pack">{text}</div>
        <div className="LVQ-tablets">{text1}</div>
      </div>
      {hasDiv && <div className="text-wrapper">€xx.xx</div>}
    </div>
  );
};

BuyOptionDesign.propTypes = {
  property1: PropTypes.oneOf(["default"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  hasDiv: PropTypes.bool,
};
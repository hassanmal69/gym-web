import React from "react";
import arrow from "../../assets/icons/arrow.png";
import "./HeadingContainer.css";
const HeadingContainer = (props) => {
  const { title, subtitle1, span, subtitle2 } = props;
  return (
    <section className="heading-container">
      <div className="heading-container-2">
        <div className="main-sub-heading">
          <img src={arrow} alt="arrow left" className="rotate-left arrow" />
          <h2 className="sub-heading">
            {title}
            <span></span>
          </h2>
          <img src={arrow} alt="arrow right" className="arrow rotate-right" />
        </div>
        <div className="bg-h1">
          <h1>
            {subtitle1}
            <span> {span}</span>
            {subtitle2}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeadingContainer;

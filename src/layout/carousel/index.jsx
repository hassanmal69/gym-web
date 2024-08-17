import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./carousel.css";
import PropTypes from "prop-types";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
export const DisabledCard = (props) => {
  const disabledStyle = props.styleName;
  console.log(disabledStyle);
  return (
    <>
      <Card className={`${disabledStyle} disabled`}>
        <CardContent className="disabled-card-content">
          <Typography variant="h4" className="disabled-messgage">
            This section is disabled.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
const Carousel = (props) => {
  const imgs = props.content;

  const [items, setItems] = useState(1); // Initial value of items

  // Update the number of items based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setItems(1);
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1200) {
        setItems(3);
      } else if (window.innerWidth >= 1200) {
        const Item = imgs.length / 2;
        setItems(Item);
      }
    };
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially
    handleResize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [imgs.length]);
  const disabled = props.disabled;
  var options = {
    items: items,
    nav: true,
    rewind: true,
    autoplay: true,
    dots: false,
    loop: true
  };
  // if (disabled) {
  //   options = {
  //     mouseDrag: false,
  //     touchDrag: false,
  //     pullDrag: false,
  //     freeDrag: false,
  //     nav: false
  //   };
  // }
  return (
    <div className="carousel-container" disabled>
      <OwlCarousel className={"owl-theme"} {...options}>
        {imgs.map((image) => (
          <div className="item" key={image.id}>
            <img src={image.picture} alt={image.alt} className="image" />
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

Carousel.propTypes = {
  disabled: PropTypes.bool
};

export default Carousel;

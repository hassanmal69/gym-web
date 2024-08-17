import React from "react";
import PropTypes from "prop-types";
import "./home.css";
import HeadingContainer from "../../components/HeadingContainer/index";
import { CarouselImages } from "../../components/ImgData";
import { PaymentImgs } from "../../components/ImgData";
import MemberShipPlan from "../../components/MemberShip";
import Carousel from "../../layout/carousel";
import DetailsCard from "../../components/AppWorking";
import Trainer from "../../assets/images/trainer.png";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const Navigate = useNavigate();
  const Payments = PaymentImgs;
  return (
    <main>
      <section className="hero">
        <div className="hero-left-container">
          <h1 className="hero-content-heading">
            ONE MEMBERSHIP AND ACCESS <span>Fitness trainers</span> ACROSS
            PAKISTAN
          </h1>
          <p>Pakistan's First Fitness Network.</p>
          <p>It will access to the best Fitness trainers accross pakistan.</p>
        </div>
        <div className="hero-right-container">
          <div className="images">
            <div className="img1 img"></div>
            <div className="img2 img"></div>
            <div className="img3 img"></div>
          </div>
        </div>
      </section>
      <section>
        <HeadingContainer
          title={"Health Tech Sport"}
          subtitle1={` Start your`}
          span={` fitness `}
          subtitle2={`journy`}
        />
        <Carousel content={CarouselImages} />
      </section>
      <section>
        <HeadingContainer
          title={"BEST FITNESS CLUBS"}
          subtitle1={`SOME OF OUR`}
          span={` FITNESS PARTNERS `}
          subtitle2={`ACROSS PAKISTAN`}
        />
        <Typography variant="h4" color="#b42426 " className="disabled-title">
          This section is disabled
        </Typography>
        {/* <DisabledCard styleName={"partner-disabled"} />  */}
        {/* <Carousel content={CarouselImages} disabled={true} /> */}
      </section>
      <section>
        <HeadingContainer
          title={"PAYMENT"}
          subtitle1={``}
          span={` Payments `}
          subtitle2={`We Accept`}
        />
        <div className="payment-container">
          {/* <DisabledCard styleName={"payment-disabled"} /> */}
          {Payments.map((img) => (
            <>
              <img
                src={img.picture}
                alt={img.alt}
                className="p-img"
                key={img.id}
              />
            </>
          ))}
        </div>
      </section>
      <section>
        <HeadingContainer
          title={"HOW IT WORKS"}
          subtitle1={`HOW IT`}
          span={` WORKS `}
          subtitle2={""}
        />
        <DetailsCard />
      </section>
      <section>
        <HeadingContainer
          title={"CHECK OUT"}
          subtitle1={`OUR `}
          span={"MEMBERSHIP"}
          subtitle2={" PLAN"}
        />
        <MemberShipPlan />
      </section>
      <section>
        <HeadingContainer
          title={"ARE YOU A FITNESS TRAINER"}
          subtitle1={`ARE YOU A `}
          span={"FITNESS"}
          subtitle2={"TRANIER"}
        />
        <div className="trainer-container">
          <div className="trainer-img">
            <img src={Trainer} alt="Trainer" className="coach" />
          </div>
          <div className="trainer-data">
            <Typography variant="h5" color="#747474 " className="trainer-title">
              Are you a
            </Typography>
            <Typography className="trainer-subtitle">
              <span>Are you a Fitenss trainer?</span> Want to Partner with us?
            </Typography>
            <div className="divider-line"></div>
            <Typography
              variant="body1"
              color="#747474"
              style={{ fontWeight: 400 }}
            >
              Expand your business and add a second revenue <br /> stream with
              the ULTIMATE PARTNERSHIP.
            </Typography>
            <a href="#" className="link-text">
              Our partnership is absolutely free
            </a>
            <Button
              variant="contained"
              className="trainer-btn"
              onClick={() => {
                Navigate("/fitnesspartner");
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

Home.propTypes = {
  name: PropTypes.string
};
Home.defaultProps = {
  name: "This is Home Page"
};

export default Home;

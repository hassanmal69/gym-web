import React from "react";
import PropTypes from "prop-types";
import "./fitnesspartner.css";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material";
import HeadingContainer from "../../components/HeadingContainer";

import BenefitsCard from "../../components/BenefitsCard";
import tagNum1 from "../../assets/logos/01.svg";
import tagNum2 from "../../assets/logos/02.svg";
import tagNum3 from "../../assets/logos/03.svg";
import Free from "../../assets/logos/free-img.png";
import Customers from "../../assets/logos/customer.svg";
import MoreIncome from "../../assets/logos/more-income.svg";

const FitnessPartner = (props) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const PartnerImgs = [
    {
      id: 1,
      tag: Free,
      tagNum: tagNum1,
      alt: "Perks Tags",
      title: "It's Free",
      subtitle1: "Joining and staying to be our partner will cost you nothing.",
      span: " EVER!",
      subtitle2: ""
    },
    {
      id: 2,
      tag: Customers,
      tagNum: tagNum2,
      alt: "Perks Tags",
      title: "NEW CUSTOMERS",
      subtitle1: "We target people outside of your",
      span: "your office ",
      subtitle2: "and bring in more fitness trainers to your workplace ."
    },
    {
      id: 2,
      tag: MoreIncome,
      tagNum: tagNum3,
      alt: "Perks Tags",
      title: "MORE INCOME",
      subtitle1: "Create a",
      span: " new revenue stream",
      subtitle2: "with every member that visits your fitness center."
    }
  ];
  const Steps = [
    {
      id: 1,
      content: "REGISTER TO GET STARTED"
    },
    {
      id: 2,
      content:
        "A MEMBER OF OUR TEAM WILL CONTACT YOU AND ASSIST YOU IN THE PARTNERSHIP PROCESS"
    },
    {
      id: 3,
      content:
        "YOUR GYM WILL BE ADDED ONTO OUR PLATFORM. WE WILL ALSO UPDATE OUR USERS THAT YOU ARE NOW A GYM PASSPORT PARTNER"
    },
    {
      id: 4,
      content:
        "ALLOW GYM PASSPORT MEMBERS TO VISIT YOUR FACILITY DURING STAFFED HOURS. VALIDATE THEIR CHECK-IN AND LET THEM ENJOY THEIR WORKOUT!"
    },
    {
      id: 5,
      content:
        "RECEIVE MORE INCOME WITH EVERY GYM PASSPORT MEMBER THAT VISITS.  "
    }
  ];
  return (
    <>
      <div className="page-hero fitness">
        <Typography variant="h4" className="page-hero-title ">
          EXPAND YOUR BUSINESS WITH THE <span>ULTIMATE PARTNERSHIP!</span>
        </Typography>
        <Typography variant="h4" className="page-hero-title ">
          OUR Health Tech Sport IS <span>PAKISTAN WIDE</span> WITH SOME OF THE
          TOP GYMS ON OUR ROSTER!
        </Typography>
        <Button variant="contained" className="page-btn">
          Register Now
        </Button>
      </div>
      <section>
        <HeadingContainer
          title={"PARTERNING"}
          subtitle1={`BENEFITS OF`}
          span={` BENEFITS OF `}
          subtitle2={`WITH US`}
        />
        <div className="fitnesscard-section">
          <BenefitsCard Benefits={PartnerImgs} />
        </div>
      </section>
      <section>
        <HeadingContainer
          title={"STEPS"}
          subtitle1={`5 SIMPLE `}
          span={`STEPS`}
          subtitle2={``}
        />
        <div className="before-line"></div>
        <div className="partner-steps">
          {Steps.map((step) => (
            <Card className="step-card" key={step.id}>
              <CardContent>
                <Typography variant="body1" className="step-content">
                  {step.content}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
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
          title={"Register"}
          subtitle1={`Register your`}
          span={`interest `}
          subtitle2={``}
        />
        <form className="registrationForm-section">
          <div className="Reg-input-section">
            <TextField
              id=""
              className="registration-fields"
              variant="outlined"
              type="text"
              placeholder="First Name"
            />
            <TextField
              id=""
              className="registration-fields"
              variant="outlined"
              type="text"
              placeholder="Last Name"
            />
            <TextField
              id=""
              className="registration-fields"
              variant="outlined"
              type="text"
              placeholder="Name of your fitness facility"
            />
            <TextField
              id=""
              className="registration-fields"
              variant="outlined"
              type="email"
              placeholder="email"
            />
            <TextField
              id=""
              className="registration-fields"
              variant="outlined"
              type="number"
              placeholder="Phone Number"
            />
            <TextField
              id=""
              className="registration-fields"
              variant="outlined"
              type="number"
              placeholder="Your fitness registration fee (Rs)"
            />
            <TextField
              id=""
              className="registration-fields"
              variant="outlined"
              type="number"
              placeholder="Your trainer's monthly fee (Rs)"
            />
            <TextField
              id=""
              className="registration-fields"
              variant="outlined"
              type="text"
              disabled
              placeholder="Pakistan"
            />
            {/* <FormControl className="select-field"> */}
            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              placeholder="State"
              onChange={handleChange}
              className="registration-fields"
            >
              <MenuItem value={10}>PUNJAB</MenuItem>
              <MenuItem value={20}>SINDH</MenuItem>
              <MenuItem value={30}>BLOCHISTAN</MenuItem>
              <MenuItem value={30}>KHAIBER PAKHTUNKHWA</MenuItem>
            </Select>
            {/* </FormControl> */}
            <TextField
              id=""
              className="registration-fields"
              variant="outlined"
              type="text"
              placeholder="Address"
            />
            <Button
              type="submit"
              variant="contained"
              className="fitness-submit-btn"
            >
              Register Now
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

FitnessPartner.propTypes = {
  name: PropTypes.string
};
FitnessPartner.defaultProps = {
  name: "This is FitnessPartner Page"
};

export default FitnessPartner;

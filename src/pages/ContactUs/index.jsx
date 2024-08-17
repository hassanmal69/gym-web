import React from "react";
import PropTypes from "prop-types";
import { Button, Typography } from "@mui/material";
import "./contactus.css";
import { TextField } from "@mui/material";
import ContactUs from "../../assets/images/contactUs.jpg";
import HeadingContainer from "../../components/HeadingContainer";
const FormData = [
  {
    id: 1,
    placeHolder: "Enter Name",
    type: "text",
    row: 1
  },
  {
    id: 2,
    placeHolder: "Email Address",
    type: "email",
    row: 1
  },
  {
    id: 3,
    placeHolder: "Contact Number",
    type: "number",
    row: 1
  },
  {
    id: 4,
    placeHolder: "Message",
    type: "text",
    row: 3
  }
];
const ContactUS = (props) => {
  return (
    <>
      <div className="page-hero">
        <Typography variant="h4" className="page-hero-title">
          Contact Us
        </Typography>
      </div>
      <section className="contact-section">
        <form className="contactform-section">
          <div className="form-heading">
            <Typography variant="h4" className="form-heading-typography">
              Contact US
            </Typography>
          </div>
          <div className="input-section">
            {FormData.map((data) => (
              <TextField
                id=""
                key={data.id}
                multiline
                rows={data.row}
                className="contact-fields"
                variant="outlined"
                placeholder={data.placeHolder}
                type={data.type}
              />
            ))}
            <Button
              type="submit"
              variant="contained"
              className="contact-submit-btn"
            >
              Send Query
            </Button>
          </div>
        </form>
        <div className="info-section">
          <img src={ContactUs} alt="ContactUs" className="contactusimg" />
          <div className="contactInfo">
            <div className="contactInfo-heading">
              <Typography variant="h5" className="contactInfo-typography">
                Contact US
              </Typography>
            </div>
            <div className="contact-info-body">
              <Typography
                variant="body1"
                color="#747474"
                className="contactbody-typography"
              >
                Phone: 090978601
              </Typography>
              <Typography
                variant="body1"
                color="#747474"
                className="contactbody-typography"
              >
                Email Address: Telephone@gmail.com
              </Typography>
            </div>
          </div>
        </div>
      </section>
      <section>
        <HeadingContainer
          title={"BEST FITNESS CLUBS"}
          subtitle1={`SOME OF OUR`}
          span={` FITNESS PARTNERS `}
          subtitle2={`ACROSS PAKISTAN`}
        />
        <Typography
          variant="h5"
          color="#b42426 "
          className="disabled-title-contactUs"
        >
          This section is disabled
        </Typography>
        {/* <DisabledCard styleName={"partner-disabled"} />  */}
        {/* <Carousel content={CarouselImages} disabled={true} /> */}
      </section>
    </>
  );
};

ContactUS.propTypes = {
  name: PropTypes.string
};
ContactUS.defaultProps = {
  name: "This is ContactUS Page"
};

export default ContactUS;

import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography
} from "@mui/material";
import "./corporatepartner.css";
import HeadingContainer from "../../components/HeadingContainer";
import { HelpCard } from "../../components/ImgData";
import BenefitsCard from "../../components/BenefitsCard";
import Wellness from "../../assets/logos/wellness.svg";
import Produvtivity from "../../assets/logos/productivity.svg";
import Unique from "../../assets/logos/unique.png";
import tagNum1 from "../../assets/logos/01.svg";
import tagNum2 from "../../assets/logos/02.svg";
import tagNum3 from "../../assets/logos/03.svg";
import DataTable from "../../components/Table";
const CorporatePartner = (props) => {
  const BenfitsData = [
    {
      id: 1,
      tag: Wellness,
      tagNum: tagNum1,
      alt: "Perks Tags",
      title: "WELLNESS BENEFITS",
      subtitle1: "Show employees you care about their  ",
      span: " health and fitness",
      subtitle2: "by offering employees wellness benefits."
    },
    {
      id: 2,
      tag: Produvtivity,
      tagNum: tagNum2,
      alt: "Perks Tags",
      title: "PRODUCTIVITY",
      subtitle1: "Increase employee mental ",
      span: "health and productivity",
      subtitle2: " of work by up to 30% with a company wide Fitness membership."
    },
    {
      id: 2,
      tag: Unique,
      tagNum: tagNum3,
      alt: "Perks Tags",
      title: "UNIQUE BENEFITS",
      subtitle1: "Reduce your staff turnover by up to 20% by offering ",
      span: " unique benefits.",
      subtitle2: ""
    }
  ];
  const CompanyData = [
    {
      id: 1,
      placeholder: "Name",
      type: "text"
    },
    {
      id: 2,
      placeholder: "Company",
      type: "text"
    },
    {
      id: 3,
      placeholder: "Number of Employees",
      type: "number"
    },
    {
      id: 4,
      placeholder: "email",
      type: "email"
    },
    {
      id: 5,
      placeholder: "Phone Number",
      type: "number"
    },
    {
      id: 6,
      placeholder: "Address",
      type: "text"
    }
  ];
  return (
    <>
      <div className="page-hero corporate-partner">
        <Typography variant="h4" className="page-hero-title">
          INTRODUCE <span>HEALTH</span> AND WELLBEING INTO YOUR
          <span> COMPANY</span>
        </Typography>
        <Button variant="contained" className="page-btn">
          Get In Touch
        </Button>
      </div>

      <section>
        <HeadingContainer
          title={"Health Tech Sport"}
          subtitle1={`HOW CAN `}
          span={` Health Tech Sport `}
          subtitle2={`HELP YOUR COMPANY?`}
        />
        <div className="help-container">
          {HelpCard.map((data) => (
            <Card className="help-card" key={data.id}>
              <CardMedia
                component="img"
                height="110"
                className="help-card-img"
                image={data.img}
                alt="Paella dish"
              />
              <CardContent>
                <Typography className="card-typography">
                  {data.content1} <span>{data.span}</span> {data.content2}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section>
        <HeadingContainer
          title={"Benefits"}
          subtitle1={``}
          span={`Benefits`}
          subtitle2={`to your company`}
        />
        <BenefitsCard Benefits={BenfitsData} />
      </section>
      <section>
        <HeadingContainer
          title={"Benefits"}
          subtitle1={``}
          span={`Benefits`}
          subtitle2={`to your company`}
        />
        <DataTable />
      </section>
      <section>
        <HeadingContainer
          title={"Best fitness Trainers"}
          subtitle1={"Our"}
          span={"Corporate Partners "}
          subtitle2={"Across Pakistan"}
        />
        <Typography variant="h4" color="#b42426 " className="disabled-title">
          This section is disabled
        </Typography>
        {/* <DisabledCard styleName={"partner-disabled"} />  */}
        {/* <Carousel content={CarouselImages} disabled={true} /> */}
      </section>
      <section>
        <HeadingContainer
          title={"Qoute"}
          subtitle1={"Get A"}
          span={"Free"}
          subtitle2={"Qoute"}
        />

        <form className="qoute-form">
          <div className="input-qoute-container">
            {CompanyData.map((data) => (
              <TextField
                placeholder={data.placeholder}
                type={data.type}
                className="qoute-field"
                key={data.id}
              />
            ))}
            <Button variant="contained" className="qoute-btn">Register</Button>
          </div>
        </form>
      </section>
    </>
  );
};

CorporatePartner.propTypes = {
  name: PropTypes.string
};
CorporatePartner.defaultProps = {
  name: "This is CorporatePartner Page"
};

export default CorporatePartner;

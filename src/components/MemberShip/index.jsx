import React from "react";
import "./membership.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Tick from "../../assets/icons/done-icon.png";
import { MembershipPlanData } from "../ImgData";
const MemberShipPlan = (props) => {
  return (
    <div className="membercard-container">
      {MembershipPlanData.map((data) => (
        <Card sx={{ maxWidth: 345 }} className="member-card">
          <CardMedia
            sx={{ height: 250 }}
            image={data.picture}
            title="Image1"
            className="member-image"
          />
          <CardContent>
            <Typography
              gutterBottom
              className="member-typography member-title"
              variant="h4"
              component="div"
              color="#333333"
            >
              {data.title}
            </Typography>
            <div className="list">
              <li className="li">
                <img src={Tick} className="list-icon" alt="done" /> Under
                Planning
              </li>
              <li className="li">
                <img src={Tick} className="list-icon" alt="done" /> Under
                Planning
              </li>
              <li className="li">
                <img src={Tick} className="list-icon" alt="done" /> Under
                Planning
              </li>
            </div>
            <Typography
              variant="body1"
              color="#b42426"
              className="member-typography fee-info"
            >
              {data.subtitle}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MemberShipPlan;

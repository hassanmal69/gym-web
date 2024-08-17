import React from "react";
import { Card, Typography, CardContent } from "@mui/material";
import "./appworking.css";
const DetailsCard = () => {
  const Details = [
    {
      label: "01",
      message1: " Membership and User Engagement",
      message2:
        "Our sports and fitness ecosystem begins with user engagement through membership."
    },
    {
      label: "02",
      message1: "Personalized Fitness Plans and Coaching",
      message2:
        "Our ecosystem stands out by offering personalized fitness plans tailored to each member's goals and abilities."
    },
    {
      label: "03",
      message1: "Integration with Corporate Wellness",
      message2:
        "To address the challenges faced by the ICTN industry and other sectors with sedentary jobs, our ecosystem extends its benefits to the corporate world."
    }
  ];
  return (
    <div className="details-card-container">
      {Details.map((detail) => (
        <Card className="details-card" sx={{ display: "flex" }}>
          <CardContent className="card-flex" sx={{ display: "flex" }}>
            <Typography className="num">{detail.label}</Typography>
            <div className="detail-divider"></div>
            <div className="message-container">
              <Typography className="details-typography clr-red">
                {detail.message1}
              </Typography>
              <Typography className="details-typography clr-gray">
                {detail.message2}
              </Typography>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DetailsCard;

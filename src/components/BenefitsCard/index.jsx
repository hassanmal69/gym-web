import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
const BenefitsCard = (props) => {
const BenefitsData = props.Benefits
  return (
    <>
      <div className="fitnesscard-section">
        {BenefitsData.map((data) => (
          <Card className="fitnesscard" key={data.id}>
            <CardContent className="fitness-content">
              <div className="tag-section">
                <img src={data.tag} alt={data.alt} />
                <img src={data.tagNum} alt={data.alt} className="tag-num" />
              </div>
              <div className="partner-card-content">
                <Typography variant="h5" className="partner-card-title">
                  {data.title}
                </Typography>
                <Typography variant="h5" className="partner-card-body">
                  {data.subtitle1}
                  <span> {data.span} </span>
                  {data.subtitle2}
                </Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default BenefitsCard;

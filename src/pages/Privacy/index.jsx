import React from "react";
import { HeroHeader } from "../../components/ImgData";
import { Typography } from "@mui/material";

const Privacy = () => {
  return (
    <div>
      <HeroHeader pageTitle="Privacy Policy" />
      <section>
        <Typography variant="h4" color="#b42426 " className="disabled-title">
          Privacy policies are not defined yet.
        </Typography>
      </section>
    </div>
  );
};

export default Privacy;

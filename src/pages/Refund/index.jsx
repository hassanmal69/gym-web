import React from "react";
import { HeroHeader } from "../../components/ImgData";
import { Typography } from "@mui/material";

const Refund = () => {
  return (
    <div>
      <HeroHeader pageTitle="Refund Policy" />
      <section>
        <Typography variant="h4" color="#b42426 " className="disabled-title">
          Refund Policies are not defined yet.
        </Typography>
      </section>
    </div>
  );
};

export default Refund;

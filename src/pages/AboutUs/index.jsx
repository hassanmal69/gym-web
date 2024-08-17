import { Typography } from "@mui/material";
import "./about.css";
import React from "react";
import { HeroHeader } from "../../components/ImgData";

const AboutUs = () => {
  const AboutData = [
    {
      id: 1,
      title: "About Us",
      info: "At our core, we are a passionate team committed to addressing the ever-growing concerns surrounding the declining physical health and fitness levels in our society. Our journey began with a profound realization of the pressing issues that affect individuals, particularly children and professionals within the information and communication technology industry (ICTN). We've witnessed the alarming rise in virtual reality addiction, excessive screen time, and sedentary lifestyles, and we knew that something needed to change. "
    },
    {
      id: 2,
      title: "The Need for Transformation",
      info: "As the statistics painted a stark picture of the challenges we face, such as the decline in graduation rates in physical education and the abundance of open positions within various departments, we saw a unique opportunity. Our vision was clear: to create a holistic sports and fitness ecosystem that not only caters to the diverse needs of our target audience but also extends its reach far beyond those boundaries.      "
    },
    {
      id: 3,
      title: "A Unique Perspective",
      info: "The United States of America offers a highly competitive market for health and fitness services. To stand out, we knew we needed a distinctive approach. Our approach is not only about providing access to state-of-the-art gyms, sports fields, and recreational spaces but also addressing the underlying issues that contribute to poor physical health.      "
    },
    {
      id: 4,
      title: "Creating Opportunities",
      info: "Our objective is to create opportunities for individuals to engage in physical activities and sports. We're here to help combat addiction to digital devices, redefine parental responsibilities, and promote a healthier lifestyle. By offering a wide range of activities, from football to karate, we aim to attract a diverse clientele and provide an inclusive environment where everyone can thrive.      "
    },
    {
      id: 5,
      title: "Supporting the Workforce",
      info: "Recognizing the sedentary nature of work in the ICTN industry and its negative impact on employee fitness levels, we aim to bridge the gap. We offer companies the chance to benefit from our ecosystem by hiring talent through our portal and implementing fitness programs to enhance the health and well-being of their workforce.      "
    },
    {
      id: 6,
      title: "A Holistic Approach",
      info: "Our commitment extends beyond just exercise. We intend to provide nutritional guidance to individuals dealing with conditions like diabetes and high blood pressure. With our on-site gym facilities, we provide the support necessary to manage these conditions through a balanced approach to exercise and diet."
    },
    {
      id: 7,
      title: "Join Us on this Journey",
      info: "The establishment of our sports and fitness ecosystem represents an innovative solution to the pressing issues of declining physical health and addiction to digital devices. By offering a comprehensive and holistic approach to fitness, employment opportunities, and corporate wellness programs, we aim to contribute positively to the well-being of our community. We invite you to join us on this transformative journey, and together, we can make this vision a reality."
    }
  ];
  return (
    <>
      <HeroHeader
        class={"about-title"}
        pageTitle="About Us"
        pageTitleClass="about-title"
      />
      <section className="about-section">
        {AboutData.map((data) => (
          <div className="aboutus-container" key={data.id}>
            <Typography variant="h4" className="aboutus-title">
              {data.title}
            </Typography>
            <Typography variant="body1" className="aboutus-info">
              {data.info}
            </Typography>
          </div>
        ))}
      </section>
    </>
  );
};

export default AboutUs;

import React from "react";
import "./About.css";

import RestaurantIcon from "@mui/icons-material/Restaurant";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

import aboutUsPic from "../assets/aboutUs-pic.jpg";
import historyPic from "../assets/ourHistory-pic.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <p className="logo__f">F</p>
      <div className="about__text-wrapper">
        <div className="about__description">
          <RestaurantIcon style={{ fontSize: "35px" }} />
          <h1>About Us</h1>
          <p>
            Flavorosa specializes in delicious food featuring fresh ingredients
            and masterful preparation by the Flavorosa culinary team. Whether
            you're ordering a multi-course meal or grabbing a drink at the bar,
            Flavorosa's lively, casual, yet upscale atmosphere makes it perfect
            for dining with friends, family, clients and business associates.
          </p>
        </div>
        <div className="about__pic">
          <img src={aboutUsPic} alt="about pic" />
        </div>
      </div>
      <div className="about__history-wrapper">
        <div className="about__history-pic">
          <img src={historyPic} alt="our history pic" />
        </div>
        <div className="about__history-description">
          <HistoryEduIcon style={{ fontSize: "35px" }} />
          <h1>Our History</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            repudiandae ratione, cumque, beatae enim inventore hic ipsa quas
            tempore nisi quae dolorem! Similique, molestias? Mollitia eveniet
            reprehenderit hic repellat blanditiis?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import PropTypes from "prop-types";
import "./CitoTemplate.styles.css";
import appImage from "../../../../images/main-app-icon.png";
import ExpandableSection from "../../organisms/ExpandableSection/ExpandableSection";
import HeroSection from "../../organisms/HeroSection/HeroSection";

const CitoTemplate = props => (
  <div className="CitoTemplateWrapper">
    <HeroSection 
      imageSrc={props.appImageSrc}
      header={props.appName}
      subHeader={props.appDeveloperName}
      starRating={props.appStarRating}
    />
    <ExpandableSection heading={"Description"} subHeading={"What does it do?"}>
      {props.appDescription}
    </ExpandableSection>
  </div>
);

CitoTemplate.propTypes = {
  appImageSrc: PropTypes.string,
  appName: PropTypes.string,
  appDeveloperName: PropTypes.string,
  appStarRating: PropTypes.number,
  appDescription: PropTypes.string,
};

CitoTemplate.defaultProps = {
  appImageSrc: appImage,
  appName: "An awesome SmartCar App",
  appDeveloperName: "SmartCar Inc.",
  appStarRating: 3.5,
  appDescription: `Contrary to popular belief, Lorem Ipsum is not
  simply random text. It has roots in a piece of
  classical Latin literature from 45 BC, making it
  over 2000 years old. Richard McClintock, a Latin
  professor at Hampden-Sydney College in Virginia,
  looked up one of the more obscure Latin words,
  consectetur, from a Lorem Ipsum passage, and going
  through the cites of the word in classical
  literature, discovered the undoubtable source. Lorem
  Ipsum comes from sections 1.10.32 and 1.10.33 of "de
  Finibus Bonorum et Malorum" (The Extremes of Good
  and Evil) by Cicero, written in 45 BC. This book is
  a treatise on the theory of ethics, very popular
  during the Renaissance. The first line of Lorem
  Ipsum, "Lorem ipsum dolor sit amet..", comes from a
  line in section 1.10.32.`
};

export default CitoTemplate;

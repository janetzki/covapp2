import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionTest from "./Sections/StartTestSection.js";
import EndSection from "./Sections/EndSection.js";

// import styles from "assets/jss/material-kit-react/views/components.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="CovApp2"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/virus_smaller.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Willkommen bei CovApp2</h1>
                <h3>
                  Wir sind dein Begleiter im Testprozess auf den COVID-19 Virus.
                </h3>
                <h3>
                  CovApp2 hat es sich zum Ziel gemacht, einen reibungslosen
                  Ablauf und Datenaustausch zwischen dir, den Teststätten,
                  Informationsstellen und Ärzten zu ermöglichen.
                </h3>
                <h3>
                  Based on{" "}
                  <a
                    style={{ color: "white", textDecoration: "underline" }}
                    href="https://covapp.charite.de/"
                  >
                    CovApp
                  </a>{" "}
                  by Charité Berlin and data4life.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionTest />
        <EndSection />
      </div>
      <Footer />
    </div>
  );
}

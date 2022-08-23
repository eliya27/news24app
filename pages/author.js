import React from "react";
import Image from "next/dist/client/image";
import aboutStyles from "../styles/About.module.css";
import Toolbar from "../components/toolbar";
//Icons
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

const author = ({ author }) => {
  return (
    <div className={aboutStyles.pageContainer}>
      ,
      <Toolbar />
      <div className={aboutStyles.pageContainer__wrapper}>
        <div className={aboutStyles.card_Intro}>
          <div className={aboutStyles.authorImage}>
            <a href="https://eliyagervas.azurewebsites.net/">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png"
                alt=""
              />
            </a>
          </div>
          <div className={aboutStyles.card_Intro_Title}>
            <a href="https://eliyagervas.azurewebsites.net/">
              <h1>Eliya Gervas</h1>
            </a>
            <p>Software Developer</p>
          </div>
        </div>
        <div className={aboutStyles.authorDesc}>
          <div className={aboutStyles.authorDescParagraph}>
            <p>
              Based on Dar-es-salaam, Tanzania. I am a Full stack developer and
              a college student, UDSM taking Bachelor Degree in Computer
              Science. I am open to work for any web development project, check
              out my profiles below for more information.
            </p>
          </div>
          <div className={aboutStyles.authorDescLinks}>
            <div className={aboutStyles.authorDescLinks_logo}>
              <a href="https://eliyagervas.azurewebsites.net/">
                <BiWorld />
              </a>
            </div>
            <div className={aboutStyles.authorDescLinks_logo}>
              <a href="https://linkedin.com/in/eliyagervas27">
                <AiFillLinkedin />
              </a>
            </div>
            <div className={aboutStyles.authorDescLinks_logo}>
              <a href="https://github.com/eliya27">
                <AiFillGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default author;

import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import styles from "./About.module.css";
import Navbar from "../../components/Nav/Navbar";
import Contact from "../../components/Contact/Contact";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Teams } from "../../utils/Teams";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  let settings_sm = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.08,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={styles.hero}>
      <div className={styles.aboutHero}>
        <Navbar />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className={styles.about}>
                <h2>About Megalaw</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-md-11">
            <p className="opacity-50 poppins-medium">
              But I Must Explain To You How All This Mistaken Idea Of Denouncing
              Pleasure And Praising Pain Was Born And I Will Give You A Complete
              Account Of The System, And Expound The Actual Teachings Of The
              Great Explorer Of The Truth, The Master-Builder Of Human
              Happiness. No One Rejects, Dislikes,
            </p>
            <p className="opacity-50 poppins-medium">
              But I Must Explain To You How All This Mistaken Idea Of Denouncing
              Pleasure And Praising Pain Was Born And I Will Give You A Complete
              Account Of The System, And Expound The Actual Teachings Of The
              Great Explorer Of The Truth, The Master-Builder Of Human
              Happiness. No One Rejects, Dislikes, Or Avoids Pleasure Itself,
              Because It Is Pleasure, But Because Those Who Do Not Know How To
              Pursue Pleasure Rationally Encounter Consequences That Are
              Extremely Painful. Nor Again Is There Anyone Who Loves Or Pursues
              Or Desires To Obtain Pain Of Itself, Because It Is Pain, But
              Because Occasionally Circumstances Occur In Which Toil And Pain
              Can
            </p>
            <button
              className={`d-block btn text-white ${styles.btn}`}
              onClick={() => setIsOpen(true)}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className="text-start">
                  <span
                    className={`d-block opacity-50 poppins-medium ${styles.got_issue}`}
                  >
                    Got an issue
                  </span>
                  <span className="pb-2 poppins-medium">
                    Request Consultaion
                  </span>
                </div>
                <span className="text-white fs-2">&#8594;</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-11">
            <div className="container">
              <div className="row mb-3">
                <div className="col-lg-6 d-flex justify-content-center justify-content-lg-start">
                  <div className="position-relative ps-lg-5 mb-5 mb-lg-0">
                    <div className={styles.img_bg}></div>
                    <img
                      src="./img/man.png"
                      alt="megalaw"
                      className={`px-2 ${styles.img}`}
                    />
                  </div>
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                  <h3 className="poppins-bold">Our Mission</h3>
                  <p className="poppins-medium opacity-50">
                    But I Must Explain To You How All This Mistaken Idea Of
                    Denouncing Pleasure And Praising Pain Was Born And I Will
                    Give You A Complete Account Of The System, And Expound The
                    Actual Teachings Of The Great Explorer Of The Truth, The
                    Master-Builder Of Human Happiness. No One Rejects, Dislikes,
                    Or Avoids Pleasure Itself, Because It Is Pleasure, But
                    Because Those Who Do Not Know How To Pursue Pleasure
                    Rationally Encounter Consequences That Are Extremely
                    Painful. Nor Again Is There
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 order-1 order-lg-2 d-flex justify-content-center justify-content-lg-end">
                  <div className="position-relative ps-lg-5 mb-5 mb-lg-0">
                    <div className={` ${styles.img_bg}`}></div>
                    <img
                      src="./img/man.png"
                      alt="megalaw"
                      className={`px-2 ${styles.img}`}
                    />
                  </div>
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1  ps-lg-5">
                  <h3 className="poppins-bold">Our Mission</h3>
                  <p className="poppins-medium opacity-50">
                    But I Must Explain To You How All This Mistaken Idea Of
                    Denouncing Pleasure And Praising Pain Was Born And I Will
                    Give You A Complete Account Of The System, And Expound The
                    Actual Teachings Of The Great Explorer Of The Truth, The
                    Master-Builder Of Human Happiness. No One Rejects, Dislikes,
                    Or Avoids Pleasure Itself, Because It Is Pleasure, But
                    Because Those Who Do Not Know How To Pursue Pleasure
                    Rationally Encounter Consequences That Are Extremely
                    Painful. Nor Again Is There
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 py-5">
        <div className="row ps-xl-5">
          <div className="col-md-6">
            <h3 className="poppins-bold">Our Team</h3>
            <p className="poppins-medium opacity-50 pb-2">
              But I Must Explain To You How All This Mistaken Idea Of Denouncing
              Pleasure And Praising Pain Was Born And I Will Give You A Complete
            </p>
          </div>
        </div>
        <div className="row ps-xl-3 d-none d-sm-flex">
          <div className="col-md-11">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-3 py-3">
                  <div className="position-relative">
                    <img
                      src="./img/man.png"
                      alt="team"
                      className={`img-fluid ${styles.team_img}`}
                    />
                    <div className={`py-2 ${styles.team_title}`}>
                      <span className="d-block text-light px-3 poppins-bold">
                        Mohammed Ndgana
                      </span>
                      <span className="d-block text-light px-3 poppins-medium text-lighter">
                        Principal Partner
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 py-3">
                  <div className="position-relative">
                    <img
                      src="./img/man.png"
                      alt="team"
                      className={`img-fluid ${styles.team_img}`}
                    />
                    <div className={`py-2 ${styles.team_title}`}>
                      <span className="d-block text-light px-3 poppins-bold">
                        Mohammed Ndgana
                      </span>
                      <span className="d-block text-light px-3 poppins-medium text-lighter">
                        Principal Partner
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 py-3">
                  <div className="position-relative">
                    <img
                      src="./img/man.png"
                      alt="team"
                      className={`img-fluid ${styles.team_img}`}
                    />
                    <div className={`py-2 ${styles.team_title}`}>
                      <span className="d-block text-light px-3 poppins-bold">
                        Mohammed Ndgana
                      </span>
                      <span className="d-block text-light px-3 poppins-medium text-lighter">
                        Principal Partner
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 py-3">
                  <div className="position-relative">
                    <img
                      src="./img/man.png"
                      alt="team"
                      className={`img-fluid ${styles.team_img}`}
                    />
                    <div className={`py-2 ${styles.team_title}`}>
                      <span className="d-block text-light px-3 poppins-bold">
                        Mohammed Ndgana
                      </span>
                      <span className="d-block text-light px-3 poppins-medium text-lighter">
                        Principal Partner
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-sm-none">
          <Slider {...settings_sm} className={styles.slider}>
            {Teams.map((item, index) => {
              return (
                <div className="position-relative px-2" key={index}>
                  <img
                    src={item.image}
                    alt="team"
                    className={`img-fluid ${styles.team_img}`}
                  />
                  <div className={`py-2 ${styles.team_title}`}>
                    <span className="d-block text-light px-4 poppins-bold">
                      {item.name}
                    </span>
                    <span className="d-block text-light px-4 poppins-medium text-lighter">
                      {item.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      {/* modal */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div>
              <Contact open={isOpen} close={() => setIsOpen(false)} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

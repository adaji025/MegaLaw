import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import styles from "./About.module.css";
import Navbar from "../../components/Nav/Navbar";
import Contact from "../../components/Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Teams } from "../../utils/Teams";
import Team from "../../components/Team/Team";

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

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 700,
    });
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.aboutHero}>
        <Navbar />
        <div className={styles.aboutHero_1}>
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
      </div>

      <div className="container py-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-md-11">
            <p className="opacity-50 poppins-medium">
              Megalaw Partners is a firm registered under the companies and
              Allied Matters Act with Registeration Number BN3157638. The Firm
              is established by Barrister Muhammed Ndagana Muhammd (Principal
              Patner), a legal Practioner that was called to the Nigerian Bar
              over a decade ago and has been in active practice since then
            </p>
            <p className="opacity-50 poppins-medium">
              We are full-service Law Firm that Capitalizes on its skilled
              professionals and technology to provived excellent legal services
              to its client
              
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

      <div className="container overflow-x-hidden">
        <div className="row  align-items-center">
          <div className="col-xl-11">
            <div className="container">
              <div className="row my-5">
                <div className="col-lg-6 d-flex justify-content-center justify-content-lg-start over-flow-x-hidden" data-aos="fade-down">
                  <div className=" ps-lg-5 mb-5 mb-lg-0">
                    {/* <div className={styles.img_bg}></div> */}
                    <img
                      src="./img/our-vision.png"
                      alt="megalaw"
                      className={`img-fluid px-2`}
                    />
                  </div>
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center overflow-x-hidden"  data-aos="fade-left">
                  <h3 className="poppins-bold">Our Mission</h3>
                  <p className="poppins-medium opacity-50" data-aos="fade-in">
                    Our utmost goal is to serve our client with integrity and
                    professionalism to exceed your expectations and become the
                    reference point in legal consultancy and advocay in Nigeria
                  </p>
                </div>
              </div>
              <div className="row my-5  over-flow-x-hidden" data-aos="fade-up">
                <div className="col-lg-6 order-1 order-lg-2 d-flex justify-content-center justify-content-lg-end">
                  <div className="position-relative ps-lg-5 mb-5 mb-lg-0">
                    {/* <div className={` ${styles.img_bg}`}></div> */}
                    <img
                      src="./img/megalaw-group.png"
                      alt="megalaw"
                      className={`img-fluid px-2 `}
                    />
                  </div>
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1  ps-lg-5 overflow-x-hidden"  data-aos="fade-right">
                  <h3 className="poppins-bold">Our vision</h3>
                  <p className="poppins-medium opacity-50">
                  We are devoted to providing excellent customer service and
                building long term connections. Our main objective is to serve
                our clients with high quality and efficient services. We offer
                not just competent legal advice but also effective business
                solutions relevant to our customers individual circumstances
                because of our specialization in practice areas and industrial
                sectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 py-5  overflow-x-hidden" data-aos="fade-in">
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
                {Teams.map((team, i) => {
                  return (
                    <div className="col-md-6 col-lg-3 py-3" key={i}>
                      <Team team={team} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="d-sm-none">
          <Slider {...settings_sm} className={styles.slider}>
            {Teams.map((item, index) => {
              return (
                <div className="position-relative slider-mx-2" key={index}>
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

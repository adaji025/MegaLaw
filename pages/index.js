import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Navbar from "../components/Nav/Navbar";
import Contact from "../components/Contact/Contact";
import { useRouter } from "next/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogPost from "../components/BlogPost/BlogPost";

export default function Home({ posts }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
    });
  }, []);

  const router = useRouter();

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
    <div className={styles.container}>
      <Head>
        <title>MegaLaw</title>
        <meta
          name="description"
          content="law, litigation, Arbitration & Mediation, Perfection of legal Mortgages/Assignments"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.heroContainer}>
        <Navbar />
        <div className="container d-flex align-items-center h_60">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="container">
                <div className="row align-items-center">
                  <div className={`col-lg-11 text-white ${styles.welcome}`}>
                    <p className={`poppins-bold opacity-50 ${styles.welcome}`}>
                      WELCOME TO MEGA LAW
                    </p>
                    <h2
                      className={`poppins-bold ${styles.inrotext}`}
                      data-aos="zoom-in"
                    >
                      We swiftly resolve legal matters.
                    </h2>
                    <span className={`mb-2 poppins-regular `}>
                      We provide value-added legal services with the broadest
                      mix of premium skills and depth of expertise drawn from
                      years of experience in corporate sector
                    </span>
                    <button
                      className={`d-block mt-3 btn text-white ${styles.btn}`}
                      onClick={() => setIsOpen(true)}
                      data-aos="flip-right"
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
            </div>
            <div className="col-md-6 d-grid">
              <div className={`skew ${styles.home_img}`} data-aos="zoom-out">
                <img src="./img/man.png" alt="megalaw" className={styles.one} />
                <img src="./img/man.png" alt="megalaw" className={styles.two} />
                <img
                  src="./img/man.png"
                  alt="megalaw"
                  className={styles.three}
                />
                <img
                  src="./img/man.png"
                  alt="megalaw"
                  className={styles.four}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center pt-5 mt-4 switch">
          <img src="./img/switch-icon.svg" alt="switch" className="img-fluid" />
        </div>
      </section>
      <section id="practices" className={styles.practices}>
        <Container className="py-5">
          <Row>
            <Col md={5}>
              <h2 className="pb-2 px-2 poppins-bold">Our Practices</h2>
              <p className="mega-law-muted poppins-medium px-2">
                But I Must Explain To You How All This Mistaken Idea Of
                Denouncing Pleasure And Praising Pain Was Born And I Will Give
                You A Complete Account Of The System, And Expound
              </p>
            </Col>
            <Col md={7}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div
                      className="card border-0 shadow-sm px-4 mb-lg-5"
                      data-aos="fade-down"
                    >
                      <img
                        src="./img/rect-sm.svg"
                        alt="megalaw blog image"
                        className={`mt-4 mb-2 ${styles.practicesImg}`}
                      />
                      <div className="card-body">
                        <h5 className="poppins-bold">Property Law Practice</h5>
                        <p className="poppins-medium opacity-50">
                          But I must explain to you how all this mistaken idea
                          of denouncing p leasure and praising pain was born and
                          I will
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 pb-3">
                    <div
                      className="card border-0 shadow-sm px-4 mt-4"
                      data-aos="fade-left"
                    >
                      <img
                        src="./img/rect-sm.svg"
                        alt="megalaw blog image"
                        className={`mt-4 mb-2 ${styles.practicesImg}`}
                      />
                      <div className="card-body">
                        <h5 className="poppins-bold">
                          Corporate & Commercial Law
                        </h5>
                        <p className="poppins-medium opacity-50">
                          But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          I will
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 pb-3 nmb-2">
                    <div
                      className="card border-0 shadow-sm px-4"
                      data-aos="fade-right"
                    >
                      <img
                        src="./img/rect-sm.svg"
                        alt="megalaw blog image"
                        className={`mt-4 mb-2 ${styles.practicesImg}`}
                      />
                      <div className="card-body">
                        <h5 className="poppins-bold">Litigation</h5>
                        <p className="poppins-medium opacity-50">
                          But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          I will
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 pb-3">
                    <div
                      className="card border-0 shadow-sm px-4 mt-4"
                      data-aos="fade-up"
                    >
                      <img
                        src="./img/rect-sm.svg"
                        alt="megalaw blog image"
                        className={`mt-4 mb-2 ${styles.practicesImg}`}
                      />
                      <div className="card-body">
                        <h5 className="poppins-bold">
                          Arbitration & Mediation
                        </h5>
                        <p className="poppins-medium opacity-50">
                          But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          I will
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="client" className={styles.client} data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center px-4 px-sm-3 ">
              <div className="position-relative mb-5">
                <div className={`mw-80 mh-80 ${styles.img_bg}`}></div>
                <img
                  src="./img/man.png"
                  alt="megalaw"
                  className="img-fluid mw-80"
                />
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center pb-5 px-4 px-sm-1 ">
              <h3 className="poppins-bold pt-3">
                We are devoted to our clients.
              </h3>
              <p className="mega-law-muted poppins-medium">
                {" "}
                But I Must Explain To You How All This Mistaken Idea Of
                Denouncing Pleasure And Praising Pain Was Born And I Will Give
                You A Complete Account Of The System, And Expound The Actual
                Teachings Of The Great Explorer Of The Truth, The Master-Builder
                Of Human Happiness. No One Rejects, Dislikes, Or Avoids Pleasure
                Itself, Because It Is Pleasure, But Because Those Who Do Not
                Know How To Pursue Pleasure Rationally Encounter Consequences
                That Are Painful. Nor Again Is There Anyone Who Loves Or Pursues
                Or Desires To Obtain Pain Of Itself, Because It Is Pain, But
                Because Occasionally Circumstances Occur In Which Toil And Pain
                Can
              </p>
              <a href="#" className="tomato-color pb-2 poppins-medium">
                Read more...
              </a>
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

        <div className="container py-5" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="poppins-bold">What Our Clients Say</h3>
              <p className="poppins-medium">
                But I Must Explain To You How All This Mistaken Idea Of
                Denouncing Pleasure And Praising Pain Was Born And I Will Give
                You A Complete
              </p>
            </div>
          </div>
          <div className={styles.testimonial}>
            <div className=" p-1 p-sm-3">
              <div className="row">
                <div className="col-lg-5 d-flex justify-content-center pb-5">
                  <div className="position-relative mb-5 d-none d-sm-block">
                    <div className={styles.img_bg}></div>
                    <img
                      src="./img/man.png"
                      alt="megalaw"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-11">
                        <span
                          className={`d-block poppins-regular ${styles.swift}`}
                        >
                          Swift & Professional
                        </span>
                        <span
                          className={`poppins-medium ${styles.testimonial_text}`}
                        >
                          <span>“</span>MegaLaw helped me recover funds I was
                          owed for a long time and the process was smooth and
                          professional”
                        </span>
                        <div className="py-3">
                          <Link href="#">
                            <a className="px-3 poppins-medium text-secondary text-decoration-underline text-dak">
                              Paul Davis
                            </a>
                          </Link>
                          <Link href="#">
                            <a className="px-3 poppins-medium text-secondary text-decoration-underline">
                              Aisha Samson
                            </a>
                          </Link>
                          <Link href="#">
                            <a className="px-3 poppins-medium text-secondary text-decoration-underline">
                              Alicia Jake
                            </a>
                          </Link>
                          <Link href="#">
                            <a className="px-3 poppins-medium text-secondary text-decoration-underline">
                              Paul Davis
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className={`py-5 ${styles.blog}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="poppins-bold">Our Blog</h3>
              <p className="poppins-medium opacity-50">
                You A CompleteJust a collection of our thoughts on various
                topics
              </p>
            </div>
          </div>
          <div className="row d-none d-sm-flex">
            {posts.data.map((post, index) => {
              return (
                <div className="col-md-6" key={index}>
                  <BlogPost
                    key={index}
                    title={post?.attributes?.title}
                    postImg={post.attributes.post_image?.data?.attributes?.url}
                    postContent={post.attributes.content.slice(0, 300) + "..."}
                    postUrl={`/blog/${post.id}`}
                  />
                  ;
                </div>
              );
            })}
          </div>
          <div className="container d-sm-none">
            <Slider {...settings_sm}>
              {posts.data.map((post, index) => {
                return (
                  <BlogPost
                    key={index}
                    title={post?.attributes?.title}
                    postImg={post.attributes.post_image?.data?.attributes?.url}
                    postContent={post.attributes.content.slice(0, 180) + "..."}
                    postUrl={`/blog/${post.id}`}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
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
}

export async function getServerSideProps() {
  // let postRes = null;

  const postRes = await axios.get(
    `https://megalaw.herokuapp.com/api/posts?populate=*`
  );

  return {
    props: {
      posts: postRes?.data,
    },
  };
}

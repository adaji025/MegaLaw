import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer/Footer";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Navbar from "../components/Nav/Navbar";
import Contact from "../components/Contact/Contact";
import { useRouter } from "next/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogPost from "../components/BlogPost/BlogPost";
import Testimonial from "../components/Testimonial/Testimonial";

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
          <div className="row justify-content-center align-items-center mt-5 pb-5">
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
              <div className={styles.megalaw_bg} data-aos="zoom-out">
                <img src="./img/mega.png" alt="" className="img-fluid" />
              </div>
              {/* <div className={`skew ${styles.home_img}`} data-aos="zoom-out">
                <img src="./img/second-lady.png" alt="megalaw" className={styles.one} />
                <img src="./img/man-1.png" alt="megalaw" className={styles.two} />
                <img
                  src="./img/first-lady.png"
                  alt="megalaw"
                  className={styles.three}
                />
                <img
                  src="./img/muhammed-ndagana.png"
                  alt="megalaw"
                  className={styles.four}
                />
              </div> */}
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
                Our industry strengths at Megalaw include; property law,
                corporate and commercial, arbitration and mediation and
                litigation.
              </p>
            </Col>
            <Col md={7}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div
                      className={`card border-0 shadow-sm px-4 mb-lg-5 ${styles.card}`}
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
                          Our property law experts have a wide variety of
                          experience and skill in delivering targeted business
                          advice on all areas of commercial and residential
                          property transactions. We also have great experience
                          in real estate finance and provide mortgage loan
                          advice to both lenders and borrowers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 pb-3">
                    <div
                      className={`card border-0 shadow-sm px-4 mt-4 ${styles.card}`}
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
                          We can help with a wide range of transactions and
                          corporate finance because of our significant knowledge
                          and expertise. We offer corporate consultancy services
                          to domestic businesses in nigeria.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 pb-3 nmb-2">
                    <div
                      className={`card border-0 shadow-sm px-4 ${styles.card}`}
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
                          Litigation We make every effort to prevent problems
                          and utilize litigation only as a last resort, thanks
                          to our familiarity with the clients business. Our
                          litigation expertise includes employment, debt
                          collection, banking and finance, and other fields. We
                          have certified and experienced members that can
                          represent you in any Nigerian court.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 pb-3">
                    <div
                      className={`card border-0 shadow-sm px-4 mt-3 ${styles.card}`}
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
                          At Megalaw, we understand that not all conflicts need
                          to be resolved in a courtroom, our team advocates the
                          use of all ADR approaches, such as negotiation,
                          conciliation, mediation, and arbitration, when and
                          where they are suitable.
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
                  src="./img/MG8.jpg"
                  alt="megalaw"
                  className="img-fluid w-75 h-100"
                />
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center pb-5 px-4 px-sm-1 ">
              <h3 className="poppins-bold pt-3">
                We are devoted to our clients.
              </h3>
              <p className="mega-law-muted poppins-medium">
                {" "}
                We are devoted to providing excellent customer service and
                building long term connections. Our main objective is to serve
                our clients with high quality and efficient services. We offer
                not just competent legal advice but also effective business
                solutions relevant to our customers individual circumstances
                because of our specialization in practice areas and industrial
                sectors.
              </p>
              <a
                onClick={() => router.push("/about")}
                className={`tomato-color pb-2 poppins-medium ${styles.read}`}
              >
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

        {/* <div className="container py-5" data-aos="fade-up">
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
            <Testimonial />
          </div>
        </div> */}
        <div></div>
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

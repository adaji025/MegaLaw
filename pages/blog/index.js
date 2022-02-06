import { useRouter } from "next/router";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Nav/Navbar";
import { Blog as blog} from "../../utils/Blog";
import BlogPost from "../../components/BlogPost/BlogPost";

const Blog = () => {
  const router = useRouter()

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
    <div>
      <Navbar textColor="megaDark" />
      <div className="container py-5">
        <div className="row jusify-content-center align-items-center">
          <div className="col-md-6">
            <span className="tomato-color opacity-75 poppins-medium">
              FEATURED POST
            </span>
            <h3 className="poppins-bold pe-lg-5">
              How to build a world-class business brand
            </h3>
            <span className="poppins-regular">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle. By
              the same illusion which lifts the horizon of the sea to the level
              of the spectator on a hillside, the sable cloud{" "}
            </span>
            <a href="#" className="pb-2 tomato-color d-flex align-items-center">
              Read more <span className="fs-2 ps-2">&#8594;</span>
            </a>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <img src="./img/rect-sm.svg" alt="megalaw" className="img-fluid" />
          </div>
        </div>
      </div>
      <section id="blog" className={`py-5`}>
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
            <div className="col-md-6">
              <div className="card bg-transparent border-0">
                <img src="./img/blog.png" alt="blog image" className="card-img-top" />
                <div className="card-body">
                  <h5 className="poppins-medium">
                    How Fintech Can Stimulate Financial Inclusion: Challenges
                    And Opportunities.
                  </h5>
                  <p className="poppins-medium opacity-50 pt-1">
                    Apparently we had reached a great height in the atmosphere,
                    for the sky was a dead black, and the stars had ceased to
                    twinkle. By the same illusion which lifts the horizon of the
                    sea to the level of the spectator on
                  </p>
                  <a
                    onClick={() => router.push('/post')}
                    className="pb-2 tomato-color opacity-50 d-flex align-items-center"
                  >
                    Read more <span className="fs-2 ps-2">&#8594;</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-transparent border-0">
                <img src="./img/blog.png" alt="blog image" className="card-img-top" />
                <div className="card-body">
                  <h5 className="poppins-medium">
                    How Fintech Can Stimulate Financial Inclusion: Challenges
                    And Opportunities.
                  </h5>
                  <p className="poppins-medium opacity-50 pt-1">
                    Apparently we had reached a great height in the atmosphere,
                    for the sky was a dead black, and the stars had ceased to
                    twinkle. By the same illusion which lifts the horizon of the
                    sea to the level of the spectator on
                  </p>
                  <a
                    onClick={() => router.push('/post')}
                    className="pb-2 tomato-color opacity-50 d-flex align-items-center"
                  >
                    Read more <span className="fs-2 ps-2">&#8594;</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-transparent border-0">
                <img src="./img/blog.png" alt="blog image" className="card-img-top" />
                <div className="card-body">
                  <h5 className="poppins-medium">
                    How Fintech Can Stimulate Financial Inclusion: Challenges
                    And Opportunities.
                  </h5>
                  <p className="poppins-medium opacity-50 pt-1">
                    Apparently we had reached a great height in the atmosphere,
                    for the sky was a dead black, and the stars had ceased to
                    twinkle. By the same illusion which lifts the horizon of the
                    sea to the level of the spectator on
                  </p>
                  <a
                    onClick={() => router.push('/post')}
                    className="pb-2 tomato-color opacity-50 d-flex align-items-center"
                  >
                    Read more <span className="fs-2 ps-2">&#8594;</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-transparent border-0">
                <img src="./img/blog.png" alt="blog image" className="card-img-top" />
                <div className="card-body">
                  <h5 className="poppins-medium">
                    How Fintech Can Stimulate Financial Inclusion: Challenges
                    And Opportunities.
                  </h5>
                  <p className="poppins-medium opacity-50 pt-1">
                    Apparently we had reached a great height in the atmosphere,
                    for the sky was a dead black, and the stars had ceased to
                    twinkle. By the same illusion which lifts the horizon of the
                    sea to the level of the spectator on
                  </p>
                  <a
                    onClick={() => router.push('/post')}
                    className="pb-2 tomato-color opacity-50 d-flex align-items-center"
                  >
                    Read more <span className="fs-2 ps-2">&#8594;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container d-sm-none">
            <Slider {...settings_sm} className="slider">
              {
                blog.map((post, index) => {
                  return(
                    <BlogPost key={index} post={post} />
                  )
                })
              }
            </Slider>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;

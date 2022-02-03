import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from '../../components/Nav/Navbar'
import styles from "./Post.module.css";

const Post = () => {
  return (
    <div>
      <Navbar textColor="megaDark"/>
      <div className="container py-5">
        <div className="row">
          <div className="col-xl-11">
            <div className="container">
              <div className={styles.back}>
                <img
                  src="./img/go-back.svg"
                  alt=""
                  className="img-fluid w-50"
                />
              </div>
            </div>
            <div className="container pt-3">
              <span className={`poppins-medium ${styles.post_date}`}>
                12 SEPT, 2030
              </span>
              <div>
                <h3 className="poppins-bold pt-2">
                  How to build a world-class business brand
                </h3>
              </div>
              <div className="d-flex justify-content-center py-3">
                <img src="./img/rect-sm.svg" alt="" className="img-fluid" />
              </div>
              <p className="poppins-medium opacity-50">
                But I Must Explain To You How All This Mistaken Idea Of
                Denouncing Pleasure And Praising Pain Was Born And I Will Give
                You A Complete Account Of The System, And Expound The Actual
                Teachings Of The Great Explorer Of The Truth, The Master-Builder
                Of Human Happiness. No One Rejects, Dislikes,
              </p>
              <p className="poppins-medium opacity-50">
                But I Must Explain To You How All This Mistaken Idea Of
                Denouncing Pleasure And Praising Pain Was Born And I Will Give
                You A Complete Account Of The System, And Expound The Actual
                Teachings Of The Great Explorer Of The Truth, The Master-Builder
                Of Human Happiness. No One Rejects, Dislikes, Or Avoids Pleasure
                Itself, Because It Is Pleasure, But Because Those Who Do Not
                Know How To Pursue Pleasure Rationally Encounter Consequences
                That Are Extremely Painful. Nor Again Is There Anyone Who Loves
                Or Pursues Or Desires To Obtain Pain Of Itself, Because It Is
                Pain, But Because Occasionally Circumstances Occur In Which Toil
                And Pain Can
              </p>
              <div className="d-flex align-items-center">
                <div className={styles.authorContainer}>
                  <img
                    src="./img/man.png"
                    alt=""
                    className="img-fluid rounded-circle ms-3 my-auto"
                  />
                </div>
                <span className="ms-4">
                  <span className="poppins-bold d-block">Eva Allordia</span>
                  <span className="poppins-medium opacity-50 fs-16">Associate</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="blog" className={`py-5 ${styles.blog}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="poppins-bold">More Article </h3>
              <p className="poppins-medium opacity-50">
              Just a collection of our thoughts on various topics
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card bg-transparent border-0">
                <img src="./img/blog.png" alt="" className="card-img-top" />
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
                  <a href="#" className="pb-2 tomato-color opacity-50 d-flex align-items-center">
                    Read more <span className="fs-2 ps-2">&#8594;</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-transparent border-0">
                <img src="./img/blog.png" alt="" className="card-img-top" />
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
                  <a href="#" className="pb-2 tomato-color opacity-50 d-flex align-items-center">
                    Read more <span className="fs-2 ps-2">&#8594;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Post;

import React from "react";
import styles from "./Testimonial.module.css";
import { testimonials } from "../../utils/TestimonialItems";

const Testimonial = () => {
  return (
    <div className={`testimonial ${styles.testimonial}`}>
     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  {/* <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div> */}
  <div className="carousel-inner">
  {testimonials.map((x, index) => {
  return (
    <div
      className={
        index === 0 ? "carousel-item active" : "carousel-item"
      }
      key={index}
    >
      <div className="container p-1 p-sm-3">
        <div className="row">
          <div className="col-lg-5 d-flex justify-content-center pb-5">
            <div className="position-relative mb-5 d-none d-sm-block">
              <div className={styles.img_bg}></div>
              <img
                src={x.image}
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
                    {x.caption}
                  </span>
                  <span
                    className={`poppins-medium ${styles.testimonial_text}`}
                  >
                    <span>“</span>
                    {x.text}”
                  </span>
                  <div className="py-3">
                      <a className="px-3 poppins-medium text-secondary active"
                       data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1">
                        Paul Davis
                      </a>
                      <a className="px-3 poppins-medium text-secondary"
                       type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
                        Aisha Samson
                      </a>
                      <a className="px-3 poppins-medium text-secondary"
                       type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
                        Alicia Jake
                      </a>
                      <a className="px-3 poppins-medium text-secondary"
                       type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4">
                        Paul Davis
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})} 
  </div>
  {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
</div>
    </div>
  );
};

export default Testimonial;

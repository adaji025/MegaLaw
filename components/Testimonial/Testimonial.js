import React from 'react'

const Testimonial = (props) => {
  return (
    <div className={styles.testimonial}>
        <div className="container p-1 p-sm-3">
              <div className="row">
                <div className="col-lg-5 d-flex justify-content-center pb-5">
                  <div className="position-relative mb-5 d-none d-sm-block">
                    <div className={styles.img_bg}></div>
                    <img
                      src={props.image}
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
                          {props.caption}
                        </span>
                        <span
                          className={`poppins-medium ${styles.testimonial_text}`}
                        >
                          <span>“</span>{props.text}”
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
  )
}

export default Testimonial
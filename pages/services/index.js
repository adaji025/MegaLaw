import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Nav/Navbar";
import styles from "./Services.module.css";
import Modal from "../../components/modal/Modal";


const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
    });
  }, []);

  const [openModal, setOpenModal] = useState(false);
  return (
    <div className={styles.container}>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div className={styles.services}>
        <Navbar setOpenModal={setOpenModal} />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 py-2">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9 d-flex flex-column align-items-center">
                    <div className={styles.h_200}>
                      <h2
                        className={`poppins-bold text-white text-center text-md-start py-2 ${styles.our_services}`}
                      >
                        Our Services
                      </h2>
                      <p
                        className={`fs-5 ps-md-2 poppins-medium text-white text-center text-md-start ${styles.services_text}`}
                      >
                        At Megalaw, we provide legal advice and counsel; our
                        knowledge allows us to devise winning tactics for issues
                        behalf of our clients. We give concise, accurate and
                        intelligent solutions by cutting through challenges.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 py-2 d-flex justify-content-center">
              <img src="./img/megalaw-group.png" alt="megalaw" className="img-fluid w-75 mw-100" />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-xl-11">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <h4 className="poppins-bold">
                    We provide our services in the following areas
                  </h4>
                  <p className="poppins-medium opacity-50">
                    Select an area you need our expertise and go ahead to tell
                    us briefly about your issue…
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4 py-2">
                  <div className={styles.card} data-aos="fade-right">
                    <p className="pt-3 poppins-bold">
                      Confirmation of Authenticity of Documents
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 py-2">
                  <div className={styles.card} data-aos="fade-down">
                    <p className="pt-3 poppins-bold text-center">
                      Drafting of Commercial Agreement
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 py-2">
                  <div className={`${styles.card}`} data-aos="fade-left">
                    <p className="pt-3 poppins-bold px-1 text-center">
                      Processing & Renewal of Certificate of Occupancy
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center py-3">
                <div className="col-md-6 col-lg-5 py-2">
                  <div className={styles.card} data-aos="fade-right">
                    <p className="pt-3 poppins-bold">
                      Consultancy and Company Secretary
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 py-2">
                  <div className={styles.card} data-aos="fade-up">
                    <p className="pt-3 poppins-bold text-center">
                      Perfection of legal Mortgages/Assignments
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 py-2">
                  <div className={`${styles.card}`} data-aos="fade-up">
                    <p className="pt-3 poppins-bold">
                      Conducting search at Land Registries
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center" data-aos="zoom-in">
                <div className="col-md-6 col-lg-3 py-2">
                  <div className={styles.card}>
                    <p className="pt-3 poppins-bold">Debt recovery</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 py-2">
                  <div className={styles.card}>
                    <p className="pt-3 poppins-bold text-center">
                      Arbitration & Mediation
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 py-2">
                  <div className={`${styles.card}`}>
                    <p className="pt-3 poppins-bold">
                      Advocacy/Representation in court
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center py-4" data-aos='zoom-out'>
              <div className="col-md-6">
                <div className={`${styles.card}`}>
                  <p className="pt-3 poppins-bold">
                    Transactions at Corprate Affairs Commision
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center py-5">
        <a
          href="#"
          className={`btn text-white poppins-bold px-5 py-3 ${styles.btn}`}
          onClick={() => setOpenModal(true)}
        >
          Consult us
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Services;

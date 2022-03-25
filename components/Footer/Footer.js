import React from "react";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container py-5">
        <Container>
          <Row>
            <Col md={5}>
              <div className={styles.logo}>
                <span className={styles.mega}>Mega</span>
                <span className={styles.law}>Law</span>
              </div>
              <Row>
                <Col md={11}>
                  <form>
                    <label
                      className={`py-2 text-white poppins-medium ${styles.label}`}
                      htmlFor="newsletter"
                    >
                      Subscribe to our newsletter
                    </label>
                    <div className="input-group pb-3">
                      <input
                        type="text"
                        className={`form-control py-2 rounded-0 ${styles.input_text}`}
                        id=""
                        placeholder="Enter you email address"
                      />
                      <button className="input-group-text tomato-bg border-0 text-white poppins-medium py-2 rounded-0">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </Col>
              </Row>
            </Col>
            <Col md={7}>
              <Container className="py-3">
                <Row>
                  <Col md={4}>
                    <h5 className="text-white poppins-bold pb-3">Company</h5>
                    <Link href="#">
                      <a className="d-block poppins-medium pb-3 text-secondary">
                        About Us
                      </a>
                    </Link>
                    <Link href="#">
                      <a className="d-block poppins-medium pb-3 text-secondary">
                        Blog
                      </a>
                    </Link>
                    <Link href="#">
                      <a className="d-block poppins-medium pb-3 text-secondary">
                        Services
                      </a>
                    </Link>
                    <Link href="#">
                      <a className="d-block poppins-medium pb-3 text-secondary">
                        Careers
                      </a>
                    </Link>
                  </Col>
                  <Col md={8}>
                    <h5 className=" text-white poppins-bold pb-3 mr-3">Address</h5>
                    <p className="text-secondary poppins-medium">
                      Email Address: megalawpartners@outlook.com
                    </p>
                    <p className="text-secondary poppins-medium"> <span className="pr-5">Phone Number: </span> +234 907 254 7346</p>
                    <p className="text-secondary poppins-medium">
                      Office Address: Suite B2/B3 Peniel Albarka Plaza, Opposite Federal High
                      Court, Minna, Niger State.
                    </p>
                   
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={6} className="pb-3 order-2 order-sm-1">
              <p className="text-secondary text-center text-sm-start py-3">
                &copy; 2021 Megalaw Partners
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-md-end order-1 order-sm-2">
              <Link href="#">
                <a className="px-3 poppins-medium text-secondary">Instagram</a>
              </Link>
              <Link href="#">
                <a className="px-3 poppins-medium text-secondary">Twitter</a>
              </Link>
              <Link href="#">
                <a className="px-3 poppins-medium text-secondary">Facebook</a>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

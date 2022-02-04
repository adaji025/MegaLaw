import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex justify-content-between pt-3">
              <h3>Talk to us….</h3>
              <span>
                <img
                  src="./img/togglerClose.svg"
                  alt="close"
                  className="img-fluid"
                />
              </span>
            </div>
            <form>
              <div className="form-group">
                  <label htmlFor="name" className="poppins-medium opacity-50 pb-2">Full name</label>
                <input type="text" id="name" className="form-control mb-3 py-3 border-0 ash-bg" placeholder="Type here…" />
              </div>
              <div className="form-group">
                  <label htmlFor="email" className="poppins-medium opacity-50 pb-2">Email Address</label>
                <input type="text" id="email" className="form-control mb-3 py-3 border-0 ash-bg" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                  <label htmlFor="message" className="poppins-medium opacity-50 pb-2">Tell us about your case</label>
                  <textarea name="message" id="message" className="form-control mb-3 py-3 border-0 ash-bg" placeholder="Type here"></textarea>
              </div>
              <button type="submit" className="btn tomato-bg form-control text-light poppins-medium py-3">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

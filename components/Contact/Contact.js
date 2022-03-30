// import React, { useRef } from "react";
// import emailjs from "emailjs-com";

// const Contact = ({ open, close }) => {
//   const form = useRef();
//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_0i5lnum",
//         "template_8pa4t0z",
//         form.current,
//         "user_TK0ic5dSD1liigMMwkYha"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     e.target.reset();
//   }
//   if (!open) return null;

//   const OVERLAY_STYLES = {
//     position: "fixed",
//     top: 0,
//     bottom: 0,
//     right: 0,
//     left: 0,
//     backgroundColor: "rgba(0,0,0, .7)",
//     zIndex: "1000",
//   };
//   return (
//     <div className={`parent`}>
//       <div style={OVERLAY_STYLES}></div>
//       <div className="container  py-5 z-modal bg-white">
//         <div className="row justify-content-center">
//           <div className="col-md-10">
//             <div className="d-flex justify-content-between py-3">
//               <h3>Talk to us….</h3>
//               <span onClick={close}>
//                 <img
//                   src="./img/togglerClose.svg"
//                   alt="close"
//                   className="img-fluid"
//                 />
//               </span>
//             </div>
//             <form ref={form} onSubmit={sendEmail}>
//               <div className="form-group">
//                 <label
//                   htmlFor="name"
//                   className="poppins-medium opacity-50 pb-2"
//                 >
//                   Full name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   className="form-control mb-3 py-3 border-0 ash-bg"
//                   placeholder="Type here…"
//                 />
//               </div>
//               <div className="form-group">
//                 <label
//                   htmlFor="email"
//                   className="poppins-medium opacity-50 pb-2"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   name="email"
//                   type="text"
//                   id="email"
//                   className="form-control mb-3 py-3 border-0 ash-bg"
//                   placeholder="your@email.com"
//                 />
//               </div>
//               <div className="form-group">
//                 <label
//                   htmlFor="message"
//                   className="poppins-medium opacity-50 pb-2"
//                 >
//                   Tell us about your case
//                 </label>
//                 <textarea
//                   name="message"
//                   id="message"
//                   className="form-control mb-3 py-3 border-0 ash-bg"
//                   placeholder="Type here"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="btn tomato-bg form-control text-light poppins-medium py-3"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

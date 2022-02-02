import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Navbar/Navbar';
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css";
import '../components/Nav/Navbar.css'
import '../components/Contact/Contact.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

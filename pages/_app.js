import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css";
import '../components/Nav/Navbar.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

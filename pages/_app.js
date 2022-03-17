import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic'
import "../styles/globals.css";
import '../components/Nav/Navbar.css'
import '../components/Contact/Contact.css'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
    
  }, []);

  const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
  });
  console.log(AnimatedCursor);
  return (
    <>
   <AnimatedCursor
      innerSize={18}
      outerSize={8}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

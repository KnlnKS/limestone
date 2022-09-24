import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  /*
  // Uncomment this if you need to use interactive Bootstrap components
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  */

  return <Component {...pageProps} />;
}

export default MyApp;

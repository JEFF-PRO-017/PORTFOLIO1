import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Script from "next/script"
import PreloaderPartStart from "./components/PreloaderPartStart";
import "../public/assets/css/animate.css";
import "../public/assets/css/lineicons.css";
import "../public/assets/css/default.css";
import "../public/assets/css/style.css";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/js/vendor/jquery-1.12.4.min.js";
import Contact from "./components/Contact";
;


export default function Home() {
  return (
    <>
      {/* <PreloaderPartStart /> */}
      <Header />
      <About />
      <Services />
      <Contact/>
      <Footer />

      {/* Jquery */}
      <Script
        src="../public/assets/js/vendor/jquery-1.12.4.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="../public/assets/js/vendor/modernizr-3.7.1.min.js"
        strategy="beforeInteractive"
      />

      {/* Bootstrap */}
      <Script src="../public/assets/js/popper.min.js" strategy="afterInteractive" />
      <Script src="../public/assets/js/bootstrap.min.js" strategy="afterInteractive" />

      {/* Appear */}
      <Script src="../public/assets/js/jquery.appear.min.js" strategy="lazyOnload" />

      {/* Scrolling Nav */}
      <Script src="../public/assets/js/jquery.easing.min.js" strategy="lazyOnload" />
      <Script src="../public/assets/js/scrolling-nav.js" strategy="lazyOnload" />

      {/* Main */}
      <Script src="../public/assets/js/main.js" strategy="lazyOnload" />
    </>
  );
}

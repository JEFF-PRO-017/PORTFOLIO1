import Link from "next/link";

export default function Header() {
  return (
    <section className="header_area">
      <div className="header_navbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <Link href="/" className="navbar-brand">
                  {/* <Image src="/assets/images/logo.svg" alt="Logo" width={150} height={50} /> */}
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <Link href="#home">
                        <span className="page-scroll">
                          Home<span></span>
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#about">
                        <span className="page-scroll">
                          About<span></span>
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#services">
                        <span className="page-scroll">
                          Services<span></span>
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#project">
                        <span className="page-scroll">
                          Portfolio<span></span>
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#pricing">
                        <span className="page-scroll">
                          Pricing<span></span>
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#work">
                        <span className="page-scroll">
                          Experience<span></span>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div id="home" className="header_hero">
        <ul className="header_social d-none d-lg-block">
          <li>
            <Link href="#">
              <span>
                <i className="lni lni-facebook-filled"></i>
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span>
                <i className="lni lni-twitter-filled"></i>
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span>
                <i className="lni lni-instagram-filled"></i>
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span>
                <i className="lni lni-linkedin-original"></i>
              </span>
            </Link>
          </li>
        </ul>
        <div className="container">
          <div className="row align-items-center justify-content-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="header_hero_content mt-45">
                <h5
                  className="header_sub_title wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.2s"
                >
                  Hello
                </h5>
                <h2
                  className="header_title wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.5s"
                >
                  You are using free lite version of Freelancer
                </h2>
                <span
                  className="wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.8s"
                >
                  Please, purchase full version to get all elements, features,
                  footer credit removal permission and commercial license
                </span>
                <p
                  className="wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="1.1s"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam.
                </p>
                <Link href="https://rebrand.ly/freelancer-ud">
                  <span
                    className="main-btn wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="1.4s"
                    rel="nofollow"
                  >
                    Purchase Now
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-7">
              <div
                className="header_hero_image mt-50 wow fadeInRightBig"
                data-wow-duration="1.3s"
                data-wow-delay="1.8s"
              >
                {/* <Image src="/assets/images/hero.png" alt="hero" width={500} height={500} /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="header_hero_shape d-none d-lg-block"></div>
      </div>
    </section>
  );
}

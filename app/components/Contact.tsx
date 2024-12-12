import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="call_to_action_area">
      <div className="container">
        <div
          className="call_to_action_wrapper wow fadeIn"
          data-wow-duration="1.3s"
          data-wow-delay="0.5s"
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="call_to_action_box d-md-flex justify-content-between align-items-center">
                <div className="call_to_action_content">
                  <h3 className="action_title">
                    You are using free lite version of Freelancer
                  </h3>
                  <ul className="line">
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <p>
                    Please, purchase full version to get all elements, features, footer credit removal permission and commercial license
                  </p>
                </div>

                <div className="call_to_action_btn">
                  <Link href="https://rebrand.ly/freelancer-ud" passHref>
                    <span className="main-btn">
                      HIRE ME
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

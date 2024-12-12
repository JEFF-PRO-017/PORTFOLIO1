export default function Services() {
    return (
      <section id="services" className="services_area pt-115 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center pb-30">
                <h5 className="sub_title">Services</h5>
                <h3 className="main_title">Service I Provide</h3>
                <ul className="line">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            {servicesData.map((service, index) => (
              <div className="col-lg-4 col-sm-6" key={index}>
                <div
                  className={`single_service mt-30 wow fadeInUpBig`}
                  data-wow-duration="1.3s"
                  data-wow-delay={`${0.2 + index * 0.3}s`}
                >
                  <div className="service_icon">
                    <i className={service.icon}></i>
                  </div>
                  <div className="service_content">
                    <h4 className="service_title">
                      <a href="#">{service.title}</a>
                    </h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  const servicesData = [
    {
      icon: "lni lni-vector",
      title: "Graphic Design",
      description: "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
    },
    {
      icon: "lni lni-layout",
      title: "Web Design",
      description: "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
    },
    {
      icon: "lni lni-ux",
      title: "UI/UX Design",
      description: "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
    },
    {
      icon: "lni lni-code",
      title: "Frontend Development",
      description: "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
    },
    {
      icon: "lni lni-briefcase",
      title: "Business Analysis",
      description: "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
    },
    {
      icon: "lni lni-bullhorn",
      title: "Digital Marketing",
      description: "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
    },
  ];
  
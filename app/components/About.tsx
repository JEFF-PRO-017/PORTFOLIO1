import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about_area pt-70 pb-120">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div
              className="about_image mt-50 wow fadeInRightBig"
              data-wow-duration="1.3s"
              data-wow-delay="0.5s"
            >
              <Image
                src="/assets/images/about_hero.png"
                alt="Hero"
                width={500}
                height={500}
              />
              <div className="about_shape"></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="about_content mt-45 wow fadeInLeftBig"
              data-wow-duration="1.3s"
              data-wow-delay="0.5s"
            >
              <div className="section_title">
                <h5 className="sub_title">About</h5>
                <h3 className="main_title">Why You Hire Me?</h3>
                <ul className="line">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus.
              </p>

              <div className="about_skills pt-15">
                <SkillItem title="UI/UX Design" percentage={85} />
                <SkillItem title="Web Design" percentage={75} />
                <SkillItem title="HTML/CSS" percentage={90} />
                <SkillItem title="Sketch" percentage={65} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillItem({
  title,
  percentage,
}: {
  title: string;
  percentage: number;
}) {
  return (
    <div className="skill_item mt-20">
      <div className="skill_header">
        <h6 className="skill_title">{title}</h6>
        <div className="skill_percentage">
          <p>
            <span className="counter">{percentage}</span>%
          </p>
        </div>
      </div>
      <div className="skill_bar">
        <div className="bar_inner">
          <div
            className="bar progress_line"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

import '../projects.css';
import website1 from './Website-Blur1.png';
import website2 from './Website-Blur2.png';

export default function projectExplainer() {
  return (
    <div className="container">
      <div className="proj-summary">
        <div className="index-box">
          <div className="num">01</div>
          <div className="sub">WEBSITE</div>
        </div>
        <div className="exp-box">
          <div className="proj-title">Amnesty PLUS</div>
          <div className="proj-exp">
            An Official Branch group of Amnesty Korea, the human rights
            Non-governmental Organization. The website itself is built entirely
            by the students in the group. My contributions to the development
            include, but weren't limited to: frontend design and structural
            improvement. You can find me on 'About'-'IT department.' I go by the
            name Jeff here. Please Check the website out by clicking the image!
          </div>
        </div>
      </div>
      <div>
        <a
          className="img-box"
          href="https://amnestyplus.org/index.jsp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={website1} alt="" className="sample-img" />
          <img src={website2} alt="" className="sample-img" />
        </a>
      </div>
    </div>
  );
}

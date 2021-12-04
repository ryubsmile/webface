import '../projects.css';
import img1 from './vid.png';
import img2 from './code.png';

export default function projectExplainer() {
  return (
    <div className="container">
      <div className="proj-summary">
        <div className="index-box">
          <div className="num">03</div>
          <div className="sub">ARDUINO & 3D-Design</div>
        </div>
        <div className="exp-box">
          <div className="proj-title">Arduino Room Controller</div>
          <div className="proj-exp">
            Arduino RC is a month-long Arduino project done as a school project.
            In the small group of 4, I worked as the main Arduino programmer to
            use C++ and build the software. Intended to strengthen the COVID-19
            Protocol at school, the Arduino RC detects the number of people in a
            room with ultrasonic transducers, and emits a certain color of light
            according to the current accommodations to warn the new-coming
            visitors. Check more in the website and the github Repository.
          </div>
        </div>
      </div>
      <div className="img-box">
        <a
          href="https://sites.google.com/view/jddmindustry/home"
          className="sample-img"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={img1} alt="" width="100%" />
        </a>
        <a
          href="https://github.com/ryubsmile/arduinoRC"
          className="sample-img"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={img2} alt="" width="100%" />
        </a>
      </div>
    </div>
  );
}

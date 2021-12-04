import '../projects.css';
import img1 from './img1.png';
import img2 from './img2.png';

export default function projectExplainer() {
  return (
    <div className="container">
      <div className="proj-summary">
        <div className="index-box">
          <div className="num">02</div>
          <div className="sub">MACHINE-LEARNING</div>
        </div>
        <div className="exp-box">
          <div className="proj-title">Spotify Song Recommender</div>
          <div className="proj-exp">
            A machine-learning embedded song recommender that takes in
            user-chosen Spotify songs to generate a playlist that suits their
            taste of music. This project was a collaboration with my sister,
            made out of Django and Javascript. It is currently a download-able
            web application. If you want to try it out, travel to its Github
            Repository by clicking the image.
          </div>
        </div>
      </div>
      <div>
        <a
          className="img-box"
          href="https://github.com/ryubsmile/spotify-song-recommender"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={img1} alt="" className="sample-img" />
          <img src={img2} alt="" className="sample-img" />
        </a>
      </div>
    </div>
  );
}

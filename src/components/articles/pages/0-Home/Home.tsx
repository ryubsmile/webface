import BigText from '../BigText';
import './Home.css';
import PropType from '../PagesTemplate';

export default function Home(props: PropType) {
  return (
    <>
      {markDownMimic}
      <BigText title="Jaehyuk.ryu();" />
      {explanation}
    </>
  );
}

//prettier-ignore
const explanation = (
  <>
    Hi, I’m Jaehyuk. I am a current high school senior in Korea, interested in various fields of software development — mainly <i>Full-stack Web </i> and
    <i> Artificial Intelligence</i>. Whatever path you took to bring yourself
    here, welcome to my WebFace. <br /> <br />
    I hope you enjoy your time on this website, so feel free to look around!
  </>
);

const markDownMimic = (
  <div className="markDown">
    <p className="explanation">
      import <span className="white">Highschool</span>,{' { '}
      <span className="white"> math</span>,
      <span className="white"> science </span> {' } '} from '
      <span className="quote">/jeju/kisj/classOf2022</span>';
    </p>
  </div>
);

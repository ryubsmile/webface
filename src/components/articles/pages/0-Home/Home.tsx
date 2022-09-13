import PageIntro from '../PageIntro';
import './Home.css';
import PropType from '../PagesTemplate';

export default function Home(props: PropType) {
  return (
    <>
      {markDownMimic}
      <PageIntro title="Jaehyuk.ryu();" sub={explanation} />
    </>
  );
}

//prettier-ignore
const explanation = (
  <>
    Hi, I’m Jaehyuk. I am a freshman in the University of Toronto, interested in various fields of software development — mainly <b><i>Full-stack Web </i></b> and
    <b><i> Artificial Intelligence</i></b>. Whatever path it took for you to bring yourself
    here, welcome to my WebFace! <br /> <br />
    Feel free to look around, although at this point there's not much here 😅
  </>
);

const markDownMimic = (
  <div className="markDown">
    <p className="explanation">
      import <span className="white"> Year 1 </span>,{' { '}
      <span className="white"> Stats </span>,
      <span className="white"> Computer Science </span> {' } '} from '
      <span className="quote">/Canada/Toronto/UofT/</span>';
    </p>
  </div>
);

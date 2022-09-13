import PageIntro from '../PageIntro';
import PropType from '../PagesTemplate';

export default function About(props: PropType) {
  return (
    <>
      <PageIntro title="about();" sub={aboutDescription} />
    </>
  );
}

const aboutDescription = (
  <>
    Project WebFace is my frontend capstone portfolio, hosted by the Github
    Pages. WebFace is where I have all my visual creations made throughout my
    high school and college years. The main tech stacks include: HTML, CSS,
    Typescript, and React. WebFace itself is also a study that I am working on
    continuously.
    <br /> <br />
    The website is getting updated periodically, and in the middle of it there
    might be bugs and glitches in the website – especially in phones and other
    devices – so if you find them, please report to me by referring to the
    Contacts page.
    <br /> <br />
    You can bookmark this page if this interests you! Please navigate to the
    'about' tab to read more. Thanks! ☺️
  </>
);

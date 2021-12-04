import BigText from '../BigText';
import PropType from '../PagesTemplate';

export default function About(props: PropType) {
  return (
    <>
      <BigText title="about();" />
      {aboutDescription}
    </>
  );
}

// prettier-ignore
const aboutDescription = (
  <>
    Project WebFace is my frontend capstone portfolio, built via the Github Pages. <br />
    WebFace is where I upload all my visual creations made throughout my high school years. <br />
    The main tech stacks include: HTML, CSS, Typescript, and React. <br />
    WebFace itself is also a study that I am working on continuously. <br /> <br />
    It is getting updated regularly, and in the middle of it there might be bugs and glitches in the website 
    -- especially in phones and other devices -- so if you find them, <br />
    please report to me by referring to the Contacts page. You can bookmark this page if this interests you! <br />
    Navigate to the other tabs to read more. Thank you!
  </>
);

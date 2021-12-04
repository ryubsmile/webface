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
    The main tech stacks include: HTML, CSS, Typescript and React. <br />
    It is continuously getting updated, so please bookmark this page if you are interested. <br />
    Navigate to the other tabs to read more. Thank you!
  </>
);

import BigText from '../BigText';
import './Works.css';
import PropType from '../PagesTemplate';
import Amnesty from './Projects/AmnestyPLUS/AmnestyPLUS';

export default function Works(props: PropType) {
  return (
    <>
      <BigText title="works();" />
      <div>{explanation}</div>
      <br />
      <br />
      <hr className="divider" />
      <Amnesty />
      <hr className="divider" />
    </>
  );
}

const explanation = (
  <>
    A list of all my individual/group projects I worked as the software
    designer. Click the banner and you can look for more details.
  </>
);

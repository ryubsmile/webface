import PageIntro from '../PageIntro';
import './Works.css';
import PropType from '../PagesTemplate';
import Amnesty from './Projects/AmnestyPLUS/AmnestyPLUS';
import SongRec from './Projects/SpotifySongRec/SongRec';
import Arduino from './Projects/ArduinoRC/ArduinoRC';

export default function Works(props: PropType) {
  return (
    <>
      <PageIntro title="works();" sub={explanation} />
      <br />
      <br />
      <hr className="divider" />
      <Amnesty />
      <hr className="divider" />
      <SongRec />
      <hr className="divider" />
      <Arduino />
      <hr className="divider" />
    </>
  );
}

const explanation = (
  <>
    A list of all my individual/group projects I worked as the software
    designer. Click each banner and you will be able to look for more details.
  </>
);

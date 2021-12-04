import React from 'react';
import BigText from '../BigText';
import './Home.css';
import { TypeArticleProps } from '../PagesTemplate';

const explanation = (
  <>
    Hi, I’m Jaehyuk. I am a current high school senior in Korea, interested in
    various fields of software development — mainly <i>Full-stack Web </i> and
    <i> Artificial Intelligence</i>. Whatever path you took to bring yourself
    here, welcome to my WebFace. Feel free to look around!
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

const Article: React.FC<TypeArticleProps> = props => {
  return (
    <>
      {markDownMimic}
      <BigText title="Jaehyuk.ryu();" />
      {explanation}
    </>
  );
};

export default Article;

import React from 'react';
import BigText from '../BigText';
import { TypeArticleProps } from '../PagesTemplate';

const About: React.FC<TypeArticleProps> = props => {
  return (
    <>
      <BigText title="about();" />
    </>
  );
}

export default About;
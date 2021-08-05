import React from 'react';
import { ReactElement } from 'react';
import './BigText.css';

interface TypeProps {
  title: string;
  content_above: string | null;
}

const BigText: React.FC<TypeProps> = (props): ReactElement => {
  
  let [title="NoTitleException e", content_above=""] = [props.title, props.content_above];

  return (
    <div className="page-mask">
      <p>{content_above}</p>
      <h1 className="big-text">{title}</h1>
    </div>
  );
};

export default BigText;
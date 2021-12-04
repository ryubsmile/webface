import React from 'react';
import { ReactElement } from 'react';
import './BigText.css';

interface TypeProps {
  title: string;
}

const BigText: React.FC<TypeProps> = (props): ReactElement => {
  let [title="NoTitleException e"] = [props.title];

  return (
    <div className="page-mask">
      <h1 className="big-text">{title}</h1>
    </div>
  );
};

export default BigText;
import React from 'react';
import './BigText.css';

const BigText = (props) => {
  
  let [title="NoTitleException e", content_above=""] = [props.title, props.content_above];

  return (
    <div className="page-mask">
      <p>{content_above}</p>
      <h1 className="big-text">{title}</h1>
    </div>
  );
};

export default BigText;
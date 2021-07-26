import React from 'react';
import './BigText.css';

const BigText = (props) => {
  
  let [title="NoTitleException e", sub=""] = [props.title, props.sub];
  
  // debugger;
  return (
    <div className="pageMask">
      <p>{sub}</p>
      <h1 className="big-text">
        {title}
      </h1>
    </div>
  );
};

export default BigText;
import './PageIntro.css';
import React from 'react';

interface TypeProps {
  title: string;
  sub?: React.ReactElement | string;
}

export default function PageIntro(props: TypeProps) {
  const [title = 'NoTitleException e', sub] = [props.title, props.sub];
  return (
    <>
      <div className="page-mask">
        <h1 className="big-text">{syntaxHighlighter(title)}</h1>
      </div>
      <div className="page-exp">{sub}</div>
    </>
  );
}

// splits a word into '.' and '()' and highlight them.
const syntaxHighlighter = (text: String) =>
  text.split(/(\.|\(\))/g).map((item, i) =>
    item === '.' || item === '()' ? (
      <span className="syntax-highlight" key={i}>
        {item}
      </span>
    ) : (
      <span key={i}>{item}</span>
    )
  );

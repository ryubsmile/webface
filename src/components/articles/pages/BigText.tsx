import './BigText.css';

interface TypeProps {
  title: string;
}

export default function BigText(props: TypeProps) {
  let [title = 'NoTitleException e'] = [props.title];
  return (
    <div className="page-mask">
      <h1 className="big-text">{syntaxHighlighter(title)}</h1>
    </div>
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

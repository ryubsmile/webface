import React from 'react';
import BigText from '../BigText';
import './Contact.css'
import { TypeArticleProps } from '../PagesTemplate';

const Contact: React.FC<TypeArticleProps> = props => {
  //const name = props.name;
  return (
    <>
      <BigText title="contact();"/>
      <div className="contact-methods">
        {createMethodHTML}
      </div>
    </>
  );
}

export default Contact;

interface TypeMethod {
  name: string;
  href?: string;
  orgnTxt: string;
  hvrTxt?: string;
}

const contactMethods: TypeMethod[] = [
  {
    name: "email",
    href: "mailto:ryubsmile@gmail.com",
    orgnTxt: "EMAIL ME!",
    hvrTxt: "ryubsmile@gmail.com"
  },
  {
    name: "github",
    href: "https://github.com/ryubsmile",
    orgnTxt: "GITHUB",
    hvrTxt: "ryubsmile"
  },
  {
    name: "TBD",
    href: "/contact",
    orgnTxt: "To be added"
  },
];

const createMethodHTML: JSX.Element[] = contactMethods.map((item: TypeMethod, index: number)=>{
  return (
    <div className={"method " + item.name} key={index}>
      <a href={item.href} target="_blank" rel="noopener noreferrer">
        {item.orgnTxt}
      </a>
    </div>
  );
});

//function changeText(this: HTMLAnchorElement, textToChange: string){ this.textContent = textToChange; };
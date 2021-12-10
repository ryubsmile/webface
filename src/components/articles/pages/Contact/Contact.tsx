import PageIntro from '../PageIntro';
import './Contact.css';
import PropType from '../PagesTemplate';

// importing images
import emailImg from './icons/email.svg';
import githubImg from './icons/github.svg';
import igImg from './icons/instagram.svg';

export default function Contact(props: PropType) {
  //const name = props.name;
  return (
    <>
      <PageIntro
        title="contact();"
        sub={
          <>
            If you are interested, contact me! Email is the most preferred way
            to do so.
          </>
        }
      />
      <br />
      <div className="contact-methods">{createMethodHTML}</div>
    </>
  );
}

interface TypeMethod {
  name: string;
  href?: string;
  imgsrc?: string;
  altTxt: string;
}

const contactMethods: TypeMethod[] = [
  {
    name: 'email',
    href: 'mailto:ryubsmile@gmail.com',
    imgsrc: emailImg,
    altTxt: 'EMAIL ME!',
  },
  {
    name: 'github',
    href: 'https://github.com/ryubsmile',
    imgsrc: githubImg,
    altTxt: 'GITHUB',
  },
  {
    name: 'instagram',
    href: 'https://www.instagram.com/ryubsmile/',
    imgsrc: igImg,
    altTxt: 'Instagram',
  },
];

const createMethodHTML: JSX.Element[] = contactMethods.map(
  (item: TypeMethod, index: number) => (
    <div className={'method ' + item.name} key={index}>
      <a href={item.href} target="_blank" rel="noopener noreferrer">
        <img src={item.imgsrc} alt={item.altTxt} />
      </a>
    </div>
  )
);

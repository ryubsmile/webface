import React from 'react';
import BigText from '../BigText';
import './Contact.css'

const Contact: React.FC = () => {
  return (
    <>
      <BigText title="contact();" content_above="" />
      <div className="contact-methods">
        <div className="method email"><a href="mailto:ryubsmile@gmail.com" target="_blank" rel="noopener noreferrer">ryubsmile@gmail.com: mail</a></div> {/* email me! */}
        <div className="method github"><a href="https://github.com/ryubsmile" target="_blank" rel="noopener noreferrer">ryubsmile: github</a></div> {/* star me! */}
        <div className="method TBD"><a href=";" rel="noopener noreferrer">To be added more...</a></div> {/* wait for future updates or contact me! */}
      </div>
    </>
  );
}

export default Contact;
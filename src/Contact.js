import React from 'react';
import './Contact.css';
import './Resume-Anule-Ndukwu.pdf';

const resumeLink = 'https://anule.github.io/Anule-Ndukwu-Resume.pdf';

const Contact = () => (
  <section className="slide-out" id="contact">
    <div id="contact-icons">
      <a href="https://www.linkedin.com/in/anule-ndukwu">
        <i className="fa fa-linkedin-square fa-4x" aria-hidden="true" />
      </a>
      <a href="https://github.com/anule">
        <i className="fa fa-github fa-4x" aria-hidden="true" />
      </a>
      <a href="mailto:anule.ndukwu@gmail.com">
        <i className="fa fa-envelope fa-4x" aria-hidden="true" />
      </a>
      <a href="https://anulendukwu.space">
        <i className="fa fa-camera-retro fa-4x" aria-hidden="true" />
      </a>
      <a href={resumeLink}>
        <i class="fa fa-file fa-3x"></i>
      </a>
    </div>
  </section>
);

export default Contact;

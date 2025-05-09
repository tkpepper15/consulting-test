import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="w-full h-[600px]">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd0JQ4ESoLuHN7dJltVAQvN92pB1dqvFmvtorvUBz8KrP7dCg/viewform?embedded=true"
        className="w-full h-full"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >
        Loading…
      </iframe>
    </div>
  );
};

export default ContactForm; 
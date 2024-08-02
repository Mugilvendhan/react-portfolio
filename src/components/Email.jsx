/* 
const EmailLink = () => {
  
    const email = "mugil0602@gmail.com";
  return (
    <a 
    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`} 
      target="_blank"
      textDecoration="none"
      
      className="text-neutral-100 underline transition-transform duration-300 transform hover:scale-100"
    >
      mugil0602@gmail.com
    </a>
  );
};

export default EmailLink;
 */

///mobileview


/* const EmailLink = () => {
  const email = "mugil0602@gmail.com";

  const handleClick = (event) => {
    event.preventDefault();
    window.location.href = `mailto:${email}`;
  };

  return (
    <a 
      href={`mailto:${email}`} 
      onClick={handleClick}
      className="text-neutral-100 underline transition-transform duration-300 transform hover:scale-100"
      style={{ textDecoration: 'none' }}
    >
      mugil0602@gmail.com
    </a>
  );
};

export default EmailLink; */

/* 

import  { useEffect, useState } from 'react';

const EmailLink = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const email = "mugil0602@gmail.com";

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isLargeScreen) {
    return (
      <a 
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`} 
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-100 underline-offset-1 decoration-white transition-transform duration-300 transform hover:scale-100"
      >
        {email}
      </a>
    );
  }

  const handleClick = (event) => {
    event.preventDefault();
    window.location.href = `mailto:${email}`;
  };

  return (
    <a 
      href={`mailto:${email}`} 
      onClick={handleClick}
      className="text-neutral-100 underline-offset-1 decoration-white transition-transform duration-300 transform hover:scale-100"

    >
      {email}
    </a>
  );
};

export default EmailLink; */


  

import { useEffect, useState } from 'react';

const EmailLink = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const email = "mugil0602@gmail.com";

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const commonClasses = "text-neutral-100 underline transition-transform duration-300 transform hover:scale-100";
  const underlineColor = "underline decoration-white"; // Tailwind class for underline color

  return (
    <a 
      href={isLargeScreen ? `https://mail.google.com/mail/?view=cm&fs=1&to=${email}` : `mailto:${email}`} 
      target={isLargeScreen ? "_blank" : undefined}
      rel={isLargeScreen ? "noopener noreferrer" : undefined}
      onClick={isLargeScreen ? undefined : (event) => {
        event.preventDefault();
        window.location.href = `mailto:${email}`;
      }}
      className={`${commonClasses} ${underlineColor}`}
    >
      {email}
    </a>
  );
};

export default EmailLink;

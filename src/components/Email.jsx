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

const EmailLink = () => {
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

export default EmailLink;

  
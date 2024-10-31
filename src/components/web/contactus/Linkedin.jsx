import React from 'react';
import { useNavigate } from 'react-router-dom';

const Linkedin = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      // Open the Facebook share link in a new tab
      window.open('https://www.linkedin.com/in/sameer-baker-52685a75/', '_blank'); 
      
      // Navigate back to the previous page
      navigate(-1); // Go back to the last page in the history stack
    }, 500); // Delay to ensure the navigation works properly
    
    return () => clearTimeout(timer);
  }, [navigate]); // Ensure navigate is included in the dependency array

  return (
    <div>
      <h1>Redirecting to Linkedin...</h1>
    </div>
  );
};

export default Linkedin;

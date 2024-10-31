import React from 'react';
import { useNavigate } from 'react-router-dom';

const Phone = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      // Open the Facebook share link in a new tab
      window.open('https://wa.me/+972592864042', '_blank'); 
      
      // Navigate back to the previous page
      navigate(-1); // Go back to the last page in the history stack
    }, 500); // Delay to ensure the navigation works properly
    
    return () => clearTimeout(timer);
  }, [navigate]); // Ensure navigate is included in the dependency array

  return (
    <div>
      <h1>Redirecting to Phone...</h1>
    </div>
  );
};

export default Phone;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Instagram = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      // Open the Facebook share link in a new tab
      window.open('https://www.instagram.com/sameerbaker/profilecard/?igsh=MXRnejl4dDVpbDEybw==', '_blank'); 
      
      // Navigate back to the previous page
      navigate(-1); // Go back to the last page in the history stack
    }, 500); // Delay to ensure the navigation works properly
    
    return () => clearTimeout(timer);
  }, [navigate]); // Ensure navigate is included in the dependency array

  return (
    <div>
      <h1>Redirecting to Instagram...</h1>
    </div>
  );
};

export default Instagram;

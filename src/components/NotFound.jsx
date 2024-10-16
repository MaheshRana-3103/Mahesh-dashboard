// EmptyPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./commonStyles.css";

const NotFound = () => {
  return (
    <div className='not_found_container'>
      <h1>404</h1>
      <p>Look likes this page doesn't exist !</p>
      <Link  to="/dashboard/default" className='back_to_home_btn'>Back to Home</Link>
    </div>
  );
};

export default NotFound;
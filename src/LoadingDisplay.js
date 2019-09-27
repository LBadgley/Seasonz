import React from 'react';
import Loader from 'react-loader-spinner';
import './SeasonIcons.css';

const LoadingDisplay = props => {
  return (
    <div className='loading-display'>
      <Loader type='BallTriangle' color='darkGrey' height={150} width={150} timeout={10000} />
      <div className="loadingText">{props.message}</div>
    </div>
  );
};

LoadingDisplay.defaultProps = {
  message: 'Loading please wait...'
};

export default LoadingDisplay;

import React from 'react';
import Loader from 'react-loader-spinner';
import './LoadingDisplay.css';

const LoadingDisplay = props => {
  return (
    <Loader type='Hearts' color='pink' height={80} width={80} timeout={3000} />
  )
}


export default LoadingDisplay;

import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from  'react-loader-spinner'

const Loading = () => {
    return (
      <div className='flex justify-center mt-32'>
        <Oval
        
    height="70"
    
    width="70"
    color='grey'
    ariaLabel='loading'
  />
      </div>
    );
};

export default Loading;
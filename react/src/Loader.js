import React from 'react';
import { Audio } from 'react-loader-spinner';


const Loader = () => {
  return (
    <>
       <div className="full-screen-loader">
      <Audio
        height={80}
        width={80}
        radius={9}
        color="green"
        ariaLabel="loading"
      />
    </div>
    </>
  );
};

export default Loader;

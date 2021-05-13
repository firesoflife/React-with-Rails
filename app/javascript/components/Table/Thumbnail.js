import React from 'react';

const Thumbnail = () => {
  return (
    <div className='py-4'>
      <iframe
        width='100%'
        height='100%'
        src='https://www.youtube.com/embed/dsPsJY54afw'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Thumbnail;

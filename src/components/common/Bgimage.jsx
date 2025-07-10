// src/components/common/Bgimage.jsx
import React from 'react';
import CityHall from '../../assets/City_Hall_of_El_Salvador_City.jpg';

const BgImage = () => {
  return (
    <>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${CityHall})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* White overlay */}
      <div className="absolute inset-0 bg-white opacity-35"></div>
    </>
  );
};

export default BgImage;

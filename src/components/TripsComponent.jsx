import React, { useState } from "react";


const TripsComponent = ({countryName, countryImage}) => {

  
  return (
    <div className="flex flex-row bg-[#FFFFFF] items-center p-4 rounded-xl w-[380px] shadow-md">
        <img src={countryImage} alt="" className="mr-4"/>
        <div>
            <h3 className="text-[#2d4b2d] font-semibold">{countryName}</h3>
            <p className="text-[#112211] font-medium">Vuelos • Hoteles</p>
        </div>
    </div>
  );
};

export default TripsComponent;

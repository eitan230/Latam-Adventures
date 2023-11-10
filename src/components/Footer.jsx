import React, { useState } from "react";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="flex bg-[#8DD3BB] gap-32 pb-16 pt-48 justify-center relative mt-48">
      <Newsletter></Newsletter>
      <div>
        <img src="/latamLogoBlack.svg" alt="" className="w-[142px]" />
      </div>
      <ul>
        <h4 className="text-lg font-bold mb-2">Nuestros Destinos</h4>
        <li>Colombia</li>
        <li>Argentina</li>
        <li>Mexico</li>
        <li>Peru</li>
      </ul>
      <ul>
        <h4 className="text-lg font-bold mb-2">Planes Turísticos</h4>
        <li>Colombia</li>
        <li>Argentina</li>
        <li>Mexico</li>
        <li>Peru</li>
      </ul>
      <ul>
        <h4 className="text-lg font-bold mb-2">Blogs</h4>
      </ul>
      <ul>
        <h4 className="text-lg font-bold mb-2">Sobre Nosotros</h4>
        <li>¿Quiénes Somos?</li>
      </ul>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavHeader = () => {

  
  return (
    <header className="background-header px-11 py-9 rounded-3xl w-[1380px] h-[581px] mx-10 relative">
        <nav className="flex items-center justify-between relative" >
            <div className="flex">
                <a href="#" className="flex pr-7 font-semibold text-[#FFFFFF] text-sm"><img src="/planeVector.svg" alt="" className="pr-1" />Buscar Vuelo</a>
                <a href="#" className="flex font-semibold text-[#FFFFFF] text-sm"><img src="/bedVector.svg" alt="" className="pr-1" />Buscar Hotel</a>
            </div>
            <img src="/logoLatamWhite.svg" alt="Logo de Latam Adventures" className="w-[150px] absolute right-[575px]"/>
            <div>
                <Link  to="/login" className="text-sm text-[#FFFFFF] font-bold pr-6">Iniciar Sesión</Link>
                <Link to="/register" className="w-44 bg-[#FFFFFF] text-sm font-bold py-3 px-4 rounded-md text-center">Registro</Link>
            </div>
        </nav>
        <div className="flex flex-col absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
          <h2 className="text-5xl font-bold text-[#FFFFFF] text-center mb-5">Nuevo destino</h2>
          <h2 className="text-8xl font-bold text-[#FFFFFF] text-center mb-5">México</h2>
          <p className="text-xl font-medium text-[#FFFFFF] text-center">Ofertas especiales de lanzamiento</p>
        </div>
        
        <p></p>
    </header>
  );
};

export default NavHeader;

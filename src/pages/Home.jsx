import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center py-64">
      <img
        src="/latamLogo.svg"
        alt="Logo de Latam Adventures"
        className="w-80 mb-10"
      />
    <h1 className="text-2xl" >Pagina Home en proceso</h1>
    <div className="flex gap-8 mt-10">
        <Link  to="/login" className="w-44 bg-[#8DD3BB] text-sm font-bold py-2 rounded-sm text-center">Iniciar Sesión</Link>
      <Link to="/register" className="w-44 bg-[#8DD3BB] text-sm font-bold py-2 rounded-sm text-center">Registro</Link>
    </div>
      
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { authenticated, login, logout } = useAuth();
  const [usuario, setUsuario] = useState("John Deere")

  useEffect(() => {
    const usuarioRecuperado = JSON.parse(localStorage.getItem('nombreUsuario'));
    setUsuario(usuarioRecuperado)
    console.log(usuarioRecuperado); // Deberías obtener el objeto original
    
  }, [])
  

  return (
    <header className="bg-[#FFFFFF] px-11 py-5 w-full shadow-md">
        <div className="flex justify-center ">
            <nav className="flex items-center justify-between w-[1232px]" >
                <div className="flex justify-self-start">
                    <a className="flex pr-7 font-semibold text-[#112211] text-sm"><img src="/planeVector.svg" alt="" className="pr-1 invert" />Buscar Vuelo</a>
                    <a className="flex pr-7 font-semibold text-[#112211] text-sm"><img src="/bedVector.svg" alt="" className="pr-1 invert" />Buscar Hotel</a>
                    {/* <Link to="/hotels" className="flex pr-7 font-semibold text-[#112211] text-sm"><img src="/bedVector.svg" alt="" className="pr-1 invert" />Buscar Hotel</Link> */}
                </div>
                <Link to="/" className="w-[150]" ><img src="/latamLogoBlack.svg" alt="Logo de Latam Adventures" className="w-[150px]"/></Link>
                {/* <img src="/latamLogoBlack.svg" alt="Logo de Latam Adventures" className="w-[150px]"/> */}
                {authenticated ? (
                    <div className="flex flex-row items-center">
                        <a href="#" className="flex font-semibold pr-5 text-sm"><img src="/corazon.svg" alt="" className="pr-2" /> Favoritos</a>
                        <img src="barra.svg" alt="" />
                        <div className="flex flex-row items-center pl-6">
                            <img src="/sinfoto.png" className="w-10" alt="" />
                            <h3 className="pl-1 font-semibold text-sm">{usuario}</h3>
                        </div>
                    </div>
                ) : (
                    <div>
                        <Link  to="/login" className="text-sm text-[#112211] font-bold pr-6">Iniciar Sesión</Link>
                        <Link to="/register" className="w-44 bg-[#FFFFFF] text-sm font-bold py-3 px-4 rounded-md text-center">Registro</Link>
                    </div>

                )
                }
                {/* <div>
                    <Link  to="/login" className="text-sm text-[#112211] font-bold pr-6">Iniciar Sesión</Link>
                    <Link to="/register" className="w-44 bg-[#FFFFFF] text-sm font-bold py-3 px-4 rounded-md text-center">Registro</Link>
                </div> */}
            </nav>            
        </div>

    </header>
  );
};

export default Navbar;
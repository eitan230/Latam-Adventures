import React from "react";
import { Link } from "react-router-dom";
import NavHeader from "../components/NavHeader"
import TripsComponent from "../components/TripsComponent";
import { places } from "../constants/TripsInfo.js"
import Newsletter from "../components/Newsletter.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

const Home = () => {
  return (
    <div className="flex flex-col pt-6">
      <div className="flex flex-col items-center relative">
        <NavHeader/>
      </div>
      
      {/* <div className="flex gap-8 mt-10">
          <Link to="/verification" className="w-44 bg-[#8DD3BB] text-sm font-bold py-2 rounded-sm text-center">Verificacion</Link>
          <Link to="/newPassword" className="w-44 bg-[#8DD3BB] text-sm font-bold py-2 rounded-sm text-center">Nueva Pass</Link>
      </div> */}
      <div className="w-[1232px] self-center justify-center">
        <div className="flex justify-between mt-12 mb-11 items-center">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold text-start jus">Planea tu viaje perfecto</h1>
          <p className="text-base text-[#2d4b2d]">Búsca vuelos y hoteles en los destinos más búscados</p>
        </div>
          <button className="h-11 border-[1px] border-[#8DD3BB] font-medium rounded-md py-0 px-5">Mostrar mas destinos</button>
        </div>
        <div className="flex flex-wrap gap-[46px]">
          {
              places.map(place => {
                  const {country, image} = place
                  return(
                    <TripsComponent 
                      key={country}
                      countryName={country}
                      countryImage={image}
                    />
                  )

              }  )
          }
        </div>  
      </div>
      <div className="flex justify-center gap-5 mt-16">
        <div className="w-[604px] h-[559px] background-flight flex flex-col items-center justify-end rounded-[20px]">
          <h3 className="text-[#FFFFFF] text-[40px] font-bold">Vuelos</h3>
          <p className="text-[#FFFFFF] mb-3">Busca vuelos en los destinos más búscados</p>
          <button className=" bg-[#8DD3BB] py-2 px-4 mb-16 rounded" >Ver vuelos</button>
        </div>
        <div className="w-[604px] h-[559px] background-planes flex flex-col items-center justify-end rounded-[20px]">
          <h3 className="text-[#FFFFFF] text-[40px] font-bold">Planes turísticos</h3>
          <p className="text-[#FFFFFF] mb-3">Buscalos hoteles más populares</p>
          <button className=" bg-[#8DD3BB] py-2 px-4 mb-16 rounded" >Ver paquetes</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;

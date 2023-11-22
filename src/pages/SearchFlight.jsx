import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import FlightComponent from "../components/FlightComponent.jsx";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import VueloBuscado from "../components/VueloBuscado.jsx";

const SearchFlight = () => {
  const [sliderValue, setSliderValue] = useState([50, 1200]);
  const [viajeRecuperado, setViajeRecuperado] = useState({})

  useEffect(() => {
    const objetoRecuperado = JSON.parse(localStorage.getItem('vueloBuscar'));
    setViajeRecuperado(objetoRecuperado)
    console.log(objetoRecuperado); // Deberías obtener el objeto original
  }, [])
  


  const handleSliderChange = (value) => {
    setSliderValue(value);
    console.log(value)
  };

  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <div className="flex justify-center mt-7">
        <VueloBuscado></VueloBuscado>
      </div>
      <div className="w-[1232px] flex flex-col self-center">
        <div className="flex gap-6 mt-7">
          
          <div className="w-[343px] flex flex-col">
            <h2 className="text-xl font-semibold mb-6">Filtros</h2>
            <div >
              <h3 className="font-semibold pb-3">Precio</h3>
              <Slider
                range
                min={50}
                max={1200}
                defaultValue={[50, 1200]}
                handleStyle={{ 
                  backgroundColor: '#8DD3BB', // Color de las bolitas
                border: '2px solid #8DD3BB',
                height: 20, // Altura de las bolitas
                width: 20, // Ancho de las bolitas
                marginLeft: -10, // Ajuste de posición horizontal
                marginTop: -8, // Ajuste de posición vertical
                  }}
                  trackStyle={{
            backgroundColor: '#112211',
            
          }}
              onChange={handleSliderChange}
              />
              <div className="flex justify-between">
                <h2>${sliderValue[0]}</h2>
                <h2>{sliderValue[1]}</h2>
              </div>            
            </div>

          </div>
          <div>
          <img src="/divide.svg" alt="" />

          </div>
          <div className="flex flex-col self-start gap-7">
            <FlightComponent origen={viajeRecuperado.origen} destino={viajeRecuperado.destino}></FlightComponent>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default SearchFlight;

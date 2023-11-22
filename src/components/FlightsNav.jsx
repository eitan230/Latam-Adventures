import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { flightsSchema } from "../validations/FlightsNavValidation";
import { registerSchema } from "../validations/RegisterValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const FlightsNav = () => {
  const countriesList = [
    "Argentina",
    "Brasil",
    "Chile",
    "Colombia",
    "Perú",
    "Uruguay",
  ];

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const destinationsUrl =
          "https://tribbolabtravel-production.up.railway.app/viaje";
        const response = await fetch(destinationsUrl);

        if (response.ok) {
          const data = await response.json();
          setDestinations(data);
          console.log(destinations);
          console.log(data);
        } else {
          setError("Error al obtener la lista de destinos");
          setDestinations([]);
        }
      } catch (error) {
        setError("Error de red al obtener la lista de destinos");
        setDestinations([]);
      }
    };

    fetchDestinations();
  }, []); // Se ejecuta solo una vez al montar el componente

  const handleSearch = async (destinini) => {
    try {
      // Construye la URL del endpoint de búsqueda de vuelos
      const flightsUrl = `https://tribbolabtravel-production.up.railway.app/viaje/buscar?destino=${destinini}`;
      console.log(destinini);
      //const flightsUrl = `http://localhost:8080/viaje/?fechaSalida=2024-01-01&fechaLlegada=2024-01-02`;
      const response = await fetch(flightsUrl);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setFlights(data);
        setError(null);
        navigate('/flights')
      } else {
        setError("Error al buscar vuelos");
        setFlights([]);
      }
    } catch (error) {
      setError("Error de red");
      setFlights([]);
    }
  };

  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(flightsSchema),
  });

  const [filter, setFilter] = useState(null);

  const handleFilter = (value) => {
    setFilter(value);
  };
  const [fechaInicio, setFechaInicio] = useState(null);
  const [fechaFin, setFechaFin] = useState(null);

  const buscarVuelos = () => {
    // Lógica para buscar vuelos con los valores de origen, destino, fechaInicio y fechaFin
    // console.log("Origen:", origen);
    // console.log("Destino:", destino);
    // console.log("Fecha de inicio:", fechaInicio);
    // console.log("Fecha de fin:", fechaFin ? format(fechaFin, 'dd/MM/yyyy') : null);
  };

  const onSubmit = (data) => {
    console.log(data);
    console.log(data.destino);
    setDestination(data.destino);
    localStorage.setItem('vueloBuscar', JSON.stringify(data));
    handleSearch(data.destino);
  };

  const filtered = "border-b-2 border-[#8DD3BB]";

  return (
    <div className="flex flex-col w-[1232px] bg-[#FFFFFF] rounded-2xl shadow-md absolute top-[535px]">
      <div className="flex py-2 px-6">
        <button
          onClick={() => handleFilter("flights")}
          className={`flex mr-7 font-semibold text-[#112211] text-sm h-14 items-center ${
            filter == "flights" ? filtered : "border-b-2 border-[#FFFFFF]"
          }`}
        >
          <img src="/planeVector.svg" alt="" className="w-[26px] pr-1 invert" />
          Vuelos
        </button>
        <button
          onClick={() => handleFilter("hotels")}
          className={`flex font-semibold text-[#112211] text-sm h-14 items-center ${
            filter == "hotels" ? filtered : "border-b-2 border-[#FFFFFF]"
          }`}
        >
          <img src="/bedVector.svg" alt="" className="w-[24px] mr-1 invert" />
          Hoteles
        </button>
      </div>
      <form
        className="flex flex-col items-center px-14 pt-8 pb-9"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center">
          <legend className={`flex flex-col ${errors.origen ? 'mb-1' : 'mb-5'}`}>
            <div className="flex flex-col relative">
              <label
                htmlFor="origen"
                className={`text-xs absolute bottom-[34px] left-2 bg-[#FAFBFC;] px-1`}
              >
                Origen
              </label>
              <select
                name="origen"
                id="origen"
                className={`w-[293px] border-[1px] px-3 py-3 text-xs border-[#79747E] rounded-sm bg-transparent outline-0`}
                {...register("origen")}
              >
                <option value="" disabled>
                  Seleccione...
                </option>
                {destinations.map((destin) => {
                  const { destino, id } = destin;
                  return (
                    <option key={destin.id} value={destin.destino}>
                      {destin.destino}
                    </option>
                  );
                })}
              </select>
            </div>
            <p className="text-red-600 text-xs font-bold">
              {errors?.origen?.message}
            </p>
            {/* <input
            type="text"
            name="origen"
            id="origen"
            className={`w-[293px] border-[1px] px-3 py-3 text-xs border-[#79747E] rounded-sm bg-transparent outline-0`}
          /> */}
          </legend>
          <img src="/flechas.svg" alt="" className="mb-5 px-5" />
          <legend className={`flex flex-col ${errors.destino ? 'mb-1' : 'mb-5'}`}
          >
            <div className="flex flex-col relative">
              <label
                htmlFor="password"
                className={`text-xs absolute bottom-[34px] left-2 bg-[#FAFBFC;] px-1`}
              >
                Destino
              </label>
              <select
                name="destino"
                id="destino"
                className={`w-[293px] border-[1px] px-3 py-3 text-xs border-[#79747E] rounded-sm bg-transparent outline-0`}
                {...register("destino")}
              >
               <option value="" disabled>
                  Seleccione...
                </option>
                {destinations.map((destin) => {
                  const { destino, id } = destin;
                  return (
                    <option key={destin.id} value={destin.destino}>
                      {destin.destino}
                    </option>
                  );
                })}
              </select>
            </div>
            <p className="text-red-600 text-xs font-bold">
              {errors?.destino?.message}
            </p>
          </legend>
          <div
            className={`w-[170px] flex flex-col items-center ml-5 mr-9 ${
              errors.fechaInicio ? "mb-0 mt-3" : "mb-6"
            }`}
          >
            <div className="flex">
              <img src="/calendar.svg" alt="" className="mr-3" />
              <div className="flex flex-col">
                <label
                  htmlFor="fechaInicio"
                  className="block text-sm font-medium text-gray-600"
                >
                  Ida
                </label>
                <input
                  type="date"
                  id="fechaInicio"
                  className="w-full border-none"
                  {...register("fechaInicio")}
                />
              </div>
            </div>
            <p className="text-red-600 text-xs font-bold">
              {errors?.fechaInicio?.message}
            </p>
          </div>
          <div
            className={`flex flex-col items-center ${
              errors.fechaFin ? "mb-0" : "mb-6"
            }`}
          >
            <div className="flex">
              <img src="/calendar.svg" alt="" className="mr-3" />
              <div className="flex flex-col">
                <label
                  htmlFor="fechafin"
                  className="block text-sm font-medium text-gray-600"
                >
                  Regreso
                </label>
                <input
                  type="date"
                  id="fechaFin"
                  className="w-full border-none"
                  {...register("fechaFin", { defaultValue: "2023-12-01" })}
                />
              </div>
            </div>
            <p className="text-red-600 text-xs font-bold">
              {errors?.fechaFin?.message}
            </p>
          </div>
        </div>
        <button className="text-sm font-medium bg-[#8DD3BB] py-2 px-4 rounded self-end">
          Mostrar Vuelos
        </button>
      </form>
      <div className="flex justify-end mx-6 mb-7"></div>
    </div>
  );
};

export default FlightsNav;

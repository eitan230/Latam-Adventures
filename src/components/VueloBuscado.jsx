import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { flightsSchema } from "../validations/FlightsNavValidation";
import { yupResolver } from "@hookform/resolvers/yup";

const VueloBuscado = () => {

  const [destinations, setDestinations] = useState([]);
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState(null);
  const [viajeRecuperado, setViajeRecuperado] = useState({})
  const [fechaFinal, setFechaFinal] = useState("17/03/2024")
  const [fechaInicial, setFechaInicial] = useState("17/03/2024")


  useEffect(() => {
    const objetoRecuperado = JSON.parse(localStorage.getItem('vueloBuscar'));
    setViajeRecuperado(objetoRecuperado)
    console.log(objetoRecuperado); // Deberías obtener el objeto original
    const newFecha = new Date (objetoRecuperado.fechaFin)
    const fechaFinSolo = newFecha.toISOString().split('T')[0];
    console.log(fechaFinSolo)
    setFechaFinal(fechaFinSolo)

    const newFechaIni = new Date (objetoRecuperado.fechaInicio)
    const fechaInicialSolo = newFechaIni.toISOString().split('T')[0];
    console.log(fechaInicialSolo)
    setFechaInicial(fechaInicialSolo)

  }, [])

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
      } else {
        setError("Error al buscar vuelos");
        setFlights([]);
      }
    } catch (error) {
      setError("Error de red");
      setFlights([]);
    }
  };

  const handleFechaChange = (e) => {
    // Actualizar la fecha en el estado cuando el usuario modifica el campo
    setFechaFinal(e.target.value);
    console.log(e.target.value)
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(flightsSchema),
  });

  const [fechaInicio, setFechaInicio] = useState(null);
  const [fechaFin, setFechaFin] = useState(null);


  const onSubmit = (data) => {
    console.log(data);
    console.log(data.destino);
    setDestination(data.destino);
    localStorage.setItem('vueloBuscar', JSON.stringify(data));
    handleSearch(data.destino);
  };


  return (
    <div className="flex flex-col w-[1232px] bg-[#FFFFFF] rounded-2xl shadow-md">
      <form
        className="flex items-center justify-center pt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
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
                  value={fechaInicial}
                  onChange={handleFechaChange}
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
                  value={fechaFinal}
                  onChange={(e) => handleFechaChange(e)}
                  className="w-full border-none"
                  {...register("fechaFin")}
                />
              </div>
            </div>
            <p className="text-red-600 text-xs font-bold">
              {errors?.fechaFin?.message}
            </p>
          </div>
        <button className="text-sm font-medium bg-[#8DD3BB] ml-3 py-2 px-3 rounded mb-6 h-[42px]">
          <img src="/lupa.svg" alt="" />
        </button>
      </form>

    </div>
  );
};

export default VueloBuscado;
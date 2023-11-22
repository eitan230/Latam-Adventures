import React, { useState } from "react";

const FlightComponent = ({origen, destino}) => {

  return (
    <div className="w-[840px] rounded-xl py-6 px-4 shadow-md flex bg-[#FFFFFF]">
        <img src="/avianca.svg" alt="" className="self-start"/>
        <div className="flex flex-col">
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                    <h2 className="w-[40px] text-xs font-medium border-[1px] text-center py-2 rounded-sm border-[#8DD3BB] mr-2">4.2</h2>
                    <p className="text-xs"><b>Muy bueno</b> 54 reviews</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-xs font-medium">Precios desde</p>
                    <h2 className="text-[#FF8682] text-2xl font-bold">$104</h2>
                </div>
            </div>
            <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center justify-evenly gap-10">
                    <div className="flex">
                        <h2 className="text-base font-semibold">Origen:</h2>
                        <p className="pl-5">{origen}</p>
                    </div>
                    <div className="flex">
                        <h2 className="text-base font-semibold">Origen:</h2>
                        <p className="pl-5">{destino}</p>
                    </div>
     
                </div>
                <div className="flex items-center gap-10">
                    <input type="checkbox" />
                    <h2 className="text-base font-semibold">12:00 pm - 01:28 pm</h2>
                    <p className="text-sm font-semibold">Sin Escalas</p>
                    <h2 className="text-base font-semibold">2h 28m</h2>              
                </div>
            </div>
            <div>
                <img src="/divideFlight.svg" alt="" className="mb-4"/>
                <button className="w-[600px] bg-[#8DD3BB] py-2 px-4 font-semibold text-sm rounded-[4px]">Ver Tarifas</button>
            </div>
        </div>
    </div>
  );
};

export default FlightComponent;

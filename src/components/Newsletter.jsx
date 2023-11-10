import React, { useState } from "react";


const Newsletter = () => {

  
  return (
    <div className="w-[1232px] h-[245px] bg-[#CDEAE1] rounded-[20px] flex flex-col justify-center items-center absolute bottom-60">
    <div>  
        <h2 className="text-5xl font-bold leading-[55px]">Subscríbete al <br/> Newsletter</h2>
        <p className="text-sm text-[#112211] font-medium mb-4">¡Inspírate! Recibe descuentos, tips y conoce las historias de nuestros viajeros.</p>
        <form action="">
            <input type="text" name="email" id="email" className="w-96 py-3 px-4 rounded mr-4 outline-0" placeholder="Correo electronico"/>
            <button className="bg-[#112211] py-3 px-4 text-[#FFFFFF] rounded">Suscribir</button>
        </form>
     </div>   
    </div>
  );
};

export default Newsletter;

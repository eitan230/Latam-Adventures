import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Verification = () => {
  const {
    register,
    handleSubmit
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex m-14 gap-16 justify-center content-center">
      <div className="flex flex-col">
      <Link to="/" className="w-[100px] h-[30px] mb-10" ><img src="/latamLogo.svg" alt="Logo de Latam Adventures" className="w-[100px] h-[30px] "/>
        </Link>
        <Link to="/login" className="flex flex-row pl-1 font-semibold pb-5"><img src="/flecha.svg" className="pr-3" alt="" /> Iniciar Sesion</Link>
        <h2 className="font-bold text-3xl mb-4">Verificación</h2>
        <p className="text-sm mb-8">Hemos enviado un código a tu correo.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
          <legend className="flex flex-col mb-2">
            <label htmlFor="verificationCode" className="text-xs">
              Ingresa el código
            </label>
            <input
              type="text"
              name="verificationCode"
              className={`w-[406px] border-[1px] px-3 py-3 text-xs mb-3 border-[#79747E] rounded-sm bg-transparent outline-0`}
              {...register("verificationCode")}
            />
            {/* <p className="text-red-600 text-sm font-bold">
              {errors?.email?.message}
            </p> */}
            <p className="text-xs mb-3">
            ¿No recibiste el codigo?{" "}
            <a href="#" className="text-red-400 font-semibold ">
              Reenviar
            </a>{" "}
          </p>
          </legend>
          <button className="bg-[#8DD3BB] text-xs font-bold py-3 rounded-sm">
          Verificar
          </button>
        </form>
      </div>
      <img src="/loginFeatures.svg" className="rounded-2xl w-[418px]" />
    </div>
  );
};

export default Verification;

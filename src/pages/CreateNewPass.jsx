import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CreateNewPass = () => {
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
        <img
          src="/latamLogo.svg"
          alt="Logo de Latam Adventures"
          className="w-[100px] mb-10"
        />
        <h2 className="font-bold text-3xl mb-10">Crea una nueva <br/> contraseña</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
          <legend className="flex flex-col mb-2">
            <label htmlFor="newPassword" className="text-xs">
                Nueva Contraseña
            </label>
            <input
              type="text"
              name="newPassword"
              className={`w-[406px] border-[1px] px-3 py-3 text-xs mb-3 border-[#79747E] rounded-sm bg-transparent outline-0`}
              {...register("newPassword")}
            />
            {/* <p className="text-red-600 text-sm font-bold">
              {errors?.email?.message}
            </p> */}
          </legend>
          <legend className="flex flex-col mb-2">
            <label htmlFor="confirmNewPassword" className="text-xs">
            Confirmar contraseña
            </label>
            <input
              type="text"
              name="confirmNewPassword"
              className={`w-[406px] border-[1px] px-3 py-3 text-xs mb-3 border-[#79747E] rounded-sm bg-transparent outline-0`}
              {...register("confirmNewPassword")}
            />
            {/* <p className="text-red-600 text-sm font-bold">
              {errors?.email?.message}
            </p> */}
          </legend>
          <button className="bg-[#8DD3BB] text-xs font-bold py-3 rounded-sm">
          Establecer Contraseña
          </button>
        </form>
      </div>
      <img src="/loginFeatures.svg" className="rounded-2xl w-[418px]" />
    </div>
  );
};

export default CreateNewPass;

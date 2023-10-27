import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "../validations/RegisterValidation";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const stylesFirstInputs = ` w-64 border-[1px] px-3 py-2 text-xs border-[#79747E] rounded-sm bg-transparent outline-0 ${
    errors.password ? "outline-1 outline-red-600 border-2 border-red-600" : ""
  }  `;

  const stylesSecondInputs = `border-[1px] px-3 py-2 text-xs border-[#79747E] rounded-sm bg-transparent outline-0 ${
    errors.password ? "outline-1 outline-red-600 border-2 border-red-600" : ""
  }  `;
  return (
    <div className="flex m-14 gap-5 justify-center content-center">
      <img src="/registerPicture.svg" alt="" />
      <div>
        <img
          src="/latamLogo.svg"
          alt="Logo de Latam Adventures"
          className="w-[100px] mb-10"
        />
        <h2 className="font-bold text-3xl mb-2">Registro</h2>
        <p className="text-sm mb-3">Crea tu cuenta para tu próxima aventura</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex">
            <div className="flex flex-col">
              <label htmlFor="firstName">Primer Nombre</label>
              <input
                type="text"
                name="firstName"
                className={`mr-5 ${stylesFirstInputs}`}
              />
             <p className="text-red-600 text-sm font-bold">
              {errors?.firstName?.message}
            </p>             
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName">Apellido</label>
              <input
                type="text"
                name="lastName"
                className={stylesFirstInputs}
              />
            <p className="text-red-600 text-sm font-bold">
              {errors?.lastName?.message}
            </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className={`mr-5 ${stylesFirstInputs}`}
              />
            <p className="text-red-600 text-sm font-bold">
              {errors?.email?.message}
            </p>              
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone">Telefono</label>
              <input type="text" name="phone" className={stylesFirstInputs} />
              <p className="text-red-600 text-sm font-bold">
              {errors?.phone?.message}
            </p>              
            </div>
          </div>
          <div className="flex mb-4">
            <div className="flex flex-col">
              <label htmlFor="birthDate">Fecha de nacimiento</label>
              <input
                type="text"
                name="birthDate"
                className={`mr-5 ${stylesFirstInputs}`}
              />
            <p className="text-red-600 text-sm font-bold">
              {errors?.birthDate?.message}
            </p>              
            </div>
            <div className="flex flex-col">
              <label htmlFor="passport">Pasaporte</label>
              <input
                type="text"
                name="passport"
                className={stylesFirstInputs}
              />
            <p className="text-red-600 text-sm font-bold">
              {errors?.passport?.message}
            </p>              
            </div>
          </div>
          <legend className="flex flex-col mb-6">
            <label htmlFor="password">Contraseña</label>
            <input
              type="text"
              name="password"
              className={`mb-4 ${stylesSecondInputs}`}
            />
            <p className="text-red-600 text-sm font-bold">
              {errors?.password?.message}
            </p>

            <label htmlFor="confirmPassword">Confirmar contraseña</label>
            <input
              type="text"
              name="confirmPassword"
              className={stylesSecondInputs}
            />
            <p className="text-red-600 text-sm font-bold">
              {errors?.confirmPassword?.message}
            </p>            
          </legend>
          <button className="w-full bg-[#8DD3BB] text-xs font-bold py-2 rounded-sm">
            Crear Cuenta
          </button>
          <p className="text-xs text-center mt-3">
            ¿Ya tienes cuenta?{" "}
            <a href="#" className="text-red-400 font-semibold ">
              Iniciar Sesión
            </a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

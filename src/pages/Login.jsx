import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "../validations/LoginValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex m-14 gap-5 justify-center content-center">
      <div className="flex flex-col">
        <Link to="/" className="w-[100px] h-[30px] mb-10" ><img src="/latamLogo.svg" alt="Logo de Latam Adventures" className="w-[100px] h-[30px] "/>
        </Link>
        <h2 className="font-bold text-3xl mb-4">Inicio de Sesion</h2>
        <p className="text-sm mb-8">Ingresa a tu cuenta de Latam Adventures</p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
          <legend className="flex flex-col mb-4">
            <label htmlFor="email" className="text-xs">
              Email
            </label>
            <input
              type="text"
              name="email"
              className={`w-80 border-[1px] px-3 py-2 text-xs border-[#79747E] rounded-sm bg-transparent outline-0  ${
                errors.email
                  ? "outline-1 outline-red-600 border-2 border-red-600"
                  : ""
              }  `}
              {...register("email")}
            />
            <p className="text-red-600 text-sm font-bold">
              {errors?.email?.message}
            </p>
          </legend>
          <legend className="flex flex-col mb-5">
            <label htmlFor="password" className="text-xs">
              Contraseña
            </label>
            <input
              type="text"
              name="password"
              className={` w-80 border-[1px] px-3 py-2 text-xs border-[#79747E] rounded-sm bg-transparent outline-0 ${
                errors.password
                  ? "outline-1 outline-red-600 border-2 border-red-600"
                  : ""
              }  `}
              {...register("password")}
            />
            <p className="text-red-600 text-sm font-bold">
              {errors?.password?.message}
            </p>
          </legend>
          <Link to="/forgotpassword" className="text-xs text-end mb-6 text-red-400 font-semibold">¿Olvidaste tu contraseña?</Link>
          <button className="bg-[#8DD3BB] text-xs font-bold py-2 rounded-sm">
            Iniciar Sesion
          </button>
          <p className="text-xs text-center mt-2">
            ¡No tienes una cuenta?{" "}
            <Link to="/register" className="text-red-400 font-semibold ">Registrate</Link>          
          </p>
        </form>
      </div>
      <img src="/avion.jpg" className="rounded-2xl w-[418px]" />
    </div>
  );
};

export default Login;

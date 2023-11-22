import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "../validations/RegisterValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const navigate = useNavigate();


  const onSubmit = async (data) => {
    console.log(data)
     try {
       const response = await fetch('https://tribbolabtravel-production.up.railway.app/auth/registro', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
       });

       if (response.ok) {
         console.log(response.status)
         alert("Registro exitoso, ahora debes iniciar sesion")
         navigate('/login')
       } else {
         alert("El mail ingresado ya esta en uso")
         console.log('Response no OK', errors)
         console.log('Error', errors.response.data.message)
         console.log(data)
       }
     } catch (error) {
         console.error("Error: ", error.message);
     }
  };

  const inputStyle =
    "w-64 border-[1px] px-3 py-2 text-xs border-[#79747E] rounded-sm bg-transparent outline-0";


  return (
    <div className="flex m-14 gap-5 justify-center content-center">
      <img src="/registerPicture.svg" alt="" />
      <div>
        <Link to="/" className="w-[100px] h-[30px] mb-10">
          <img
            src="/latamLogo.svg"
            alt="Logo de Latam Adventures"
            className="w-[100px] h-[30px] mb-10"
          />
        </Link>
        <h2 className="font-bold text-3xl mb-2">Registro</h2>
        <p className="text-sm mb-8">Crea tu cuenta para tu próxima aventura</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex mb-5">
            <div className="flex flex-col relative">
              <label
                htmlFor="nombreCompleto"
                className={`text-xs absolute  left-2 bg-[#FAFBFC;] px-1 ${errors.nombreCompleto || errors.apellidoCompleto ? "bottom-[41px]" : "bottom-[25px]" } `}
              >
                Primer Nombre*
              </label>
              <input
                type="text"
                name="nombreCompleto"
                id="nombreCompleto"
                className={`mr-5 ${inputStyle} ${
                  errors.nombreCompleto
                    ? "outline-1 outline-red-600 border-2 border-red-600"
                    : ""
                }  `}
              {...register("nombreCompleto")}
              />
              <p className="text-red-600 text-xs font-bold">
                {errors?.nombreCompleto?.message}
              </p>
            </div>
            <div className="flex flex-col relative">
              <label
                htmlFor="apellidoCompleto"
                className={`text-xs absolute  left-2 bg-[#FAFBFC;] px-1 ${errors.nombreCompleto || errors.apellidoCompleto ? "bottom-[41px]" : "bottom-[25px]" } `}
              >
                Apellido*
              </label>
              <input
                type="text"
                name="apellidoCompleto"
                id="apellidoCompleto"
                className={`${inputStyle} ${
                  errors.apellidoCompleto
                    ? "outline-1 outline-red-600 border-2 border-red-600"
                    : ""
                }  `}
                {...register("apellidoCompleto")}
              />
              <p className="text-red-600 text-xs font-bold">
                {errors?.apellidoCompleto?.message}
              </p>
            </div>
          </div>
          <div className="flex mb-5">
            <div className="flex flex-col relative">
              <label
                htmlFor="username"
                className={`text-xs absolute  left-2 bg-[#FAFBFC;] px-1 ${errors.username || errors.numeroTelefonico ? "bottom-[41px]" : "bottom-[25px]" } `}
              >
                Email*
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className={`mr-5 ${inputStyle} ${
                  errors.username
                    ? "outline-1 outline-red-600 border-2 border-red-600"
                    : ""
                }  `}
                {...register("username")}
              />
              <p className="text-red-600 text-xs font-bold">
                {errors?.username?.message}
              </p>
            </div>
            <div className="flex flex-col relative">
              <label
                htmlFor="numeroTelefonico"
                className={`text-xs absolute  left-2 bg-[#FAFBFC;] px-1 ${errors.username || errors.numeroTelefonico ? "bottom-[41px]" : "bottom-[25px]" } `}
              >
                Telefono*
              </label>
              <input type="number" name="numeroTelefonico" id="numeroTelefonico" className={`${inputStyle} ${
                  errors.numeroTelefonico
                    ? "outline-1 outline-red-600 border-2 border-red-600"
                    : ""
                }  `} 
                {...register("numeroTelefonico")}
                />
              <p className="text-red-600 text-xs font-bold">
                {errors?.numeroTelefonico?.message}
              </p>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="flex flex-col relative">
              <label
                htmlFor="fechaNacimiento"
                className={`text-xs absolute  left-2 bg-[#FAFBFC;] px-1 ${errors.fechaNacimiento || errors.pasaporte ? "bottom-[41px]" : "bottom-[25px]" } `}
              >
                Fecha de nacimiento*
              </label>
             <input
                type="date"
                name="fechaNacimiento"
                id="fechaNacimiento"
                className={`mr-5 ${inputStyle} ${
                  errors.fechaNacimiento
                    ? "outline-1 outline-red-600 border-2 border-red-600"
                    : ""
                }  `}
                {...register("fechaNacimiento")}
              /> 
              <p className="text-red-600 text-xs font-bold">
                {errors?.fechaNacimiento?.message}
              </p>
            </div>
            <div className="flex flex-col relative">
              <label
                htmlFor="pasaporte"
                className={`text-xs absolute  left-2 bg-[#FAFBFC;] px-1 ${errors.fechaNacimiento || errors.pasaporte ? "bottom-[41px]" : "bottom-[25px]" } `}
              >
                Pasaporte*
              </label>
              <input
                type="text"
                name="pasaporte"
                id="pasaporte"
                className={`${inputStyle} ${
                  errors.pasaporte
                    ? "outline-1 outline-red-600 border-2 border-red-600"
                    : ""
                }  `}
                {...register("pasaporte")}
              />
              <p className="text-red-600 text-xs font-bold">
                {errors?.pasaporte?.message}
              </p>
            </div>
          </div>
          <legend className="flex flex-col mb-6 relative w-[532px]">
            <label
              htmlFor="password"
              className={`text-xs absolute  left-2 bg-[#FAFBFC;] px-1 ${errors.password && errors.confirmPassword ? "bottom-[128.3px]" : ""} ${errors.confirmPassword ? "bottom-[95px]" : "bottom-[79px]" }`}
            >
              Contraseña*
            </label>
            <input type="text" name="password" id="password" className={`border-[1px] px-3 py-2 text-xs border-[#79747E] rounded-sm bg-transparent outline-0 ${
                  errors.password
                    ? "outline-1 outline-red-600 border-2 border-red-600"
                    : ""
                }  `} 
                {...register("password")}
                />
            <p className="text-red-600 text-xs font-bold mb-5">
              {errors?.password?.message}
            </p>

            <label
              htmlFor="confirmPassword"
              className={`text-xs absolute  left-2 bg-[#FAFBFC;] px-1 ${errors.confirmPassword ? "bottom-[41px]" : "bottom-[25px]" } `}
            >
              Confirmar contraseña*
            </label>
            <input
              type="text"
              name="confirmPassword"
              id="confirmPassword"
              className={`border-[1px] w-[532px] px-3 py-2 text-xs border-[#79747E] rounded-sm bg-transparent outline-0 ${
                  errors.confirmPassword
                    ? "outline-1 outline-red-600 border-2 border-red-600"
                    : ""
                }  `}
                {...register("confirmPassword")}
            />
            <p className="text-red-600 text-xs font-bold  ">
              {errors?.confirmPassword?.message}
            </p>
          </legend>
          <button className="w-full bg-[#8DD3BB] text-xs font-bold py-2 rounded-sm">
            Crear Cuenta
          </button>
          <p className="text-xs text-center mt-3">
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" className="text-red-400 font-semibold">
              Iniciar Sesión
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

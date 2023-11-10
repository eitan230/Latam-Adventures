import * as yup from "yup";

export const registerSchema = yup.object().shape({
  nombreCompleto: yup.string()
  .required("El nombre es obligatorio"),
  apellidoCompleto: yup.string()
  .required("El apellido es obligatorio"),
  username: yup.string()
    .email("El correo electrónico ingresado no es valido")
    .required("El correo electrónico es obligatorio"),
  numeroTelefonico: yup.string()
    .required("El numero de telefono es obligatorio"),
  fechaNacimiento: yup.string()
    .required("La fecha de nacimiento es obligatoria"),
  pasaporte: yup.string()
    .required("El numero de pasaporte es obligatorio"),
  password: yup.string()
    .min(8, "La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número, un simbolo y un minimo de 8 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/,
      "La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número, un simbolo y un minimo de 8 caracteres"
    )
    .required("La contraseña es obligatoria"),
  confirmPassword: yup.string()
    .required("La confirmacion de la contraseña es obligatoria")
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden"),
});

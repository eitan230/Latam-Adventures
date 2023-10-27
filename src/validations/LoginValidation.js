import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string()
    .email('El correo electrónico ingresado no es valido')
    .required('El correo electrónico es obligatorio') ,
    password: yup.string()
    .required('La contraseña es obligatoria')
})


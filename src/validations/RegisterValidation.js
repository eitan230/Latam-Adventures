import * as yup from "yup";

export const registerSchema = yup.object().shape({
    firstName: yup.string(),
    lastName: yup.string(),
    email: yup.string()
    .email('El correo electrónico ingresado no es valido')
    .required('El correo electrónico es obligatorio') ,
    phone: yup.number(),
    birthDate: yup.date(),
    passport: yup.number(),
    password: yup.string()
    .min(8, 'La contraseña debe tener minimo 8 caracteres')
    .required('Required')
    .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/,
    'La contraseña debe tener al menos una letra mayúscula, una letra minúscula y un número'
    )
    .required('La contraseña es obligatoria'),
    confirmPassword: yup.string()
    .required('Required')
    .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden'),
})



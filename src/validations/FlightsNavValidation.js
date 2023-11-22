import * as yup from "yup";

export const flightsSchema = yup.object().shape({
  origen: yup.string().required("Campo requerido"),
  destino: yup
    .string()
    .required("Campo requerido")
    .notOneOf([yup.ref("origen")], "El destino no puede ser igual al origen"),
  fechaInicio: yup
    .date().nullable().min(new Date(), "La fecha no puede ser anterior o igual al día de hoy"),
  fechaFin: yup
    .date().nullable().min(
      yup.ref("fechaInicio"),
      "La fecha de regreso debe ser posterior a la fecha de salida"
    ),
});

import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export const registerValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/(\w.+\s).+/, "Insira pelo menos 2 nomes")
    .required("Campo obrigatório"),
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("Campo obrigatório"),
  password: yup
    .string()
    .min(6, ({ min }) => `Insira no mínimo ${min} caracteres`)
    .required("Campo obrigatório"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "A senha digitada não confere")
    .required("Campo obrigatório"),
});

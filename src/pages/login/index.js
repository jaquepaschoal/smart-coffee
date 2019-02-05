import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Container } from "../../styles/global";
import { Image } from "./style";
import Coffee from "../../assets/coffee.svg";

const schema = Yup.object().shape({
  name: Yup.string()
    .required("Informe o nome!")
    .min(5, "O nome deve conter mais de 5 letras!")
    .max(100, "O nome deve conter menos de 100 letras!")
    .notOneOf(["admin", "administrador"], "Esse nome não pode camarada!"),
  email: Yup.string()
    .required("Informe o email!")
    .email("Informe um email válido!")
});

const enhanceWithFormik = withFormik({
  mapPropsToValues: () => ({ name: "", email: "" }),
  handleSubmit: values => {
    console.log(values);
  },
  isInitialValid: false,
  validateOnChange: true,
  validateOnBlur: true,
  displayName: "MyForm",
  validationSchema: schema
});

const Login = props => {
  return (
    <Container>
      <Image>
        <img src={Coffee} alt="Coffee" />
      </Image>
      <Form>
        <div>
          <label>Nome completo</label>
          <Field name="name" placeholder="Nome" /> <br />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label>Nome completo</label>
          <Field name="email" placeholder="Email" />
          <br />
          <ErrorMessage name="email" />
        </div>
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
};

export default enhanceWithFormik(Login);

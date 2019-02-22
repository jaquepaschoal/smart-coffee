import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import Error from "../../components/Error";
import * as Yup from "yup";

import { Container } from "../../styles/global";
import { Image, FormContent } from "./style";
import Coffee from "../../assets/coffee.svg";

import { connect } from "react-redux";
import { Creators as LoginActions } from "../../store/ducks/login";
import { bindActionCreators } from "redux";

const couponCode = length => {
  let code = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    code += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return code;
};

const schema = Yup.object().shape({
  name: Yup.string()
    .required("Informe o nome!")
    .notOneOf(["admin", "administrador"], "Esse usuário não pode ser usado!"),
  email: Yup.string()
    .required("Informe o email!")
    .email("Informe um email válido!")
});

const enhanceWithFormik = withFormik({
  mapPropsToValues: () => ({ name: "", email: "" }),
  handleSubmit: (values, formikBag) => {
    formikBag.props.addUserRequest(values.name, values.email, couponCode(6));
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
      <FormContent>
        <Form className="form">
          <div>
            <label>Nome completo</label>
            <Field name="name" />
            <ErrorMessage name="name" render={msg => <Error text={msg} />} />
          </div>
          <div>
            <label>E-mail</label>
            <Field name="email" />
            <ErrorMessage name="email" render={msg => <Error text={msg} />} />
          </div>
          <div className="contentButton">
            <button type="submit">Enviar</button>
          </div>
        </Form>
      </FormContent>
    </Container>
  );
};
const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(enhanceWithFormik(Login));

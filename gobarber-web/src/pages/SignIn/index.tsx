/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useCallback, useContext} from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import AuthContext from '../../context/AuthContext';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { name } = useContext(AuthContext);
  console.log(name);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail required')
          .email('Please enter valid email address'),
        password: Yup.string().required('Password required'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);

      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);
  return (
  <Container>
    <Content>
      <img src={logoImg} alt="Barber" />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Plese logon</h1>

        <Input name="email" icon={FiMail} placeholder="Email" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="password"
        />

        <Button name="enter" type="submit">
          Enter
        </Button>

        <a href="forgot">Forgot password</a>
      </Form>

      <a href="login">
        <FiLogIn />
        Create account
      </a>
    </Content>

    <Background />
  </Container>
);
  }
export default SignIn;

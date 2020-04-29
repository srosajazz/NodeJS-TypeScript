/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Name Required'),
        email: Yup.string()
          .required('E-mail required')
          .email('Please enter valid email address'),
        password: Yup.string().min(6, 'At list 6 digit required'),
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
      <Background />

      <Content>
        <img src={logoImg} alt="Barber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Plese Register</h1>

          <Input name="email" icon={FiUser} placeholder="Name" />
          <Input name="email" icon={FiMail} placeholder="Email" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="password"
          />

          <Button name="register" type="submit">
            Register
          </Button>
        </Form>

        <a href="logon">
          <FiArrowLeft />
          Back to logon
        </a>
      </Content>
    </Container>
  );
};
export default SignUp;

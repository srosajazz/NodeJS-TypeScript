/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="Barber" />

      <form>
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
      </form>

      <a href="logon">
        <FiArrowLeft />
        Back to logon
      </a>
    </Content>
    {/*
    <Background /> */}
  </Container>
);
export default SignUp;

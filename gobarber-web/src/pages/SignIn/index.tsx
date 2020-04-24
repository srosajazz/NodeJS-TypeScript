/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Barber" />

      <form>
        <h1>Plese logon</h1>

        <input placeholder="Email" />

        <input type="password" placeholder="password" />

        <button type="submit">Enter</button>

        <a href="forgot">Forgot password</a>
      </form>

      <a href="login">
        <FiLogIn />
        Create account
      </a>
    </Content>

    <Background />
  </Container>
);
export default SignIn;

// eslint-disable-next-line no-use-before-define
import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import Container from "./styles";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

const Logon = () => {
  return (
    <Container className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the Hero" />
        <form>
          <h1>Faça seu Logon</h1>

          <input placeholder="Sua ID" />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
};

export default Logon;

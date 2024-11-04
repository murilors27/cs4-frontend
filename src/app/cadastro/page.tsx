"use client";

import HomeButton from "@/components/homeButton";
import "./cadastro.css";
import CadastroForm from "@/components/cadastroForm";

const Cadastro = () => {
  return (
    <main className="cadastro-main">
      <HomeButton />
      <section className="cadastro-container">
        <h1>Cadastro</h1>
        <CadastroForm />
      </section>
    </main>
  );
};

export default Cadastro;

import React from "react";
import "./login.css";
import Link from "next/link";
import LoginForm from "@/components/loginForm";
import HomeButton from "@/components/homeButton";

const Login = () => {
  return (
    <main className="login-main">
      <HomeButton/>
      <section className="login-container">
        <h1>Login</h1>
        <LoginForm />
        <div className="login-create">
          <p>Ainda não tem uma conta?</p>
          <Link href="/cadastro">Cadastre-se aqui</Link>
        </div>
      </section>
    </main>
  );
};

export default Login;

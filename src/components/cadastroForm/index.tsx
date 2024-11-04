"use client";

import { useRouter } from "next/navigation";
import "./cadastroForm.css";
import { useForm } from "react-hook-form";
import { CadastroProps } from "@/types/cadastro";
import { toast } from "react-toastify";
import { createUser } from "@/lib/api";

const CadastroForm = () => {
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<CadastroProps>();

  const onSubmit = async (data: CadastroProps) => {
    try {
      await createUser({
        email: data.email,
        login: data.login,
        senha: data.senha,
      });
      toast.success("Usuário criado!");
      reset();
      router.push("/login");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao cadastrar usuário");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="cadastroForm">
      <input type="text" {...register("nome")} placeholder="Nome" required />
      <input type="email" {...register("email")} placeholder="Email" required />
      <input
        type="text"
        {...register("login")}
        placeholder="Login"
        required
        minLength={3}
      />
      <input
        type="password"
        {...register("senha")}
        placeholder="Senha"
        minLength={4}
        required
      />
      <div className="input-row">
        <input type="text" {...register("cep")} placeholder="CEP" required />
        <input type="text" {...register("rua")} placeholder="Rua" required />
      </div>
      <div className="input-row">
        <input
          type="text"
          {...register("numero")}
          placeholder="Número"
          required
        />
        <input
          type="text"
          {...register("bairro")}
          placeholder="Bairro"
          required
        />
      </div>
      <div className="input-row">
        <input
          type="text"
          {...register("cidade")}
          placeholder="Cidade"
          required
        />
        <input
          type="text"
          {...register("estado")}
          placeholder="Estado"
          required
        />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default CadastroForm;

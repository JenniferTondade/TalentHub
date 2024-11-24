"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Importa o useRouter do Next.js
import styles from "./registrar.module.css";

export default function Registrar() {
  const [userType, setUserType] = useState("freelancer");
  const router = useRouter(); // Inicializa o router

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  // Função de envio de formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)

    // Aqui você pode adicionar a lógica para salvar os dados do usuário, como uma requisição API

    if (userType === "freelancer") {
      router.push("/freelancerlogado"); // Redireciona para a página /freelancerlogado
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Logo */}
        <h1 className={styles.logo}>TalentHub</h1>

        {/* Alternar Tipo de Registro */}
        <div className={styles.userTypeSelector}>
          <button
            className={`${styles.userTypeButton} ${
              userType === "freelancer" ? styles.active : ""
            }`}
            onClick={() => handleUserTypeChange("freelancer")}
          >
            Sou Freelancer
          </button>
          <button
            className={`${styles.userTypeButton} ${
              userType === "contratante" ? styles.active : ""
            }`}
            onClick={() => handleUserTypeChange("contratante")}
          >
            Sou Contratante
          </button>
        </div>

        {/* Formulário */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Nome Completo</label>
            <input type="text" className={styles.input} placeholder="Digite seu nome" />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>E-mail</label>
            <input type="email" className={styles.input} placeholder="Digite seu e-mail" />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Senha</label>
            <input type="password" className={styles.input} placeholder="Digite sua senha" />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Confirmar Senha</label>
            <input
              type="password"
              className={styles.input}
              placeholder="Confirme sua senha"
            />
          </div>

          {userType === "freelancer" && (
            <>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Biografia</label>
                <textarea
                  className={styles.textarea}
                  placeholder="Escreva um resumo sobre você"
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Portfólio</label>
                <input
                  type="url"
                  className={styles.input}
                  placeholder="Link do portfólio (opcional)"
                />
              </div>
            </>
          )}

          {userType === "contratante" && (
            <>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Empresa</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Nome da sua empresa (opcional)"
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Tipos de Projetos de Interesse</label>
                <textarea
                  className={styles.textarea}
                  placeholder="Descreva os tipos de projetos que você busca"
                />
              </div>
            </>
          )}

          <button type="submit" className={styles.button}>
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}

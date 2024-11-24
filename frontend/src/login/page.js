"use client"; 

import React, { useState } from "react";
import styles from "./login.module.css";
import "./globals.css"; 
import Link from 'next/link';  // Importando o Link do Next.js

export default function Registrar() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Usuário:", usuario);
    console.log("Senha:", senha);
    // DADOS BACKEND
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Logo */}
        <h1 className={styles.logo}>TalentHub</h1>
        
        {/* Formulário */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="usuario" className={styles.label}>Usuário</label>
            <input
              type="text"
              id="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Digite seu usuário"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="senha" className={styles.label}>Senha</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
              className={styles.input}
              required
            />
          </div>

          <button type="submit" className={styles.button}>Entrar</button>
        </form>

        {/* Links */}
        <div className={styles.links}>
          <Link href="/registrar">
            Registrar-se
          </Link>
        </div>
      </div>
    </div>
  );
}

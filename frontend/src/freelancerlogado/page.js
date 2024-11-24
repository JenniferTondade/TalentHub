"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./logado.module.css";

// Navbar importada do page.js
export default function Freelancers() {
  const [activeCategory, setActiveCategory] = useState("designgrafico");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  // Freelancers para cada categoria
  const freelancers = {
    designgrafico: [
      { name: "João Silva", profession: "Designer Gráfico" },
      { name: "Maria Souza", profession: "Designer de Interfaces (UI)" },
      { name: "Carlos Almeida", profession: "Ilustrador" }
    ],
    criacaologotipo: [
      { name: "Ana Lima", profession: "Especialista em Branding" },
      { name: "Bruno Costa", profession: "Designer de Logotipos" }
    ],
    // Adicione outras categorias aqui, conforme necessário
  };

  return (
    <div>
      {/* Navbar do page.js */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/imagens/logo.png"
            alt="TalentHub Logo"
            width={150}
            height={50}
          />
        </div>

        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/hubfreelancers">Design</Link>
          <Link href="/hubfreelancers">Desenvolvimento</Link>
          <Link href="#contato">Contato</Link>
        </nav>

        <div className={styles.register}>
          <Link href="/registrar">
            <button>Registre-se</button>
          </Link>
          <Link href="#login" className={styles.registerLink}>
            <Link href="/login">Já possuo cadastro</Link>
          </Link>
        </div>
      </header>

      <div className={styles.container}>
        {/* Perfil do freelancer à esquerda */}
        <div className={styles.profile}>
          <h3>Nome do Freelancer</h3>
          <p>Profissão: Desenvolvedor Full Stack</p>
          <button className={styles.addProjectButton}>Adicionar Projeto</button>
        </div>

        {/* Menu de categorias à esquerda */}
        <div className={styles.menu}>
          <ul>
            <li
              className={activeCategory === "designgrafico" ? styles.active : ""}
              onClick={() => handleCategoryChange("designgrafico")}
            >
              Design Gráfico
            </li>
            <li
              className={activeCategory === "criacaologotipo" ? styles.active : ""}
              onClick={() => handleCategoryChange("criacaologotipo")}
            >
              Criação de Logotipo e Branding
            </li>
            {/* Outras categorias aqui */}
          </ul>
        </div>

        {/* Freelancers à direita */}
        <div className={styles.freelancersList}>
          {freelancers[activeCategory]?.map((freelancer, index) => (
            <div key={index} className={styles.freelancerCard}>
              <h3>{freelancer.name}</h3>
              <p>{freelancer.profession}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

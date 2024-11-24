"use client"; 

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./freelancers.module.css";  

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
    identidadevisual: [
      { name: "Lucas Pereira", profession: "Designer de Identidade Visual" },
      { name: "Rita Martins", profession: "Consultora de Imagem Corporativa" }
    ],
    criacaomaterialimpresso: [
      { name: "Fernanda Rocha", profession: "Designer Gráfico" },
      { name: "Paulo Santana", profession: "Designer de Material Impresso" }
    ],
    designapresentacoes: [
      { name: "Juliana Mendes", profession: "Designer de Apresentações" },
      { name: "Diego Silva", profession: "Designer Gráfico" }
    ],
    ilustracaoartesvisuais: [
      { name: "Pedro Oliveira", profession: "Ilustrador" },
      { name: "Carla Souza", profession: "Artes Visuais" }
    ],
    desenvolvimentofrontend: [
      { name: "Carlos Pereira", profession: "Desenvolvedor Frontend" },
      { name: "Tatiane Lima", profession: "Desenvolvedora Frontend" }
    ],
    desenvolvimentobackend: [
      { name: "Renato Lima", profession: "Desenvolvedor Backend" },
      { name: "Juliana Costa", profession: "Desenvolvedora Backend" }
    ],
    desenvolvimentofullstack: [
      { name: "José Santos", profession: "Desenvolvedor Full Stack" },
      { name: "Aline Rocha", profession: "Desenvolvedora Full Stack" }
    ],
    integracaoapi: [
      { name: "Marco Antônio", profession: "Desenvolvedor de APIs" },
      { name: "Luiza Mendes", profession: "Desenvolvedora Backend" }
    ],
    desenvolvimentoaplicativos: [
      { name: "Lucas Almeida", profession: "Desenvolvedor de Aplicativos" },
      { name: "Gabriela Martins", profession: "Desenvolvedora Mobile" }
    ],
    desenvolvimentomultiplataforma: [
      { name: "Adriana Costa", profession: "Desenvolvedora Multiplataforma" },
      { name: "Samuel Lima", profession: "Desenvolvedor Multiplataforma" }
    ],
    jogosaplicativosinterativos: [
      { name: "Vinícius Soares", profession: "Desenvolvedor de Jogos" },
      { name: "Carla Lima", profession: "Desenvolvedora de Jogos Interativos" }
    ],
    gestaoredessociais: [
      { name: "Laura Silva", profession: "Especialista em Redes Sociais" },
      { name: "Ricardo Almeida", profession: "Consultor de Mídias Sociais" }
    ],
    automacaoprocessos: [
      { name: "Felipe Rocha", profession: "Especialista em Automação" },
      { name: "Isabela Almeida", profession: "Automatizadora de Processos" }
    ],
    gerenciamentocloud: [
      { name: "Paulo Souza", profession: "Especialista em Cloud" },
      { name: "Letícia Costa", profession: "Gerente de Cloud" }
    ]
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
            <li
              className={activeCategory === "identidadevisual" ? styles.active : ""}
              onClick={() => handleCategoryChange("identidadevisual")}
            >
              Identidade Visual
            </li>
            <li
              className={activeCategory === "criacaomaterialimpresso" ? styles.active : ""}
              onClick={() => handleCategoryChange("criacaomaterialimpresso")}
            >
              Design de Material Impresso
            </li>
            <li
              className={activeCategory === "designapresentacoes" ? styles.active : ""}
              onClick={() => handleCategoryChange("designapresentacoes")}
            >
              Design de Apresentações
            </li>
            <li
              className={activeCategory === "ilustracaoartesvisuais" ? styles.active : ""}
              onClick={() => handleCategoryChange("ilustracaoartesvisuais")}
            >
              Ilustração e Artes Visuais
            </li>
            <li
              className={activeCategory === "desenvolvimentofrontend" ? styles.active : ""}
              onClick={() => handleCategoryChange("desenvolvimentofrontend")}
            >
              Desenvolvimento Frontend
            </li>
            <li
              className={activeCategory === "desenvolvimentobackend" ? styles.active : ""}
              onClick={() => handleCategoryChange("desenvolvimentobackend")}
            >
              Desenvolvimento Backend
            </li>
            <li
              className={activeCategory === "desenvolvimentofullstack" ? styles.active : ""}
              onClick={() => handleCategoryChange("desenvolvimentofullstack")}
            >
              Desenvolvimento Full Stack
            </li>
            <li
              className={activeCategory === "integracaoapi" ? styles.active : ""}
              onClick={() => handleCategoryChange("integracaoapi")}
            >
              Integração com APIs
            </li>
            <li
              className={activeCategory === "desenvolvimentoaplicativos" ? styles.active : ""}
              onClick={() => handleCategoryChange("desenvolvimentoaplicativos")}
            >
              Desenvolvimento de Aplicativos
            </li>
            <li
              className={activeCategory === "desenvolvimentomultiplataforma" ? styles.active : ""}
              onClick={() => handleCategoryChange("desenvolvimentomultiplataforma")}
            >
              Desenvolvimento Multiplataforma
            </li>
            <li
              className={activeCategory === "jogosaplicativosinterativos" ? styles.active : ""}
              onClick={() => handleCategoryChange("jogosaplicativosinterativos")}
            >
              Jogos e Aplicativos Interativos
            </li>
            <li
              className={activeCategory === "gestaoredessociais" ? styles.active : ""}
              onClick={() => handleCategoryChange("gestaoredessociais")}
            >
              Gestão de Redes Sociais
            </li>
            <li
              className={activeCategory === "automacaoprocessos" ? styles.active : ""}
              onClick={() => handleCategoryChange("automacaoprocessos")}
            >
              Automação de Processos
            </li>
            <li
              className={activeCategory === "gerenciamentocloud" ? styles.active : ""}
              onClick={() => handleCategoryChange("gerenciamentocloud")}
            >
              Gerenciamento de Cloud
            </li>
          </ul>
        </div>

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

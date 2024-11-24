"use client"; 

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";  
import "./globals.css"; 

export default function Page() {
  // Estado para controle de feedbacks
  const [currentFeedback, setCurrentFeedback] = useState(0);

  // Lista de feedbacks
  const feedbacks = [
    {
      text: `"Estávamos precisando reformular o nosso site para modernizar a presença online da empresa, e encontramos o desenvolvedor ideal aqui! O site ficou rápido, bonito e fácil de usar. O freelancer que contratamos foi extremamente profissional e entregou tudo antes do prazo. Com certeza voltaremos para novos projetos!"`,
      author: "— Mariana Souza, Diretora de Marketing da Green Solutions",
    },
    {
      text: `"Encontramos no portal o parceiro ideal para criar nosso e-commerce do zero! O profissional foi atencioso, entendeu nossas necessidades e entregou um trabalho impecável. O site ficou moderno, funcional e está atraindo muitos clientes. Estamos muito satisfeitos e já pensamos em novos projetos para colaborar novamente!"`,
      author: "— Rafael Lima, CEO da EcoMarket",
    },
  ];

  // Funções para navegar entre os feedbacks
  const handleNextFeedback = () => {
    setCurrentFeedback((prevIndex) => (prevIndex + 1) % feedbacks.length);
  };

  const handlePrevFeedback = () => {
    setCurrentFeedback(
      (prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length
    );
  };

  return (
    <div className={styles.container}>
      {/* Cabeçalho */}
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
          <Link href="/login">
            Já possuo cadastro
          </Link>
          </Link>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className={`${styles.mainContent} ${styles.waveBackground}`}>
        <div className={styles.textContent}>
          <h1>
            Conectando <span>Talento</span> & <span>Oportunidade</span>
          </h1>
          <p>
            Bem-vindo ao TalentHub, o marketplace para freelancers e empresas!
            Encontre profissionais qualificados nas áreas de{" "}
            <span className={styles.highlight}>Design</span> &{" "}
            <span className={styles.highlight}>Desenvolvimento</span>. Navegue por
            perfis, explore serviços e inicie projetos com os melhores talentos
            do mercado. Facilitamos a conexão e oferecemos um ambiente seguro e
            colaborativo para transformar suas ideias em realidade!
          </p>
          <Link href="/registrar">
          <button>Registre-se</button>
          </Link>
        </div>
        <div className={styles.imageContent}>
          <Image
            src="/imagens/ilustracao.png"
            alt="Ilustração da página inicial"
            width={500}
            height={200}
          />
        </div>
      </main>

      {/* Seção Como Funciona */}
      <section className={styles.howItWorks}>
        <h2 className={styles.howItWorksTitle}>Como Funciona?</h2>
        <div className={styles.howItWorksContainer}>
          <div className={styles.howItWorksItem}>
            <Image
              src="/imagens/freelancer-icon.png"
              alt="Ícone Freelancer"
              width={110}
              height={110}
            />
            <h3>Freelancer</h3>
            <p>
              Crie seu perfil destacando suas habilidades e projetos. Os contratantes
              navegarão pelo seu perfil e poderão escolher você para seus projetos.
              Esteja pronto para se comunicar e negociar diretamente com eles, e
              receber pagamento de forma segura.
            </p>
          </div>
          <div className={styles.howItWorksItem}>
            <Image
              src="/imagens/visitor-icon.png"
              alt="Ícone Visitante"
              width={110}
              height={110}
            />
            <h3>Visitante</h3>
            <p>
              Explore serviços de freelancers em design e desenvolvimento. Veja
              portfólios e avaliações. Cadastre-se para solicitar orçamentos e
              descobrir como nossos profissionais podem ajudar!
            </p>
          </div>
          <div className={styles.howItWorksItem}>
            <Image
              src="/imagens/client-icon.png"
              alt="Ícone Cliente"
              width={110}
              height={110}
            />
            <h3>Cliente</h3>
            <p>
              Navegue pelos perfis de freelancers e escolha aquele que melhor se
              adequa ao seu projeto. Analise habilidades, portfólios e
              avaliações. Após selecionar, contrate o freelancer e gerencie o trabalho
              com pagamentos seguros.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Encontre Talentos */}
      <section className={`${styles.encontreTalentos} ${styles.waveBackground}`}>
        <h2 className={styles.encontreTalentosTitulo}>Encontre talentos em...</h2>
        <div className={styles.encontreTalentosGrid}>
          <div className={styles.talentoItem}>
            <Image
              src="/imagens/identidades-visuais.png"
              alt="Identidades Visuais"
              width={180}
              height={180}
            />
          </div>
          <div className={styles.talentoItem}>
            <Image
              src="/imagens/desenvolvimento-website.png"
              alt="Desenvolvimento de Website"
              width={180}
              height={180}
            />
          </div>
          <div className={styles.talentoItem}>
            <Image
              src="/imagens/edicao-video-animacao.png"
              alt="Edição de Vídeo e Animação"
              width={180}
              height={180}
            />
          </div>
          <div className={styles.talentoItem}>
            <Image
              src="/imagens/social-media.png"
              alt="Social Media"
              width={180}
              height={180}
            />
          </div>
          <div className={styles.talentoItem}>
            <Image
              src="/imagens/design-ui-ux.png"
              alt="Design de Interfaces UI/UX"
              width={180}
              height={180}
            />
          </div>
          <div className={styles.talentoItem}>
            <Image
              src="/imagens/backend-apis.png"
              alt="Desenvolvimento Backend & APIs"
              width={180}
              height={180}
            />
          </div>
        </div>
      </section>

      {/* Seção Feedback */}
      <section className={styles.feedbackSection}>
        <h2 className={styles.feedbackTitle}>O que nossos clientes dizem?</h2>
        <div className={styles.feedbackContainer}>
          <button
            className={styles.feedbackButton}
            onClick={handlePrevFeedback}
          >
            <img src="/imagens/seta1.png" alt="Anterior" className={styles.arrowIcon} />
          </button>

          <div className={styles.feedbackItem}>
            <p>{feedbacks[currentFeedback].text}</p>
            <p>
              <strong>{feedbacks[currentFeedback].author}</strong>
            </p>
          </div>

          <button
            className={styles.feedbackButton}
            onClick={handleNextFeedback}
          >
            <img src="/imagens/seta2.png" alt="Próximo" className={styles.arrowIcon} />
          </button>
        </div>
      </section>

      {/* Rodapé */}
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <Image
            src="/imagens/logo.png"
            alt="TalentHub Logo"
            width={120}
            height={50}
          />
        </div>
        <div className={styles.footerLinks}>
          <Link href="#sobre">Sobre</Link>
          <Link href="#privacidade">Política de Privacidade</Link>
          <Link href="#termos">Termos de Uso</Link>
          <Link href="#contato">Contato</Link>
        </div>
        <div className={styles.footerCopy}>
          © 2024 TalentHub. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Freelancers</h1>
      <ColecaoFreelancers />
    </main>
  );
}

async function ColecaoFreelancers() {
  const resp = await fetch("http://localhost:8080/api/freelancers");
  const freelancers = await resp.json();

  return (
    <section className="livros">
      {freelancers && freelancers.map((freelancer) => {
        return <Freelancer {...freelancer} />
      })}
    </section>
  )
}

function Freelancer({id, nome, email, habilidades, avaliacao, numero}) {
  return (
    <section className="freelancer">
      <h1>{nome}</h1>
      <p>Avaliação: {avaliacao}</p>
      <Link href={"/freelancer?id=" + id}>ver mais</Link>
    </section>
  )
}
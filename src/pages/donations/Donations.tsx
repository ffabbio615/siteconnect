import InfoCard from "../../components/infoCard/InfoCard";
import s from "../Style.module.scss";


export default function Donations() {
  return (
    <main className={s.main}>
      <h1>Doação</h1>
      <section>
        <article>
          <InfoCard 
          img="./images/instituto-grande-familia.png" 
          alt="Imagem de uma pessoa carregando uma caixa de doação com alimentos" 
          subtitle="Instituto grande familia" 
          paragraph="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade." 
          seccondParagraph="" 
          buttonText="Quero Doar" />
        </article>
        <article>
          <InfoCard
          img="./images/projeto-futuro-escola.png"
          alt="Imagem de livros"
          subtitle="Projeto Futuro na Escola"
          paragraph="Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura."
          seccondParagraph=""
          buttonText="Quero Doar" />
        </article>
        <article>
          <InfoCard
          img="./images/instituto-conecta-jovem.png"
          alt="Imagem de pessoas montando computadores para doação"
          subtitle="Instituto Conecta Jovem"
          paragraph="Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades."
          seccondParagraph=""
          buttonText="Quero Doar" />
        </article>
      </section>
    </main>
  );
}
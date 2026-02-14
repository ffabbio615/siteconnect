import InfoCard from "../../components/infoCard/InfoCard";
import s from "../Style.module.scss";

export default function Mentoring() {
  return (
    <main className={s.main}>
      <h1>Mentoria</h1>
      <section>
        <article className={s.articlesContainer}>
          <InfoCard 
          img="./images/mentoria-carreira-emprego.png" 
          alt="Imagem de documentos e pessoas gesticulando sobre uma mesa de trabalho" 
          subtitle="Mentoria de Carreira e Emprego" 
          paragraph="Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho." 
          seccondParagraph="" 
          buttonText="Quero Participar" />
        </article>
        <article>
          <InfoCard
          img="./images/compartilhe-experiencia.png"
          alt="Imagem de uma sala com pessoas conversando e compartilhando experiências"
          subtitle="Compartilhe Experiência"
          paragraph="Oriente jovens e profissionais iniciantes em sua área."
          seccondParagraph=""
          buttonText="Quero Participar" />
        </article>
        <article>
          <InfoCard
          img="./images/acompanhamento.png"
          alt="Imagem de duas pessoas discutindo e acompanhando o desenvolvimento de um projeto"
          subtitle="Acompanhamento"
          paragraph="Participe como guia em jornadas de aprendizado e desenvolvimento."
          seccondParagraph=""
          buttonText="Quero Participar" />
        </article>
      </section>
    </main>
  );
}
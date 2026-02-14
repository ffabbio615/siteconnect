import InfoCard from "../../components/infoCard/InfoCard";
import s from "../Style.module.scss";

export default function Volunteering() {
  return (
    <main className={s.main}>
      <h1>Voluntariado</h1>
      <section>
        <article className={s.articlesContainer}>
          <InfoCard 
          img="./images/mutirao-reciclagem.png" 
          alt="Imagem de pessoas coletando lixo para reciclagem" 
          subtitle="Mutirão de reciclagem" 
          paragraph="Coletar materiais recicláveis e orientar sobre descarte consciente." 
          seccondParagraph="" 
          buttonText="Quero Participar" />
        </article>
        <article>
          <InfoCard
          img="./images/aulas-tecnologia.png"
          alt="Imagem de uma sala de aula com computadores e alunos aprendendo"
          subtitle="Aulas de Tecnologia"
          paragraph="Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital."
          seccondParagraph=""
          buttonText="Quero Participar" />
        </article>
        <article>
          <InfoCard
          img="./images/esporte-inclusao.png"
          alt="Imagem de pessoas se exercitando em uma quadra de esportes"
          subtitle="Esporte e Inclusão"
          paragraph="Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens."
          seccondParagraph=""
          buttonText="Quero Participar" />
        </article>
      </section>
    </main>
  );
}
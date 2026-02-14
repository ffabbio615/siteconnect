import InfoCard from "../../components/infoCard/InfoCard";
import s from "../Style.module.scss";

export default function LectureEvents() {
  return (
    <main className={s.main}>
      <h1>Eventos & Palestras</h1>
      <section>
        <article className={s.articlesContainer}>
          <InfoCard 
          img="./images/empoderando-jovens-futuro.png" 
          alt="Imagem de jovens participando de uma palestra" 
          subtitle="Empoderando Jovens para o Futuro" 
          paragraph="Atividade: Palestra motivacional sobre liderança jovem e transformação social." 
          seccondParagraph="Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades." 
          buttonText="Quero Participar" />
        </article>
        <article>
          <InfoCard
          img="./images/tecnologia-que-transforma.png"
          alt="Imagem de pessoas participando de um workshop de tecnologia"
          subtitle="Tecnologia que Transforma"
          paragraph="Atividade: Workshop de introdução à programação e inovação digital."
          seccondParagraph="Impacto: Preparar jovens para o mercado de trabalho através da tecnologia."
          buttonText="Quero Participar" />
        </article>
        <article>
          <InfoCard
          img="./images/carreira-primeiro-emprego.png"
          alt="Imagem de pessoas participando de uma palestra sobre carreira e primeiro emprego"
          subtitle="Carreira e Primeiro Emprego"
          paragraph="Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado."
          seccondParagraph="Impacto: Ajudar jovens a conquistar oportunidades de trabalho."
          buttonText="Quero Participar" />
        </article>
      </section>
    </main>
  );
}
import s from "./InfoCard.module.scss";
import Swal from 'sweetalert2'
import confetti from "https://cdn.skypack.dev/canvas-confetti";

type InfoCardProps = {
  img: string;
  alt: string;
  subtitle: string;
  paragraph: string;
  seccondParagraph: string;
  buttonText: string;
};

export default function InfoCard(props: InfoCardProps) {

  const confirmAction = (message : string) => {
    const toastMessage = message === "Quero Doar" ? "Doação realizada com sucesso!" : "Inscrição realizada com sucesso!";
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: toastMessage,
    });
    confetti();
  }


  return (
    <article className={s.article}>
        <img src={props.img} alt={props.alt} />
        <h2>{props.subtitle}</h2>
        <p>{props.paragraph}</p>
        <p>{props.seccondParagraph}</p>
        <button onClick={() => confirmAction(props.buttonText)}>{props.buttonText}</button>
    </article>
  );
}
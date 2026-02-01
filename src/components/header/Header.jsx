import { Link } from "react-router-dom";
import s from "./header.module.scss";

export default function Header() {
  return (
    <>
      <header className={s.header}>
        <Link to="/">
          <img className={s.imgLogo} src="/icons/logo.svg" alt="Imagem de logo do site connect sendo representada por uma mão segurando um coração, simbolizando apoio" />
        </Link>
        <nav className={s.nav}>
          <Link className={s.link} to="/donations">Doação</Link>
          <Link className={s.link} to="/volunteering">Voluntariado</Link>
          <Link className={s.link} to="/mentoring">Mentoria</Link>
          <Link className={s.link} to="/lecture-events">Eventos</Link>
          <Link className={s.link} to="/user">User</Link>
        </nav>

        <img className={s.imgUser} src="https://avatars.githubusercontent.com/u/126684842?v=4" alt="Imagem do usuário" />
      </header>
      <nav className={s.navUser}>
        <Link className={s.link} to="/donations">Fábio Marques</Link>
        <Link className={s.link} to="/volunteering">Meu Voluntariado</Link>
        <Link className={s.link} to="/mentoring">Configurações</Link>
        <Link className={s.link} to="/lecture-events">Sair</Link>
      </nav>
    </>
  );
}
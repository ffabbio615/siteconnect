import s from "./User.module.scss";
import { CiCalendar } from "react-icons/ci";
import { MdMailOutline, MdOutlinePlace } from "react-icons/md";

export default function User() {
  return (
    <main className={s.main}>
      <section>
        <img src="./images/profile.jpg" alt="Imagem do usuário" />
        <div className={s.userInfo}>
          <div className={s.titleContainer}>
            <h1>Bem-vindo, Fábio Marques!</h1>
            <h2>Voluntário Ativo</h2>
          </div>
          <p>Desenvolvedor movido por propósito, uso a tecnologia como ponte para conectar pessoas e gerar impacto positivo na comunidade.</p>
          <ul>
            <li><MdOutlinePlace />Rio de Janeiro, RJ</li>
            <li><MdMailOutline />fabiomarques.ads@gmail.com</li>
            <li><CiCalendar /> Desde outubro 2025</li>
          </ul>

          <ul>
            <li>Natureza</li>
            <li>Design</li>
            <li>Tecnologia</li>
            <li>Rock</li>
          </ul>

        </div>
      </section>
    </main>
  );
}
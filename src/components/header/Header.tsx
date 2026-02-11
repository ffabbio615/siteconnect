import { Link } from "react-router-dom";
import s from "./Header.module.scss";
import { useEffect, useRef, useState } from "react";

export default function Header() {

  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
  }, []);

  useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setOpenMenu(false);
    }
  }

  if (openMenu) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [openMenu]);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <header className={s.header}>
        <Link to="/">
          <img className={s.imgLogo} src="/icons/logo.svg" alt="Imagem de logo do site connect sendo representada por uma mão segurando um coração, simbolizando apoio" />
        </Link>
        { !isMobile &&
          <nav className={s.nav}>
            <Link className={s.link} to="/donations">Doação</Link>
            <Link className={s.link} to="/volunteering">Voluntariado</Link>
            <Link className={s.link} to="/mentoring">Mentoria</Link>
            <Link className={s.link} to="/lecture-events">Eventos</Link>
          </nav>
        }

        <img onClick={toggleMenu} className={s.imgUser} src="https://avatars.githubusercontent.com/u/126684842?v=4" alt="Imagem do usuário" />
      {
        openMenu &&
        <nav ref={menuRef} onMouseLeave={() => setOpenMenu(false)} className={s.navUser}>
          <Link onClick={toggleMenu} className={s.link} to="/user">Fábio Marques</Link>
          <Link onClick={toggleMenu} className={s.link} to="/volunteering">Meu Voluntariado</Link>
          <Link onClick={toggleMenu} className={s.link} to="/user">Configurações</Link>
          { isMobile &&
            <div>
              <Link onClick={toggleMenu} className={s.link} to="/donations">Doação</Link>
              <Link onClick={toggleMenu} className={s.link} to="/volunteering">Voluntariado</Link>
              <Link onClick={toggleMenu} className={s.link} to="/mentoring">Mentoria</Link>
              <Link onClick={toggleMenu} className={s.link} to="/lecture-events">Eventos</Link>
            </div>
          }
          <Link onClick={toggleMenu} className={s.link} to="/">Sair</Link>
        </nav>
      }
    </header>
  );
}
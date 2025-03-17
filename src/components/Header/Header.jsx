import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import LoginModal from "../Login/LoginModal";
import Feedback from "../Feedback/Feedback";
import Ayth from "../Ayth/Ayth";

const Header = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isAythOpen, setIsAythOpen] = useState(false);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Для бургер-меню

  const toggleAuthModal = () => setIsAuthOpen((prev) => !prev);
  const toggleFeedbackModal = () => setIsFeedbackOpen((prev) => !prev);
  const toggleAyth = (e) => {
    e.stopPropagation();
    setIsAythOpen((prev) => !prev);
  };
  const closeMenu = () => setIsMenuOpen(false); // Закрытие меню

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${s.profileWrapper}`)) {
        setIsAythOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className={s.header}>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.menu}>
              <NavLink to="/">
                <img src="/bikePark.png" alt="Logo" />
              </NavLink>

              {/* Бургер-иконка */}

              {/* Меню */}
              <div className={`${s.links} ${isMenuOpen ? s.open : ""}`}>
                {isMenuOpen && ( // Крестик отображается только при открытом меню
                  <button className={s.closeButton} onClick={closeMenu}>✖</button>
                )}

                <NavLink to="/aboutUs" onClick={closeMenu}>О нас</NavLink>
                <NavLink to="/arenda" onClick={closeMenu}>Аренда</NavLink>
                <NavLink to="/pravila" onClick={closeMenu}>Доставка</NavLink>
                <NavLink to="/ride" onClick={closeMenu}>Где кататься</NavLink>
                <NavLink to="/contact" onClick={closeMenu}>Контакты</NavLink>
              </div>
            </div>

            <div className={s.contact}>
             

              <div className={s.profileWrapper}>
                <button className={s.profileIcon} onClick={user ? toggleAyth : toggleAuthModal}>
                  <img src="/profil.png" alt="Профиль" />
                </button>
                {isAythOpen && <Ayth onClose={() => setIsAythOpen(false)} />}
              </div>

              <button className={s.btn} onClick={toggleFeedbackModal}>Feedback</button>
            </div>
              <button className={s.burger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                ☰
              </button>
          </div>
        </div>
      </nav>

      {isAuthOpen && <LoginModal onClose={() => setIsAuthOpen(false)} setUser={setUser} />}
      {isFeedbackOpen && <Feedback onClose={() => setIsFeedbackOpen(false)} />}
    </>
  );
};

export default Header;

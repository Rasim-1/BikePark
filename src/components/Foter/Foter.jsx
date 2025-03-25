import React, { useState } from 'react';
import s from './Foter.module.scss';
import Feedback from '../Feedback/Feedback'; // Импортируем модалку
import { NavLink } from 'react-router-dom';

const Foter = () => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const toggleFeedbackModal = (e) => {
    e.preventDefault(); // Чтобы предотвратить перезагрузку страницы
    setIsFeedbackOpen(true);
  };

  return (
    <>
      <footer className={s.footer}>
        <div className="container">
          <div className={s.wrapper}>
<div className={s.wrapp}>
            <div>
              <h3 className={s.title}>Аренда велосипедов</h3>
              <ul className={s.list}>
                <li>Алюминий</li>
                <li>Карбон</li>
                <li>Горные/городские</li>
                <li>Городские эконом</li>
              </ul>
            </div>

            <div className={s.links}>
              <NavLink to="/pravila" className={s.link}>Правила</NavLink>
              <NavLink to="/aboutUs" className={s.link}>Отзывы</NavLink>
              <NavLink to="/contact" className={s.link}>Контакты</NavLink>
              <a href="#" className={s.link} onClick={toggleFeedbackModal}>Обратная связь</a>
            </div>

</div>
          <div className={s.bottom}>
            <p>&copy; BikePark, 2021</p>
            <NavLink href="#" className={`${s.link} ${s.polic}`}>Политика конфиденциальности</NavLink>
            <div className={s.socials}>
              <NavLink to="/contact"><img src="/fasebook.png" alt="broken" /></NavLink>
              <NavLink to="/contact"><img src="/insta.svg" alt="broken" /></NavLink>
            </div>
          </div>
          </div>
        </div>
      </footer>

      {/* Модалка Feedback */}
      {isFeedbackOpen && <Feedback onClose={() => setIsFeedbackOpen(false)} />}
    </>
  );
};

export default Foter;

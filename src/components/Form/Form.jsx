import { useState } from "react";
import s from "./Form.module.scss";
import styles from "./Form.module.scss";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    consent: false, // добавлено новое поле для согласия
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <>
      <div className={s.container__contact}>
        <div className={s.wrapper}>
          <div className={s.contact__info}>
            <h2>Контакты</h2>
            <div className={s.contact__text}>
              <p>Номер телефона</p>
              <h4>+971 52 563 4064</h4>

              <p>E-mail</p>
              <h4>BikeParkInfo@gmail.com</h4>

              <p>Адрес</p>
              <h4>Ташкент. Главпочтамт</h4>
            </div>
          </div>

          <div className={s.contact__form}>
            <form className={styles.form}>
              <div className={s.contact__info_2}>
                <p>Оставить заявку</p>
                <h3>Остались вопросы? Свяжитесь с нами</h3>
              </div>
              <label className={styles.inputLabel}>
                Имя*
                <input
                  type="text"
                  name="name"
                  placeholder="Введите имя"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.inputField}
                />
              </label>

              <label className={styles.inputLabel}>
                Номер телефона*
                <input
                  type="tel"
                  name="phone"
                  placeholder="Введите номер телефона"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.inputField}
                />
              </label>

              <label className={styles.inputLabel}>
                Сообщение
                <textarea
                  name="message"
                  placeholder="Введите ваше сообщение"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.inputField}
                />
              </label>
<div className={s.checkboxWrapper1}>
              <label className={`${s.inputLabel} ${s.checkboxWrapper}`}>
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className={s.checkbox}
                />
                <span>Согласен на обработку персональных данных</span>
              </label>

</div>
              {/* Согласие на обработку персональных данных */}

              <button
                type="submit"
                className={styles.submitButton}
                disabled={!formData.consent} // кнопка отправки будет активна только если галочка поставлена
              >
                Отправить
              </button>
            </form>
          </div>
        </div>

        <div className={s.contact__map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.6412555601614!2d69.28132876732528!3d41.31666729398732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2d901c2def%3A0x1bb221455121c6e8!2z0JPQu9Cw0LLQv9C-0YfRgtCw0LzRgg!5e0!3m2!1sru!2s!4v1739553169520!5m2!1sru!2s"
            width="95%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contacts;

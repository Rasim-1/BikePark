import React, { useState } from "react";
import s from "./Feedback.module.scss";

const TELEGRAM_BOT_TOKEN = "8179070305:AAHR4Z-cF_3IPLIjI_fcYvq4OJ1dHmsSHPw"; // Твой токен бота
const CHAT_ID = "-1002330188805"; // ID чата, куда слать сообщения
const API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

const Feedback = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "", // Сообщение обязательно
  });

  const [loading, setLoading] = useState(false); // Индикатор загрузки
  const [error, setError] = useState(null); // Ошибки

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const text = `
      ✉️ Новый вопрос:
      🔹 Имя: ${formData.name || "Не указано"}
      📞 Телефон: ${formData.phone || "Не указано"}
      💬 Сообщение: ${formData.message}
    `;

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text }),
      });

      if (!response.ok) {
        throw new Error("Ошибка отправки. Проверьте TOKEN и CHAT_ID");
      }

      setFormData({ name: "", phone: "", email: "", message: "" });
      onClose(); // Закрываем модалку после успешной отправки
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={s.modalOverlay} onClick={onClose}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={s.closeButton} onClick={onClose}>✖</button>

        <div className={s.contactForm}>
          <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.contactInfo}>
              <h3>Остались вопросы? Свяжитесь с нами</h3>
            </div>

            <label className={s.inputLabel}>
              Имя (не обязательно)
              <input
                type="text"
                name="name"
                placeholder="Введите имя"
                value={formData.name}
                onChange={handleChange}
                className={s.inputField}
              />
            </label>

            <label className={s.inputLabel}>
              Номер телефона (не обязательно)
              <input
                type="tel"
                name="phone"
                placeholder="Введите номер телефона"
                value={formData.phone}
                onChange={handleChange}
                className={s.inputField}
              />
            </label>

            <label className={s.inputLabel}>
              Сообщение (обязательно)
              <textarea
                name="message"
                placeholder="Введите ваше сообщение"
                value={formData.message}
                onChange={handleChange}
                className={s.inputField}
                required
              />
            </label>

            {error && <p className={s.errorText}>{error}</p>}

            <button
              type="submit"
              className={s.submitButton}
              disabled={!formData.message.trim() || loading} // Кнопка активна только если есть сообщение и нет загрузки
            >
              {loading ? "Отправка..." : "Отправить"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

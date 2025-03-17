import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import s from "./Forus.module.scss";
import Card from "../Card/Card";

const reviews = [
  { text: "Брали велосипеды на целый день, все прошло отлично!", author: "Павел Подвохов" },
  { text: "Арендовал электросамокат, удобно, зарядки хватило.", author: "Иван Говновозов" },
  { text: "Катались на сапбордах, всё оборудование в порядке.", author: "Смирнова Ольга" },
  { text: "Брали каяки – суперский опыт! Всё объяснили, дали жилеты.", author: "Кузнецова Дарина" },
  { text: "Электросамокат оказался спасением! Единственный минус – мало станций.", author: "Федорова Елена" },
  { text: "Отличный сервис! Взяли велосипеды всей семьёй.", author: "Андрей Барсуков" },
];

const Forus = () => {
  return (
    <div className={s.wrapper}>
      {/* 📌 Блок "О нас" */}
      <div className={s.aboutSection}>
        <div className={s.textContent}>
          <h1>О нас</h1>
          <p className={s.text}>
            BikePark — это удобный и надежный сервис аренды в самом сердце Ташкента, созданный для тех, кто любит движение, свободу и активный отдых. Мы предлагаем в прокат не только велосипеды, но и электросамокаты, сапборды, каяки, тренажеры, а также транспорт для людей с ограниченными возможностями.
            <span>
              Ташкент — город, который вдохновляет на новые открытия, и с BikePark ты сможешь исследовать его без лишних забот! Будь в движении, наслаждайся свободой и доверься сервису, которому доверяют тысячи!
            </span>
          </p>
        </div>
        <Card />
      </div>

      {/* 📌 Блок "Отзывы" */}
      <div className={s.reviewsSection}>
        <h2>Отзывы</h2>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.5}
          spaceBetween={20}
          loop={true}
       
          modules={[EffectCoverflow]}
          coverflowEffect={{
            rotate: 0,
            stretch: 50,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          className={s.slider}
          breakpoints={{
            1024: { slidesPerView: 3, spaceBetween: 20 },
        
            700: { slidesPerView: 1, spaceBetween: 0 }, // 📌 Только 1 отзыв при 700px и ниже
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className={s.reviewCard}>
              <p>{review.text}</p>
              <span className={s.author}>{review.author}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Forus;

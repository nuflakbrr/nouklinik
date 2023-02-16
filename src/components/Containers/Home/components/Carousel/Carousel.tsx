import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

const Carousel: FC = () => {
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={2}
      centeredSlides={true}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      breakpoints={{
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
      }}
      modules={[Navigation]}
    >
      <SwiperSlide className="py-5">
        <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
            alt="Sunset in the mountains"
            loading="lazy"
            className="w-full h-52 object-cover object-center"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="py-5">
        <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
            alt="Sunset in the mountains"
            loading="lazy"
            className="w-full h-52 object-cover object-center"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="py-5">
        <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
            alt="Sunset in the mountains"
            loading="lazy"
            className="w-full h-52 object-cover object-center"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="py-5">
        <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
            alt="Sunset in the mountains"
            loading="lazy"
            className="w-full h-52 object-cover object-center"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;

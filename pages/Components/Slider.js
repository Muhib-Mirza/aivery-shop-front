import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Autoplay, Pagination, EffectCreative, Navigation } from "swiper";
import { motion } from "framer-motion";
import style from "../../styles/Home.module.css";

const Slider = () => {
  const animateVariants = {
    hidden:{
      opacity:0,
      y:"10rem"
    },
    animate:{
      opacity:1,
      y:"0rem",
      transition:{
        type:"spring",
            stiffness:140,
            damping:11,
            duration:0.3,
            repeat:0
      }
    }
  }
  return (
    <Swiper
        navigation={true}
        spaceBetween={30}
        grabCursor={true}
        effect={"creative"}
        loop={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>
          <motion.div className={style.sliderContainer}
          variants = { animateVariants }
          initial={"hidden"}
          animate={"animate"}
          >
            <div className={style.carouselHead}>
            We raise them with love.
            </div>
          </motion.div>
          
          <img src="/slide2.jpg" alt="" className={style.imag} />
        </SwiperSlide>
        <SwiperSlide>
          <motion.div className={style.sliderContainer} variants = { animateVariants }
          initial={"hidden"}
          animate={"animate"}>
            <div className={style.carouselHead}>
            Their Food is full of vitamins.
            </div>
          </motion.div>
          <img src="/slide4.jpg" alt="" className={style.imag} />
        </SwiperSlide>
        <SwiperSlide>
          <motion.div className={style.sliderContainer} variants = { animateVariants }
          initial={"hidden"}
          animate={"animate"}>
            <div className={style.carouselHead}>
            Their Health is our first priority.
            </div>
          </motion.div>
          <img src="/slide5.jpg" alt="" className={style.imag} />
        </SwiperSlide>
      </Swiper>
  );
};

export default Slider;

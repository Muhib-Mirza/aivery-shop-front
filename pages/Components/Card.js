import { motion } from "framer-motion";
import style from "../../styles/Card.module.css";
import Image from "next/image";

const Card = () => {
  const animateLeft = {
    init: {
      opacity: 0,
      x: "30vw",
    },
    end: {
      opacity: 1,
      x: 0,
    },
  };
  const animateRight = {
    init: {
      opacity: 0,
      x: "-30vw",
    },
    end: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <>
      <div className={style.container}>
        <motion.div
          className={style.topimg}
          variants={animateLeft}
          initial="init"
          whileInView={"end"}
          transition={{
            type: "spring",
            stiffness: 140,
            duration: 1.5,
          }}
          viewport={{ once: false, amount: 0.1 }}
          whileHover={{scale:1.02}}
        >
          <Image
            src="/img1.jpg"
            alt="No Image"
            height={210.5}
            width={440}
            className={style.cardimg}
          />
        </motion.div>
        <motion.div
          className={style.topimg}
          variants={animateRight}
          initial="init"
          whileInView={"end"}
          transition={{
            type: "spring",
            stiffness: 140,
            duration: 1.5,
          }}
          whileHover={{scale:1.02}}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Image
            src="/img3.jpg"
            alt="No Image"
            height={210.5}
            width={440}
            className={style.cardimg}
          />
        </motion.div>
        <motion.div
          className={style.botimg}
          variants={animateLeft}
          initial="init"
          whileInView={"end"}
          transition={{
            type: "spring",
            stiffness: 140,
            duration: 1.5,
          }}
          whileHover={{scale:1.02}}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Image
            src="/img8.jpg"
            alt="No Image"
            height={210.5}
            width={440}
            className={style.cardimg}
          />
        </motion.div>
        <motion.div
          className={style.botimg}
          variants={animateRight}
          initial="init"
          whileInView={"end"}
          transition={{
            type: "spring",
            stiffness: 140,
            duration: 1.5,
          }}
          whileHover={{scale:1.02}}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Image
            src="/img09.jpg"
            alt="No Image"
            height={210.5}
            width={440}
            className={style.cardimg}
          />
        </motion.div>
        <motion.div
          className={style.botimg}
          variants={animateLeft}
          initial="init"
          whileInView={"end"}
          transition={{
            type: "spring",
            stiffness: 140,
            duration: 1.5,
          }}
          whileHover={{scale:1.02}}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Image
            src="/img10.jpg"
            alt="No Image"
            height={210.5}
            width={440}
            className={style.cardimg}
          />
        </motion.div>
        <motion.div
          className={style.botimg}
          variants={animateRight}
          initial="init"
          whileInView={"end"}
          transition={{
            type: "spring",
            stiffness: 140,
            duration: 1.5,
          }}
          whileHover={{scale:1.02}}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Image
            src="/img12.jpg"
            alt="No Image"
            height={210.5}
            width={440}
            className={style.cardimg}
          />
        </motion.div>
      </div>
    </>
  );
};

export default Card;

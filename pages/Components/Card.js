import { motion } from "framer-motion";
import style from "../../styles/Card.module.css";
import Image from "next/image";
import { useState } from "react";

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
  const [flag1,setFlag] = useState(false)
  const [flag2,setFlag2] = useState(false)
  const [flag3,setFlag3] = useState(false);
  return (
    <>
      <div className={style.container}>
        <a href="/gop">
        <motion.div
        onViewportEnter={()=>setFlag(true)}
          className={style.topimg}
          variants={animateLeft}
          initial="init"
          animate= {
            flag1 ? "end" : "init"
          }
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
        </a>
        <a href="/gosb">
        <motion.div
          className={style.topimg}
          variants={animateRight}
          initial="init"
          animate= {
            flag1 ? "end" : "init"
          }
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
        </a>
        <a href="/gesb">
        <motion.div
        onViewportEnter={()=>setFlag2(true)}
          className={style.botimg}
          variants={animateLeft}
          initial="init"
          animate={
            flag2 ? "end" : "init" 
          }
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
        </a>
        <a href="/beo">
        <motion.div
          className={style.botimg}
          variants={animateRight}
          initial="init"
          animate={
            flag2 ? "end" : "init" 
          }
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
        </a>
        <a href="/po">
        <motion.div
        onViewportEnter={()=>setFlag3(true)}
          className={style.botimg}
          variants={animateLeft}
          initial="init"
          animate = {
            flag3 ? "end" : "init"
          }
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
        </a>
        <a href="/fisher">
        <motion.div
          className={style.botimg}
          variants={animateRight}
          initial="init"
          animate = {
            flag3 ? "end" : "init"
          }
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
        </a>
      </div>
    </>
  );
};

export default Card;

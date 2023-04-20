import { motion } from "framer-motion";
import { useState } from "react";
import style from "../styles/Cards.module.css";

const Card = () => {
  const parent = {
    init: {
      opacity: 0,
    },
    end: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 180,
        staggerChildren: 0.1,
      },
    },
  };
  const child = {
    init: {
      opacity: 0,
      x: -80,
    },
    end: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 180,
        duration: 0.8,
      },
    },
  };

  const [flag, setFlag] = useState(false);
  return (
    <>
      {/* <motion.div
    variants={parent}
    initial="init"
    animate="end"
    className={`${style.container} cont`}
    >
        <motion.div className={`${style.item}`}
        variants={child}
        >1</motion.div>
        <motion.div className={`${style.item} ${style.margn}`}
        variants={child}
        >2</motion.div>
        <motion.div className={`${style.item} ${style.margn}`}
        variants={child}
        >3</motion.div>
        <motion.div className={`${style.item} ${style.margn}`}
        variants={child}
        >4</motion.div>
        <motion.div className={`${style.item} ${style.margn}`}
        variants={child}
        >5</motion.div>
    <motion.div className={style.box} 
    animate={{x:["0vw","70vw","0vw"],rotate:[0,360,0]}}
    transition={{type:"tween",duration:1.5,
    // repeat:Infinity For Infinte Animation
  }}
    >

    </motion.div>
    <motion.div className={`${style.box} ${style.margn}`}
    whileHover={{scale:1.1}}
    transition={{type:"spring",stiffness:180,duration:1}}
    whileTap={{scale:0.8}}
    drag
    dragConstraints={{
      right:20,
      left:-20,
      top:5,
      bottom:5
    }}
    >

    </motion.div>
    <motion.div className={`${style.box} ${style.margn}`}
    whileHover={{
      scale:[1,1.1,0.9,1,0.9,1],
      borderRadius:["20%","50%","50%","25%","20%"],
      rotate:[0,180,360,180]
    }}
    animate={{scale:1}}
    transition={{type:"spring",stiffness:180,duration:1.5}}
    >

    </motion.div>
    <motion.div className={`${style.box} ${style.margn}`}
    whileHover={{
      rotateX:"100deg",
      rotateY:"100deg",
      rotateZ:"80deg"
    }}
    transition={{duration:2,type:"tween",ease:"easeInOut"}}
    >
    </motion.div>
    </motion.div> */}
      {/* <div className={style.container}>
    <motion.div className={style.card}
    whileHover={{
      rotateX:"20deg",
      rotateY:"-5deg"
    }}
    transition={{
      duration:1,
      type:"tween",
      ease:"easeInOut"
    }}
    onMouseEnter={()=>setFlag(!flag)}
    >
      <div className={style.imgCont}>
      <motion.img src="/office-building.png" alt="" className={style.image} 
      animate ={
        flag ?{
          rotateX:"0deg !important",
        }:{
          rotateX:"0deg"
        }
      }
      />
      </div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta quo explicabo impedit quam, aliquid, quae, asperiores atque fuga eveniet nulla deleniti libero rerum placeat labore veniam similique suscipit obcaecati dolorum?
      </div>
    </motion.div>
    </div> */}
    <div className={style.container}>
      <div className={`${style.card} ${style.mgn}`}>
        <div className={style.content}>
          <p>
            House Section
          </p>
          <div className={style.aref}>
          <a href="#" className={style.link}>Buy Now</a>
          </div>
        </div>
        <img src="/office-building.png" alt="" className={style.cimage} />
      </div>
      <motion.div className={style.card}
      whileHover={{
        rotateY:"180deg"
      }}
      transition={{
        duration:0.5
      }}
      >
        <div className={style.content}>
          <p>
            House Section
          </p>
          <div className={style.aref}>
          <a href="#" className={style.link}>Buy Now</a>
          </div>
        </div>
        <img src="/office-building.png" alt="" className={style.cimage2} />
      </motion.div>
      </div>
    </>
  );
};

export default Card;

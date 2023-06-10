import { motion } from "framer-motion";
import style from "../../styles/Drawer.module.css";
import { RxCross1 } from "react-icons/rx";

let x = 1;
const Drawer = () => {
  const toggle = () => {
    x++;
    if (x % 2 == 0) {
      document.querySelector(".toggle").style.transform = "translateX(0)";
    } else {
      document.querySelector(".toggle").style.transform = "translateX(-20rem)";
    }
  };
  const remove = () => {
    x++;
    document.querySelector(".toggle").style.transform = "translateX(-20rem)";
  };
  return (
    //To Add More then one className
    //<div className={`${style.container} ${style.test}`}>
    <>
    <div className="drawer">
      <motion.img
        src="/list.png"
        alt="No Image"
        className={style.image}
        whileHover={{ scale: 1.2 }}
        onClick={toggle}
      />
      <motion.div className={`${style.container} ${style.position} toggle`}>
        <RxCross1 className={`${style.cross}`} onClick={remove} />
        <h2 className={style.dheading}>Morning Star Aivary</h2>
        <h2 className={`${style.dheading} ${style.space}`}>Categories</h2>
        <h1 className={`${style.dheading} ${style.listheading}`}>Love Birds</h1>
        <ol className={style.list}>
          <a href="/ab" className={`${style.link}`}>
            <motion.div className={`${style.dheading}`}>
              <motion.li
                className={` ${style.listtext}`}
                whileHover={{ scale: 1.1, originX: 0 }}
                transition={{ type: "spring", stiffness: 140, duration:0.2 }}
              >
                1. Albino Black Eye
              </motion.li>
            </motion.div>
          </a>
          <a href="/ar" className={`${style.link}`}>
            <motion.div className={`${style.dheading}`}>
              <motion.li
                className={` ${style.listtext}`}
                whileHover={{ scale: 1.1, originX: 0 }}
                transition={{ type: "spring", stiffness: 140, duration:0.2 }}
              >
                2 . Albino Red Eye
              </motion.li>
            </motion.div>
          </a>
          <a href="/psi" className={`${style.link}`}>
            <motion.div className={`${style.dheading}`}>
              <motion.li
                className={` ${style.listtext}`}
                whileHover={{ scale: 1.1, originX: 0 }}
                transition={{ type: "spring", stiffness: 140,duration:0.2 }}
              >
                3. Parblue Split Ino
              </motion.li>
            </motion.div>
          </a>
          <a href="/crm" className={`${style.link}`}>
            <motion.div className={`${style.dheading}`}>
              <motion.li
                className={` ${style.listtext}`}
                whileHover={{ scale: 1.1, originX: 0 }}
                transition={{ type: "spring", stiffness: 140,duration:0.2 }}
              >
                4. Cremino
              </motion.li>
            </motion.div>
          </a>
          <a href="/pin" className={`${style.link}`}>
            <motion.div className={`${style.dheading}`}>
              <motion.li
                className={` ${style.listtext}`}
                whileHover={{ scale: 1.1, originX: 0 }}
                transition={{ type: "spring", stiffness: 140,duration:0.2 }}
              >
                5. Pastle Ino
              </motion.li>
            </motion.div>
          </a>
        </ol>
        <h1 className={`${style.dheading} ${style.listheading}`}>Opalines</h1>
        <ol>
          <a href="/gop" className={`${style.link}`}>
            <motion.div className={`${style.dheading}`}>
              <motion.li
                className={` ${style.listtext}`}
                whileHover={{ scale: 1.1, originX: 0 }}
                transition={{ type: "spring", stiffness: 140,duration:0.2 }}
              >
                1. Green Opaline
              </motion.li>
            </motion.div>
          </a>
          <a href="/geo" className={`${style.link}`}>
            <motion.div className={`${style.dheading}`}>
              <motion.li
                className={` ${style.listtext}`}
                whileHover={{ scale: 1.1, originX: 0 }}
                transition={{ type: "spring", stiffness: 140,duration:0.2 }}
              >
                2 . Green Euwing Opalines
              </motion.li>
            </motion.div>
          </a>
          <a href="/gosb" className={`${style.link}`}>
            <motion.div className={`${style.dheading}`}>
              <motion.li
                className={` ${style.listtext}`}
                whileHover={{ scale: 1.1, originX: 0 }}
                transition={{ type: "spring", stiffness: 140,duration:0.2 }}
              >
              3. Green Opalines Split Blue
              </motion.li>
            </motion.div>
          </a>
          <a href="/gesb" className={`${style.link}`}>
            <motion.div className={`${style.dheading}`}>
              <motion.li
                className={` ${style.listtext}`}
                whileHover={{ scale: 1.1, originX: 0 }}
                transition={{ type: "spring", stiffness: 140 ,duration:0.2}}
              >
                4. Green Euwing / blue
              </motion.li>
            </motion.div>
          </a>
          <a href="/beo" className={`${style.link}`}>
            <motion.div className={`${style.dheading}`}>
              <motion.li
                className={` ${style.listtext}`}
                whileHover={{ scale: 1.1, originX: 0 }}
                transition={{ type: "spring", stiffness: 140,duration:0.2 }}
              >
                5. Blue Euwing Opalines
              </motion.li>
            </motion.div>
          </a>
          <a href="/po" className={`${style.link}`}>
            <motion.div className={`${style.dheading}`}>
              <motion.li
                className={` ${style.listtext}`}
                whileHover={{ scale: 1.1, originX: 0 }}
                transition={{ type: "spring", stiffness: 140,duration:0.2 }}
              >
                6. Parblue Opalines
              </motion.li>
            </motion.div>
          </a>
          <a href="/gsosp" className={`${style.link}`}>
            <motion.div className={`${style.dheading}`}>
              <motion.li
                className={` ${style.listtext}`}
                whileHover={{ scale: 1.1, originX: 0 }}
                transition={{ type: "spring", stiffness: 140,duration:0.2 }}
              >
                7. Green/ opaline/Parblue
              </motion.li>
            </motion.div>
          </a>
        </ol>
        <a href="/fisher">
        <h1 className={`${style.dheading} ${style.listheading}`}>Fishers</h1>
        </a>
      </motion.div>
      </div>
    </>
  );
};

export default Drawer;
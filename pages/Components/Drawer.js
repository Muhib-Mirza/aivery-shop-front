import { motion } from "framer-motion";
import style from "../../styles/Drawer.module.css";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";

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
        <ol>
          <Link href="/ab" className={`${style.link}`}>
            <motion.div className={`${style.dheading}`}>
              <motion.li
                className={` ${style.listtext}`}
                whileHover={{ scale: 1.2, originX: 0 }}
                transition={{ type: "spring", stiffness: 140 }}
                onClick={remove}
              >
                1. Albino Black Eye
              </motion.li>
            </motion.div>
          </Link>
          <Link href="/ar" className={`${style.link}`}>
            <motion.div className={`${style.dheading}`}>
              <motion.li
                className={` ${style.listtext}`}
                whileHover={{ scale: 1.2, originX: 0 }}
                transition={{ type: "spring", stiffness: 140 }}
                onClick={remove}
              >
                2 . Albino Red Eye
              </motion.li>
            </motion.div>
          </Link>
          <Link href="/psi" className={`${style.link}`}>
            <motion.div className={`${style.dheading}`}>
              <motion.li
                className={` ${style.listtext}`}
                whileHover={{ scale: 1.2, originX: 0 }}
                transition={{ type: "spring", stiffness: 140 }}
                onClick={remove}
              >
                3. Parblue Split Ino
              </motion.li>
            </motion.div>
          </Link>
          <Link href="/crm" className={`${style.link}`}>
            <motion.div className={`${style.dheading}`}>
              <motion.li
                className={` ${style.listtext}`}
                whileHover={{ scale: 1.2, originX: 0 }}
                transition={{ type: "spring", stiffness: 140 }}
                onClick={remove}
              >
                4. Cremino
              </motion.li>
            </motion.div>
          </Link>
          <Link href="/pin" className={`${style.link}`}>
            <motion.div className={`${style.dheading}`}>
              <motion.li
                className={` ${style.listtext}`}
                whileHover={{ scale: 1.2, originX: 0 }}
                transition={{ type: "spring", stiffness: 140 }}
                onClick={remove}
              >
                5. Pastle Ino
              </motion.li>
            </motion.div>
          </Link>
        </ol>
        <h1 className={`${style.dheading} ${style.listheading}`}>Opalines</h1>
        <ol>
          <Link href="/gop" className={`${style.link}`}>
            <motion.div className={`${style.dheading}`}>
              <motion.li
                className={` ${style.listtext}`}
                whileHover={{ scale: 1.2, originX: 0 }}
                transition={{ type: "spring", stiffness: 140 }}
                onClick={remove}
              >
                1. Green Opaline
              </motion.li>
            </motion.div>
          </Link>
          <Link href="/geo" className={`${style.link}`}>
            <motion.div className={`${style.dheading}`}>
              <motion.li
                className={` ${style.listtext}`}
                whileHover={{ scale: 1.2, originX: 0 }}
                transition={{ type: "spring", stiffness: 140 }}
                onClick={remove}
              >
                2 . Green Euwing Opalines
              </motion.li>
            </motion.div>
          </Link>
          <Link href="/gosb" className={`${style.link}`}>
            <motion.div className={`${style.dheading}`}>
              <motion.li
                className={` ${style.listtext}`}
                whileHover={{ scale: 1.2, originX: 0 }}
                transition={{ type: "spring", stiffness: 140 }}
                onClick={remove}
              >
              3. Green Opalines Split Blue
              </motion.li>
            </motion.div>
          </Link>
          <Link href="/gesb" className={`${style.link}`}>
            <motion.div className={`${style.dheading}`}>
              <motion.li
                className={` ${style.listtext}`}
                whileHover={{ scale: 1.2, originX: 0 }}
                transition={{ type: "spring", stiffness: 140 }}
                onClick={remove}
              >
                4. Green Euwing / blue
              </motion.li>
            </motion.div>
          </Link>
          <Link href="/beo" className={`${style.link}`}>
            <motion.div className={`${style.dheading}`}>
              <motion.li
                className={` ${style.listtext}`}
                whileHover={{ scale: 1.2, originX: 0 }}
                transition={{ type: "spring", stiffness: 140 }}
                onClick={remove}
              >
                5. Blue Euwing Opalines
              </motion.li>
            </motion.div>
          </Link>
          <Link href="/po" className={`${style.link}`}>
            <motion.div className={`${style.dheading}`}>
              <motion.li
                className={` ${style.listtext}`}
                whileHover={{ scale: 1.2, originX: 0 }}
                transition={{ type: "spring", stiffness: 140 }}
                onClick={remove}
              >
                6. Parblue Opalines
              </motion.li>
            </motion.div>
          </Link>
          <Link href="/gsosp" className={`${style.link}`}>
            <motion.div className={`${style.dheading}`}>
              <motion.li
                className={` ${style.listtext}`}
                whileHover={{ scale: 1.2, originX: 0 }}
                transition={{ type: "spring", stiffness: 140 }}
                onClick={remove}
              >
                7. Green/ opaline/Parblue
              </motion.li>
            </motion.div>
          </Link>
        </ol>
        <h1 className={`${style.dheading} ${style.listheading}`}>Fishers</h1>
      </motion.div>
      </div>
    </>
  );
};

export default Drawer;
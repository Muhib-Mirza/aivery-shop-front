import style from "../../styles/navbar.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const animateHover = {
    init: {
      scale: 1,
      borderRadius: "0.7rem"
    },
    hover: {
      scale: 1.3,
      borderRadius: "0.7rem",
      backgroundColor: "white",
      color: "#083339",
    },
    transition:{
        type: "spring", 
        stiffness: 200
    }
  };
  return (
    <>
      <nav className={style.navbar}>
        <ul className={style.container}>
          <Link href="/" className={style.Link}>
            <motion.li
              variants={animateHover}
              initial="init"
              whileHover="hover"
              transition="transition"
              className={style.margin}
            >
              Home
            </motion.li>
          </Link>
          <a href="tel:+923070408790" className={style.Link}>
            <motion.li
            variants={animateHover}
            initial="init"
            whileHover="hover"
            transition="transition"
            >Contact Us</motion.li>
          </a>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

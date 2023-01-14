import style from '../../styles/Fotter.module.css'
import Image from 'next/image';
import {motion} from 'framer-motion'

const Fotter = () => {
    return ( 
        <>
        <footer>
        <div className={style.container}>
        <a href="tel:+923070408790" className={style.link}>
            <Image src="/telephone.png" alt='No Image' height={32} width={32} />
            <motion.div className={style.tel} whileHover={{scale:1.2}} transition={{type:"spring",stiffness:130}}>
            +923070408790
            </motion.div>
            </a>
        </div>
        </footer>
        </>
     );
}
 
export default Fotter;
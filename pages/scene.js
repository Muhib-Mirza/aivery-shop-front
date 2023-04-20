import { Canvas } from "@react-three/fiber"
import { motion } from "framer-motion-3d"
const Scene = ({ isHovered }) => {
    return ( 
        <Canvas>
      <motion.group animate={isHovered ? "hover" : "rest"}>
        <motion.mesh variants={{ hover: { z: 1 } }} />
      </motion.group>
    </Canvas>
     );
}
 
export default Scene;
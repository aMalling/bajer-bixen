import Image from "next/image";
import { motion } from "framer-motion";

function OpenBeer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      {new Date("2022-12-01") <= new Date() ? (
        <Image
          className="md:bg-black p-3 transition"
          src={require("@/assets/bajerBiksen_logo.png")}
          width={200}
          alt="Logo"
        />
      ) : (
        <div>1 </div>
      )}
    </motion.div>
  );
}

export default OpenBeer;

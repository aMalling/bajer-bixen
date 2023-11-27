"use ";
import Image from "next/image";
import { motion } from "framer-motion";
import { beerCalenderData } from "@/app/lib/data";
type BeerProps = {
  dato: number;
};
function OpenBeer(calenderDate: BeerProps) {
  const beerInfo = beerCalenderData[calenderDate.dato - 1];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      {new Date(`2023-12-${beerInfo.dato}`) <= new Date() ? (
        <Image
          className="md:bg-black p-3 transition"
          src={require("@/assets/bajerBiksen_logo.png")}
          width={200}
          alt="Logo"
        />
      ) : (
        <div>{calenderDate.dato} </div>
      )}
    </motion.div>
  );
}

export default OpenBeer;

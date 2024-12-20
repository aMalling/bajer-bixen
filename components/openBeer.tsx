"use client ";
import Image from "next/image";
import { motion } from "framer-motion";
import { beerCalenderData } from "@/app/lib/data";

function OpenBeer(calenderDate: any) {
  console.log(calenderDate.calenderDate.dato);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      {new Date(`2024-12-${calenderDate.calenderDate.dato}`) <= new Date() ? (
        <Image
          className="md:bg-black p-3 transition"
          src={require("@/assets/bajerBiksen_logo.png")}
          width={200}
          alt="Logo"
        />
      ) : (
        <div>{calenderDate.calenderDate.dato} </div>
      )}
    </motion.div>
  );
}

export default OpenBeer;

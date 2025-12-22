"use client ";
import Image from "next/image";
import { motion } from "framer-motion";
import { beerCalenderData } from "@/app/lib/data";
import { beerCalenderData as beerData2024 } from "@/app/lib/data2024";
import { beerCalenderData as beerData2023 } from "@/app/lib/data2023";

function OpenBeer({ calenderDate, year }: { calenderDate: any; year: number }) {
  console.log(calenderDate.dato);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      {new Date(`${year}-12-${calenderDate.dato}`) <= new Date() ? (
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

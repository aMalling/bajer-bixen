"use client";
import Image from "next/image";
import Link from "next/link";
import { beerCalenderData } from "@/app/lib/data";
import { motion } from "framer-motion";
function MyCard({ calenderDate }) {
  const beerInfo = beerCalenderData[calenderDate.dato - 1];

  return (
    <div>
      {new Date(`2024-12-${beerInfo.dato}`) <= new Date() ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:absolute md:w-full 2xl:h-[115vh] md:h-[100vh] md:bg-black/60 md:top-0 md:right-0 md:z-50"
        >
          <motion.div
            initial={{ opacity: 0.4, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ top: calenderDate.top }}
            className="z-40 absolute flex mx-3 flex-col w-[265px] bg-white border-1 border-black mt-2 shadow-xl md:hidden"
          >
            <button className="absolute top-0 right-0 text-right mx-3 p-1 shadow-sm rounded-full cursor-pointer text-gray-100 font-semibold">
              x
            </button>
            <Image
              src={require(`@/assets/beer_${beerInfo.dato}.jpg`)}
              width={300}
              alt="Logo"
            />
            <div className="p-3">
              <p className="font-bold text-lg "> {beerInfo.navn}</p>
              <p className="italic font-serif ">{beerInfo.bryggeri}</p>
              <p className="text-sm font-semibold"> {beerInfo.Alkohol}% </p>
              <p className="italic font-semibold mb-3 ">{beerInfo.land}</p>
              <p className="font-serif">{beerInfo.brødtekst}</p>

              <div className="mt-4">
                <Link href={beerInfo.untappdlink}>
                  <button>
                    <Image
                      src={require("@/assets/untappd_button_icon.png")}
                      width={100}
                      alt="Logo"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.4, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className=" z-40 md:fixed hidden md:flex flex-col md:flex-row bg-orange-50 border-1 border-black mt-2 md:right-0 md:left-0 lg:mx-32 xl:mx-44 md:top-20 md:top-40 2xl:top-1/4 shadow-xl"
          >
            <button className=" absolute top-0 right-0 text-right bg mx-3 p-1 shadow-sm rounded-full cursor-pointer">
              x
            </button>
            <Image
              className=""
              src={require(`@/assets/beer_${beerInfo.dato}.jpg`)}
              width={300}
              alt="Logo"
            />
            <div className="p-3">
              <p className="font-bold text-lg "> {beerInfo.navn}</p>
              <p className="italic font-serif ">{beerInfo.bryggeri}</p>
              <p className="text-sm font-semibold"> {beerInfo.Alkohol}% </p>
              <p className="italic font-semibold mb-3 ">{beerInfo.land}</p>
              <p className="font-serif">{beerInfo.brødtekst}</p>

              <div className="mt-4">
                <Link href={beerInfo.untappdlink}>
                  <button>
                    <Image
                      src={require("@/assets/untappd_button_icon.png")}
                      width={100}
                      alt="Logo"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </div>
  );
}

export default MyCard;

"use client";
import Image from "next/image";
import Link from "next/link";
import { beerCalenderData } from "@/app/lib/data";
import { motion } from "framer-motion";
function MyCard({ calenderDate }) {
  const beerInfo = beerCalenderData[calenderDate.dato - 1];

  /*   console.log(calenderDate - 1);
  const beerInfo = beerCalenderData[calenderDate - 1];
 */

  return (
    <div>
      {new Date(`2023-11-${beerInfo.dato}`) <= new Date() ? (
        <div>
          <motion.div
            initial={{ opacity: 0.4, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ top: calenderDate.top }}
            className=" z-40 absolute flex mx-3 flex-col w-[265px] bg-white border-1 border-black z-10 mt-2 shadow-xl md:hidden"
          >
            <button className="absolute top-0 right-0 text-right mx-3 p-1 shadow-sm rounded-full cursor-pointer">
              x
            </button>
            <Image
              /* src={require("@/assets/beer_17.jpg")} */
              src={require(`@/assets/beer_${beerInfo.dato}.jpg`)}
              width={300}
              alt="Logo"
            />
            <div className="p-3">
              <p className="font-bold text-lg"> {beerInfo.navn}</p>
              <p className="text-sm">DIPA {beerInfo.alkohol} ABV</p>
              <p className="italic font-semibold ">{beerInfo.land}</p>
              <p className="italic mb-5">{beerInfo.bryggeri}</p>
              {beerInfo.brødtekst}
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
            className=" z-40 md:fixed hidden md:flex flex-col w-[265px]  md:flex-row md:h-1/3 md:w-[850px] bg-orange-50 border-1 border-black z-10 mt-2 md:right-0 md:left-0 md:mx-auto md:top-1/4 shadow-xl "
          >
            <button className=" absolute top-0 right-0 text-right bg mx-3 p-1 shadow-sm rounded-full cursor-pointer">
              x
            </button>
            <Image
              className=""
              /* src={require("@/assets/beer_17.jpg")} */
              src={require(`@/assets/beer_${beerInfo.dato}.jpg`)}
              width={300}
              alt="Logo"
            />
            <div className="p-3">
              <p className="font-bold text-lg"> {beerInfo.navn}</p>
              <p className="text-sm">DIPA {beerInfo.alkohol} ABV</p>
              <p className="italic font-semibold ">{beerInfo.land}</p>
              <p className="italic mb-5">{beerInfo.bryggeri}</p>
              {beerInfo.brødtekst}
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
        </div>
      ) : null}
    </div>
  );
}

export default MyCard;

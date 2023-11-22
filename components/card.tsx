import Image from "next/image";
import Link from "next/link";
import { beerCalenderData } from "@/app/lib/data";
function MyCard({ calenderDate }) {
  const beerInfo = beerCalenderData[calenderDate.dato - 1];
  console.log(calenderDate.dato);

  /*   console.log(calenderDate - 1);
  const beerInfo = beerCalenderData[calenderDate - 1];
 */

  return (
    <div>
      {new Date(`2023-11-${beerInfo.dato}`) <= new Date() ? (
        <div className="fixed flex mx-3 flex-col w-[265px] md:mx-0 md:flex-row md:h-1/3 md:w-1/2 bg-white border-1 border-black z-10 mt-2 md:right-1/4 md:top-1/4 shadow-xl">
          <button className="absolute top-0 right-0 text-right bg mx-3 p-1 shadow-sm rounded-full  cursor-pointer">
            x
          </button>
          <Image
            className=""
            src={require("@/assets/beer_17.jpg")}
            width={300}
            alt="Logo"
          />

          <div className="p-3">
            <p className="font-bold text-lg"> {beerInfo.navn}</p>
            <p className="text-sm">DIPA {beerInfo.alkohol} ABV</p>
            <p className="italic font-semibold ">{beerInfo.land}</p>
            <p className="italic mb-5">{beerInfo.bryggeri}</p>
            {beerInfo.brødtekst}
            <Link href={beerInfo.untappdlink}>
              <p className="mt-2 italic underline text-blue-500 cursor-pointer">
                Untapped
              </p>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default MyCard;

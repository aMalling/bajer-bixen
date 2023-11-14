"use client";
import Image from "next/image";

function MyCard() {
  return (
    <div className="absolute flex flex-col w-[260px] md:mx-0 md:flex-row md:h-1/3 md:w-1/2 bg-white border-1 border-black z-10 mt-2 md:right-0 shadow-xl">
      <button className="text-right bg mx-3 cursor-pointer">x</button>
      <Image
        className=""
        src={require("@/assets/beer_17.jpg")}
        width={300}
        alt="Logo"
      />

      <div className="p-3">
        <p className="font-bold text-lg">Don't Tell Gus</p>
        <p className="text-sm">DIPA 16% ABV</p>
        <p className="italic mb-5">Verdant</p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra
        ipsum nunc aliquet bibendum enim. Tincidunt tortor aliquam nulla
        facilisi cras fermentum. Dis parturient montes nascetur ridiculus.
        <p className="mt-2 italic underline text-blue-500 cursor-pointer">
          check untapped
        </p>
      </div>
    </div>
  );
}

export default MyCard;

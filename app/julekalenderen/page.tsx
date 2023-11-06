"use client";
import Image from "next/image";
import { useState } from "react";

function JuleKalenderen() {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(!toggle);
    console.log(toggle);
  }

  return (
    <main>
      <div className="relative my-10 flex justify-center ">
        <Image
          className="hidden md:flex  border-4 border-black "
          src={require("@/assets/beer_231223.png")}
          width={850}
          alt="Logo"
        />
        {toggle && (
          <div className="absolute flex flex-col md:flex-row md:h-1/3 md:w-1/2 bg-white z-10 mt-2 right-0 shadow-xl">
            <button
              className="text-right bg mx-3 cursor-pointer"
              onClick={handleClick}
            >
              x
            </button>
            <Image
              className=""
              src={require("@/assets/beer_2.jpg")}
              width={300}
              alt="Logo"
            />

            <div className="p-3">
              <p className="font-bold text-lg">Don't Tell Gus</p>
              <p className="text-sm">DIPA 8% ABV</p>
              <p className="italic mb-5">Verdant</p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
              sed viverra ipsum nunc aliquet bibendum enim. Tincidunt tortor
              aliquam nulla facilisi cras fermentum. Dis parturient montes
              nascetur ridiculus.
            </div>
          </div>
        )}
        <div className="md:absolute md:opacity-30 border-4 md:border-0 bg-heroImage border-black bg-gradient-to-r from-bajer-primary  from-10% via-bajer-secondary via-30%  to-bajer-primary to-90% flex flex-col justify-center md:grid gap-10 md:grid-cols-4 md:grid-rows-6 md:w-[840px] h-full p-10 ">
          <div
            onClick={handleClick}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-center m-2 border-4 overflow-hidden border-black bg-white cursor-pointer hover:opacity-100 opacity-20 border-dashed text-lg font-semibold"
          >
            {!toggle && <div>17</div>}
            {toggle && (
              <Image
                className=" transition"
                src={require("@/assets/beer_4.jpg")}
                width={200}
                alt="Logo"
              />
            )}
          </div>
          <div className="m-2 h-48 w-48 md:w-auto md:h-auto border-4 border-black bg-white cursor-pointer hover:opacity-100 text-center md:pt-5 opacity-20 border-dashed text-lg font-semibold">
            20
          </div>
          <div className="m-2 h-48 w-48 md:w-auto md:h-auto border-4 border-black bg-white cursor-pointer hover:opacity-100 text-center md:pt-5 opacity-20 border-dashed text-lg font-semibold">
            15
          </div>
          <div className="m-2 h-48 w-48 md:w-auto md:h-auto border-4 border-black bg-white cursor-pointer hover:opacity-100 text-center md:pt-5 opacity-20 border-dashed text-lg font-semibold">
            3
          </div>
          <div className="m-2 h-48 w-48 md:w-auto md:h-auto border-4 border-black bg-white cursor-pointer hover:opacity-100 text-center md:pt-5 opacity-20 border-dashed text-lg font-semibold">
            7
          </div>
          <div className="m-2 h-48 w-48 md:w-auto md:h-auto border-4 border-black bg-white cursor-pointer hover:opacity-100 text-center md:pt-5 opacity-20 border-dashed text-lg font-semibold">
            4
          </div>
          <div className="m-2 h-48 w-48 md:w-auto md:h-auto border-4 border-black bg-white cursor-pointer hover:opacity-100 text-center md:pt-5 opacity-20 border-dashed text-lg font-semibold">
            2
          </div>
          <div className="m-2 h-48 w-48 md:w-auto md:h-auto border-4 border-black bg-white cursor-pointer hover:opacity-100 text-center md:pt-5 opacity-20 border-dashed text-lg font-semibold">
            24
          </div>
          <div className="m-2 h-48 w-48 md:w-auto md:h-auto border-4 border-black bg-white cursor-pointer hover:opacity-100 text-center md:pt-5 opacity-20 border-dashed text-lg font-semibold">
            16
          </div>
          <div className="m-2 h-48 w-48 md:w-auto md:h-auto border-4 border-black bg-white cursor-pointer hover:opacity-100 text-center md:pt-5 opacity-20 border-dashed text-lg font-semibold">
            19
          </div>
          <div className="m-2 h-48 w-48 md:w-auto md:h-auto border-4 border-black bg-white cursor-pointer hover:opacity-100 text-center md:pt-5 opacity-20 border-dashed text-lg font-semibold">
            8
          </div>
          <div className="m-2 h-48 w-48 md:w-auto md:h-auto border-4 border-black bg-white cursor-pointer hover:opacity-100 text-center md:pt-5 opacity-20 border-dashed text-lg font-semibold">
            14
          </div>
          <div className="m-2 h-48 w-48 md:w-auto md:h-auto border-4 border-black bg-white cursor-pointer hover:opacity-100 text-center md:pt-5 opacity-20 border-dashed text-lg font-semibold">
            17
          </div>
          <div className="m-2 h-48 w-48 md:w-auto md:h-auto border-4 border-black bg-white cursor-pointer hover:opacity-100 text-center md:pt-5 opacity-20 border-dashed text-lg font-semibold">
            13
          </div>
          <div className="m-2 h-48 w-48 md:w-auto md:h-auto border-4 border-black bg-white cursor-pointer hover:opacity-100 text-center md:pt-5 opacity-20 border-dashed text-lg font-semibold">
            6
          </div>
          <div className="m-2 h-48 w-48 md:w-auto md:h-auto border-4 border-black bg-white cursor-pointer hover:opacity-100 text-center md:pt-5 opacity-20 border-dashed text-lg font-semibold">
            23
          </div>
          <div className="m-2 h-48 w-48 md:w-auto md:h-auto border-4 border-black bg-white cursor-pointer hover:opacity-100 text-center md:pt-5 opacity-20 border-dashed text-lg font-semibold">
            11
          </div>
          <div className="m-2 h-48 w-48 md:w-auto md:h-auto border-4 border-black bg-white cursor-pointer hover:opacity-100 text-center md:pt-5 opacity-20 border-dashed text-lg font-semibold">
            18
          </div>
          <div className="m-2 h-48 w-48 md:w-auto md:h-auto border-4 border-black bg-white cursor-pointer hover:opacity-100 text-center md:pt-5 opacity-20 border-dashed text-lg font-semibold">
            1
          </div>
          <div className="m-2 h-48 w-48 md:w-auto md:h-auto border-4 border-black bg-white cursor-pointer hover:opacity-100 text-center md:pt-5 opacity-20 border-dashed text-lg font-semibold">
            5
          </div>
          <div className="m-2 h-48 w-48 md:w-auto md:h-auto border-4 border-black bg-white cursor-pointer hover:opacity-100 text-center md:pt-5 opacity-20 border-dashed text-lg font-semibold">
            22
          </div>
          <div className="m-2 h-48 w-48 md:w-auto md:h-auto border-4 border-black bg-white cursor-pointer hover:opacity-100 text-center md:pt-5 opacity-20 border-dashed text-lg font-semibold">
            10
          </div>
          <div className="m-2 h-48 w-48 md:w-auto md:h-auto border-4 border-black bg-white cursor-pointer hover:opacity-100 text-center md:pt-5 opacity-20 border-dashed text-lg font-semibold">
            9
          </div>
          <div className="m-2 h-48 w-48 md:w-auto md:h-auto border-4 border-black bg-white cursor-pointer hover:opacity-100 text-center md:pt-5 opacity-20 border-dashed text-lg font-semibold">
            21
          </div>
        </div>
      </div>
    </main>
  );
}

export default JuleKalenderen;

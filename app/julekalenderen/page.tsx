"use client";
import Image from "next/image";
import { useState } from "react";

function JuleKalenderen() {
  const [toggle, setToggle] = useState(false);
  const [toggle20, setToggle20] = useState(false);

  function handleClick() {
    setToggle(!toggle);
    console.log(toggle);
  }
  function handleClick20() {
    setToggle20(!toggle20);
    console.log(toggle20);
  }

  return (
    <main>
      <div className="flex flex-col justify-center items-center mt-10">
        <Image
          className="md:hidden"
          src={require("@/assets/flame.png")}
          width={50}
          alt="Logo"
        />
      </div>

      <div className="md:hidden grid grid-cols-2 h-4 w-full">
        <div className="border-r-4 border-black"></div>
      </div>
      <div className="relative flex justify-center ">
        <Image
          className="hidden md:flex border-4 border-black "
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
              src={require("@/assets/beer_17.jpg")}
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
        {toggle20 && (
          <div className="absolute flex flex-col md:flex-row md:h-1/3 md:w-1/2 bg-white z-10 mt-2 right-0 shadow-xl">
            <button
              className="text-right bg mx-3 cursor-pointer"
              onClick={handleClick20}
            >
              x
            </button>
            <Image
              className=""
              src={require("@/assets/beer_231223.png")}
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

        <div className="bg-white rounded-lg shadow-xl md:absolute md:opacity-30 border-4 border-0 bg-heroImage bg-gradient-to-r from-bajer-primary  from-10% via-bajer-secondary via-30%  to-bajer-primary to-90% flex flex-col justify-center md:grid gap-10 md:grid-cols-4 md:grid-rows-6 md:w-[840px] h-full p-10 ">
          <div
            onClick={handleClick}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-center m-2 border-4 overflow-hidden border-black bg-white cursor-pointer hover:opacity-100 opacity-20 border-dashed text-lg font-semibold"
          >
            {!toggle && <div>17</div>}
            {toggle && (
              <Image
                className=" transition"
                src={require("@/assets/beer_17.jpg")}
                width={200}
                alt="Logo"
              />
            )}
          </div>

          <div
            onClick={handleClick20}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-center m-2 border-4 overflow-hidden border-black bg-white cursor-pointer hover:opacity-100 opacity-20 border-dashed text-lg font-semibold"
          >
            {!toggle20 && <div>20</div>}
            {toggle20 && (
              <Image
                className=" transition"
                src={require("@/assets/beer_231223.png")}
                width={200}
                alt="Logo"
              />
            )}
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

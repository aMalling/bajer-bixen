"use client";
import Image from "next/image";
import { useState } from "react";
import MyCard from "@/components/card";

function JuleKalenderen() {
  const [toggle, setToggle] = useState(false);
  const [toggle20, setToggle20] = useState(false);

  interface BeerDataInterface {
    bryggeri: string;
    navn: string;
    land: string;
    alkohol: string;
    brødtekst: string;
    untappdlink: string;
  }
  const beerData: Array<BeerDataInterface> = [
    {
      bryggeri: "Jackie O's Brewery",
      navn: "Forward Into Yesterday",
      land: "USA",
      alkohol: "14,2",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/jackie-o-s-brewery-forward-into-yesterday/4585575",
    },
    {
      bryggeri: "Hoppin Frog",
      navn: "Rocky Mountain Barrel-Aged Q.O.R.I.S. the Quasher Quadruple Oatmeal Russian Imperial Stout",
      land: "USA",
      alkohol: "15,7",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/hoppin-frog-brewery-rocky-mountain-barrel-aged-q-o-r-i-s-the-quasher-quadruple-oatmeal-russian-imperial-stout/4566617",
    },
    {
      bryggeri: "Dark Horse",
      navn: "Bourbon Barrel Aged Plead The 5th ",
      land: "USA",
      alkohol: "11,0",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/dark-horse-brewing-co-bourbon-barrel-aged-plead-the-5th/34285",
    },
    {
      bryggeri: "AleSmith",
      navn: "Barrel-Aged Vietnamese Coffee Speedway Stout (2022)",
      land: "USA",
      alkohol: "14,2",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/alesmith-brewing-company-barrel-aged-vietnamese-coffee-speedway-stout-2022/5055895",
    },
    {
      bryggeri: "Cantilion",
      navn: "Gueuze 100% Lambic Bio (2020)",
      land: "BEL",
      alkohol: "5,5",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/brasserie-cantillon-gueuze-100-lambic-bio-2020/3653264",
    },
    {
      bryggeri: "Cantilion",
      navn: "Kriek 100% Lambic Bio (2023)",
      land: "BEL",
      alkohol: "6,0",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/brasserie-cantillon-kriek-100-lambic-bio-2023/5181935",
    },
    {
      bryggeri: "Timber Ales",
      navn: "ForEverett",
      land: "USA",
      alkohol: "12,0",
      brødtekst: "tom",
      untappdlink: "https://untappd.com/b/timber-ales-foreverett/4755725",
    },
    {
      bryggeri: "Other Half",
      navn: "All Citra Everything DIPA",
      land: "USA",
      alkohol: "8,5",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/other-half-brewing-co-all-citra-everything/1793659",
    },
    {
      bryggeri: "Other Half",
      navn: "Broccoli DIPA",
      land: "USA",
      alkohol: "7,9",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/other-half-brewing-co-broccoli/1941131",
    },
    {
      bryggeri: "Short Throw Brewing Co.",
      navn: "Backyard Brawl",
      land: "USA",
      alkohol: "13,1",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/short-throw-brewing-co-backyard-brawl/4950555",
    },
    {
      bryggeri: "North",
      navn: "Heliocentric.  IPA",
      land: "UK",
      alkohol: "6,4",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/north-brewing-co-heliocentric/5533295",
    },
    {
      bryggeri: "Verdant",
      navn: "Pulp DIPA",
      land: "UK",
      alkohol: "8,0",
      brødtekst: "tom",
      untappdlink: "https://untappd.com/b/verdant-brewing-co-pulp/1686557",
    },
    {
      bryggeri: "Verdant",
      navn: "Neal Gets Things Done IPA",
      land: "UK",
      alkohol: "6,5",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/verdant-brewing-co-neal-gets-things-done/2183923",
    },
    {
      bryggeri: "Verdant",
      navn: "Neon Colour Spreading IPA",
      land: "UK",
      alkohol: "6,5",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/verdant-brewing-co-neon-colour-spreading/5158780",
    },
    {
      bryggeri: "Track",
      navn: "Sea of Stars DIPA",
      land: "UK",
      alkohol: "8,0",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/track-brewing-company-sea-of-stars/4708694",
    },
    {
      bryggeri: "Track",
      navn: "Always On My Mind PALE ALE",
      land: "UK",
      alkohol: "5,0",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/track-brewing-company-always-on-my-mind/5550312",
    },
    {
      bryggeri: "Track",
      navn: "Southern Sun PALE ALE",
      land: "UK",
      alkohol: "5,4",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/track-brewing-company-southern-sun/5541236",
    },
    {
      bryggeri: "Left Handed Giant",
      navn: "Double Cheese",
      land: "UK",
      alkohol: "8,4",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/left-handed-giant-double-cheese/5560960",
    },
    {
      bryggeri: "Sudden Death",
      navn: "Haze From The Crypt IPA",
      land: "DE",
      alkohol: "6,3",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/sudden-death-brewing-co-haze-from-the-crypt-2023/5560856",
    },
    {
      bryggeri: "Salikatt",
      navn: "Dust Devil DIPA",
      land: "NOR",
      alkohol: "8,0",
      brødtekst: "tom",
      untappdlink: "https://untappd.com/b/salikatt-dust-devil/5523659",
    },
    {
      bryggeri: "Salikatt",
      navn: "Killdozer DIPA",
      land: "NOR",
      alkohol: "8,0",
      brødtekst: "tom",
      untappdlink: "https://untappd.com/b/salikatt-killdozer/5552453",
    },
    {
      bryggeri: "Vault",
      navn: "Vault Dweller",
      land: "USA",
      alkohol: "4,3",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/vault-city-brewing-vault-dweller/5559673",
    },
    {
      bryggeri: "Yonder Brewing",
      navn: "Raspberry gose",
      land: "UK",
      alkohol: "4,0",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/yonder-brewing-and-blending-raspberry-gose/3356298",
    },
    {
      bryggeri: "Maisels",
      navn: "Bayreuther Hell",
      land: "DE",
      alkohol: "4,9",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/bayreuther-bierbrauerei-bayreuther-brauhaus-hell/116296",
    },
  ];

  console.log(beerData[0]);

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
          <div onClick={handleClick}>
            <MyCard></MyCard>{" "}
          </div>
        )}
        {toggle20 && (
          <div className="absolute flex flex-col w-[260px] md:mx-0 md:flex-row md:h-1/3 md:w-1/2 bg-white border-1 border-black z-10 mt-2 md:right-0 shadow-xl">
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

        <div className="bg-white rounded-lg shadow-xl md:absolute md:opacity-30 border-0 flex flex-col justify-center md:grid gap-10 md:grid-cols-4 md:grid-rows-6 md:w-[840px] h-full p-10 ">
          <div
            onClick={handleClick}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-20 md:border-dashed text-lg font-semibold"
          >
            {!toggle && <div>1</div>}
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
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-20 md:border-dashed text-lg font-semibold"
          >
            {!toggle20 && <div>2</div>}
            {toggle20 && (
              <Image
                className=" transition"
                src={require("@/assets/beer_231223.png")}
                width={200}
                alt="Logo"
              />
            )}
          </div>

          {new Date("2023-11-06") <= new Date() ? (
            <div className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-20 md:border-dashed text-lg font-semibold">
              3
            </div>
          ) : null}

          {new Date("2024-11-07") <= new Date() ? (
            <div className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-20 md:border-dashed text-lg font-semibold">
              4
            </div>
          ) : null}

          <div className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-20 md:border-dashed text-lg font-semibold">
            5
          </div>
          <div className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-20 md:border-dashed text-lg font-semibold">
            6
          </div>
          <div className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-20 md:border-dashed text-lg font-semibold">
            7
          </div>
          <div className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-20 md:border-dashed text-lg font-semibold">
            8
          </div>
          <div className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-20 md:border-dashed text-lg font-semibold">
            9
          </div>
          <div className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-20 md:border-dashed text-lg font-semibold">
            10
          </div>
          <div className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-20 md:border-dashed text-lg font-semibold">
            11
          </div>
          <div className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-20 md:border-dashed text-lg font-semibold">
            12
          </div>
          <div className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-20 md:border-dashed text-lg font-semibold">
            13
          </div>
          <div className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-20 md:border-dashed text-lg font-semibold">
            14
          </div>
          <div className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-20 md:border-dashed text-lg font-semibold">
            15
          </div>
          <div className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-20 md:border-dashed text-lg font-semibold">
            16
          </div>
          <div className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-20 md:border-dashed text-lg font-semibold">
            17
          </div>
          <div className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-20 md:border-dashed text-lg font-semibold">
            18
          </div>
          <div className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-20 md:border-dashed text-lg font-semibold">
            19
          </div>
          <div className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-20 md:border-dashed text-lg font-semibold">
            20
          </div>
          <div className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-20 md:border-dashed text-lg font-semibold">
            21
          </div>
          <div className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-20 md:border-dashed text-lg font-semibold">
            22
          </div>
          <div className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-20 md:border-dashed text-lg font-semibold">
            23
          </div>
          <div className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-20 md:border-dashed text-lg font-semibold">
            24
          </div>
        </div>
      </div>
    </main>
  );
}

export default JuleKalenderen;

"use client";
import Image from "next/image";
import { useState } from "react";
import MyCard from "@/components/card";
import OpenBeer from "@/components/openBeer";

function JuleKalenderen() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  const [toggle6, setToggle6] = useState(false);
  const [toggle7, setToggle7] = useState(false);
  const [toggle8, setToggle8] = useState(false);
  const [toggle9, setToggle9] = useState(false);
  const [toggle10, setToggle10] = useState(false);
  const [toggle11, setToggle11] = useState(false);
  const [toggle12, setToggle12] = useState(false);
  const [toggle13, setToggle13] = useState(false);
  const [toggle14, setToggle14] = useState(false);
  const [toggle15, setToggle15] = useState(false);
  const [toggle16, setToggle16] = useState(false);
  const [toggle17, setToggle17] = useState(false);
  const [toggle18, setToggle18] = useState(false);
  const [toggle19, setToggle19] = useState(false);
  const [toggle20, setToggle20] = useState(false);
  const [toggle21, setToggle21] = useState(false);
  const [toggle22, setToggle22] = useState(false);
  const [toggle23, setToggle23] = useState(false);
  const [toggle24, setToggle24] = useState(false);

  const beerData = [
    {
      dato: "01",
      bryggeri: "Jackie O's Brewery",
      navn: "Forward Into Yesterday",
      land: "USA",
      alkohol: "14,2",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/jackie-o-s-brewery-forward-into-yesterday/4585575",
    },
    {
      dato: "02",
      bryggeri: "Hoppin Frog",
      navn: "Rocky Mountain Barrel-Aged Q.O.R.I.S. the Quasher Quadruple Oatmeal Russian Imperial Stout",
      land: "USA",
      alkohol: "15,7",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/hoppin-frog-brewery-rocky-mountain-barrel-aged-q-o-r-i-s-the-quasher-quadruple-oatmeal-russian-imperial-stout/4566617",
    },
    {
      dato: "03",
      bryggeri: "Dark Horse",
      navn: "Bourbon Barrel Aged Plead The 5th ",
      land: "USA",
      alkohol: "11,0",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/dark-horse-brewing-co-bourbon-barrel-aged-plead-the-5th/34285",
    },

    {
      dato: "04",
      bryggeri: "Cantilion",
      navn: "Gueuze 100% Lambic Bio (2020)",
      land: "BEL",
      alkohol: "5,5",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/brasserie-cantillon-gueuze-100-lambic-bio-2020/3653264",
    },
    {
      dato: "05",
      bryggeri: "Cantilion",
      navn: "Kriek 100% Lambic Bio (2023)",
      land: "BEL",
      alkohol: "6,0",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/brasserie-cantillon-kriek-100-lambic-bio-2023/5181935",
    },
    {
      dato: "06",
      bryggeri: "Timber Ales",
      navn: "ForEverett",
      land: "USA",
      alkohol: "12,0",
      brødtekst: "tom",
      untappdlink: "https://untappd.com/b/timber-ales-foreverett/4755725",
    },
    {
      dato: "07",
      bryggeri: "Other Half",
      navn: "All Citra Everything DIPA",
      land: "USA",
      alkohol: "8,5",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/other-half-brewing-co-all-citra-everything/1793659",
    },
    {
      dato: "08",
      bryggeri: "Other Half",
      navn: "Broccoli DIPA",
      land: "USA",
      alkohol: "7,9",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/other-half-brewing-co-broccoli/1941131",
    },
    {
      dato: "09",
      bryggeri: "Short Throw Brewing Co.",
      navn: "Backyard Brawl",
      land: "USA",
      alkohol: "13,1",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/short-throw-brewing-co-backyard-brawl/4950555",
    },
    {
      dato: "10",
      bryggeri: "North",
      navn: "Heliocentric.  IPA",
      land: "UK",
      alkohol: "6,4",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/north-brewing-co-heliocentric/5533295",
    },
    {
      dato: "11",
      bryggeri: "Verdant",
      navn: "Pulp DIPA",
      land: "UK",
      alkohol: "8,0",
      brødtekst: "tom",
      untappdlink: "https://untappd.com/b/verdant-brewing-co-pulp/1686557",
    },
    {
      dato: "12",
      bryggeri: "Verdant",
      navn: "Neal Gets Things Done IPA",
      land: "UK",
      alkohol: "6,5",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/verdant-brewing-co-neal-gets-things-done/2183923",
    },
    {
      dato: "13",
      bryggeri: "Verdant",
      navn: "Neon Colour Spreading IPA",
      land: "UK",
      alkohol: "6,5",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/verdant-brewing-co-neon-colour-spreading/5158780",
    },
    {
      dato: "14",
      bryggeri: "Track",
      navn: "Sea of Stars DIPA",
      land: "UK",
      alkohol: "8,0",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/track-brewing-company-sea-of-stars/4708694",
    },
    {
      dato: "15",
      bryggeri: "Track",
      navn: "Southern Sun PALE ALE",
      land: "UK",
      alkohol: "5,4",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/track-brewing-company-southern-sun/5541236",
    },
    {
      dato: "16",
      bryggeri: "Left Handed Giant",
      navn: "Double Cheese",
      land: "UK",
      alkohol: "8,4",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/left-handed-giant-double-cheese/5560960",
    },
    {
      dato: "17",
      bryggeri: "Sudden Death",
      navn: "Haze From The Crypt IPA",
      land: "DE",
      alkohol: "6,3",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/sudden-death-brewing-co-haze-from-the-crypt-2023/5560856",
    },
    {
      dato: "18",
      bryggeri: "Salikatt",
      navn: "Dust Devil DIPA",
      land: "NOR",
      alkohol: "8,0",
      brødtekst: "tom",
      untappdlink: "https://untappd.com/b/salikatt-dust-devil/5523659",
    },
    {
      dato: "19",
      bryggeri: "Salikatt",
      navn: "Killdozer DIPA",
      land: "NOR",
      alkohol: "8,0",
      brødtekst: "tom",
      untappdlink: "https://untappd.com/b/salikatt-killdozer/5552453",
    },
    {
      dato: "20",
      bryggeri: "Vault",
      navn: "Vault Dweller",
      land: "USA",
      alkohol: "4,3",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/vault-city-brewing-vault-dweller/5559673",
    },
    {
      dato: "21",
      bryggeri: "Yonder Brewing",
      navn: "Raspberry gose",
      land: "UK",
      alkohol: "4,0",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/yonder-brewing-and-blending-raspberry-gose/3356298",
    },
    {
      dato: "22",
      bryggeri: "Maisels",
      navn: "Bayreuther Hell",
      land: "DE",
      alkohol: "4,9",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/bayreuther-bierbrauerei-bayreuther-brauhaus-hell/116296",
    },
    {
      dato: "23",
      bryggeri: "AleSmith",
      navn: "Barrel-Aged Vietnamese Coffee Speedway Stout (2022)",
      land: "USA",
      alkohol: "14,2",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/alesmith-brewing-company-barrel-aged-vietnamese-coffee-speedway-stout-2022/5055895",
    },
    {
      dato: "24",
      bryggeri: "Track",
      navn: "Always On My Mind PALE ALE",
      land: "UK",
      alkohol: "5,0",
      brødtekst: "tom",
      untappdlink:
        "https://untappd.com/b/track-brewing-company-always-on-my-mind/5550312",
    },
  ];

  console.log(beerData[0]);

  function handleClick1() {
    setToggle1(!toggle1);
    console.log(toggle1);
  }
  function handleClick2() {
    setToggle2(!toggle2);
    console.log(toggle2);
  }
  function handleClick3() {
    setToggle3(!toggle3);
    console.log(toggle3);
  }
  function handleClick4() {
    setToggle4(!toggle4);
    console.log(toggle4);
  }
  function handleClick5() {
    setToggle5(!toggle5);
    console.log(toggle5);
  }
  function handleClick6() {
    setToggle6(!toggle6);
    console.log(toggle6);
  }
  function handleClick7() {
    setToggle7(!toggle7);
    console.log(toggle7);
  }
  function handleClick8() {
    setToggle8(!toggle8);
    console.log(toggle8);
  }
  function handleClick9() {
    setToggle9(!toggle9);
    console.log(toggle9);
  }
  function handleClick10() {
    setToggle10(!toggle10);
    console.log(toggle10);
  }
  function handleClick11() {
    setToggle11(!toggle11);
    console.log(toggle11);
  }
  function handleClick12() {
    setToggle12(!toggle12);
    console.log(toggle12);
  }
  function handleClick13() {
    setToggle13(!toggle13);
    console.log(toggle13);
  }
  function handleClick14() {
    setToggle14(!toggle14);
    console.log(toggle14);
  }
  function handleClick15() {
    setToggle15(!toggle15);
    console.log(toggle15);
  }
  function handleClick16() {
    setToggle16(!toggle16);
    console.log(toggle16);
  }
  function handleClick17() {
    setToggle17(!toggle17);
    console.log(toggle17);
  }
  function handleClick18() {
    setToggle18(!toggle18);
    console.log(toggle18);
  }
  function handleClick19() {
    setToggle19(!toggle19);
    console.log(toggle19);
  }
  function handleClick20() {
    setToggle20(!toggle20);
    console.log(toggle20);
  }
  function handleClick21() {
    setToggle21(!toggle21);
    console.log(toggle21);
  }
  function handleClick22() {
    setToggle22(!toggle22);
    console.log(toggle22);
  }
  function handleClick23() {
    setToggle23(!toggle23);
    console.log(toggle23);
  }
  function handleClick24() {
    setToggle24(!toggle24);
    console.log(toggle24);
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
        {toggle1 && (
          <div onClick={handleClick1}>
            <MyCard beerData={beerData[0]}></MyCard>
          </div>
        )}
        {toggle2 && (
          <div onClick={handleClick2}>
            <MyCard beerData={beerData[1]}></MyCard>
          </div>
        )}
        {toggle3 && (
          <div onClick={handleClick3}>
            <MyCard beerData={beerData[1]}></MyCard>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-xl md:absolute md:opacity-30 border-0 flex flex-col justify-center md:grid gap-10 md:grid-cols-4 md:grid-rows-6 md:w-[840px] h-full p-10 ">
          <div
            onClick={handleClick1}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-85 md:border-dashed text-lg font-semibold"
          >
            {!toggle1 && <div>1</div>}
            {toggle1 && <OpenBeer />}
          </div>
          <div
            onClick={handleClick2}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-85 md:border-dashed text-lg font-semibold"
          >
            {!toggle2 && <div>2</div>}
            {toggle2 && <OpenBeer />}
          </div>
          <div
            onClick={handleClick3}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-85 md:border-dashed text-lg font-semibold"
          >
            {!toggle3 && <div>3</div>}
            {toggle3 && <OpenBeer />}
          </div>{" "}
          <div
            onClick={handleClick4}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-85 md:border-dashed text-lg font-semibold"
          >
            {!toggle4 && <div>4</div>}
            {toggle4 && <OpenBeer />}
          </div>
          <div
            onClick={handleClick5}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-85 md:border-dashed text-lg font-semibold"
          >
            {!toggle5 && <div>5</div>}
            {toggle5 && <OpenBeer />}
          </div>
          <div
            onClick={handleClick6}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-85 md:border-dashed text-lg font-semibold"
          >
            {!toggle6 && <div>6</div>}
            {toggle6 && <OpenBeer />}
          </div>
          <div
            onClick={handleClick7}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-85 md:border-dashed text-lg font-semibold"
          >
            {!toggle7 && <div>7</div>}
            {toggle7 && <OpenBeer />}
          </div>
          <div
            onClick={handleClick8}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-85 md:border-dashed text-lg font-semibold"
          >
            {!toggle8 && <div>8</div>}
            {toggle8 && <OpenBeer />}
          </div>
          <div
            onClick={handleClick9}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-85 md:border-dashed text-lg font-semibold"
          >
            {!toggle9 && <div>9</div>}
            {toggle9 && <OpenBeer />}
          </div>
          <div
            onClick={handleClick10}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-85 md:border-dashed text-lg font-semibold"
          >
            {!toggle10 && <div>10</div>}
            {toggle10 && <OpenBeer />}
          </div>
          <div
            onClick={handleClick11}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-85 md:border-dashed text-lg font-semibold"
          >
            {!toggle11 && <div>11</div>}
            {toggle11 && <OpenBeer />}
          </div>
          <div
            onClick={handleClick12}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-85 md:border-dashed text-lg font-semibold"
          >
            {!toggle12 && <div>12</div>}
            {toggle12 && <OpenBeer />}
          </div>
          <div
            onClick={handleClick13}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-85 md:border-dashed text-lg font-semibold"
          >
            {!toggle13 && <div>13</div>}
            {toggle13 && <OpenBeer />}
          </div>
          <div
            onClick={handleClick14}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-85 md:border-dashed text-lg font-semibold"
          >
            {!toggle14 && <div>14</div>}
            {toggle14 && <OpenBeer />}
          </div>
          <div
            onClick={handleClick15}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-85 md:border-dashed text-lg font-semibold"
          >
            {!toggle15 && <div>15</div>}
            {toggle15 && <OpenBeer />}
          </div>
          <div
            onClick={handleClick16}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-85 md:border-dashed text-lg font-semibold"
          >
            {!toggle16 && <div>16</div>}
            {toggle16 && <OpenBeer />}
          </div>{" "}
          <div
            onClick={handleClick17}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-85 md:border-dashed text-lg font-semibold"
          >
            {!toggle17 && <div>17</div>}
            {toggle17 && <OpenBeer />}
          </div>
          <div
            onClick={handleClick18}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-85 md:border-dashed text-lg font-semibold"
          >
            {!toggle18 && <div>18</div>}
            {toggle18 && <OpenBeer />}
          </div>
          <div
            onClick={handleClick19}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-85 md:border-dashed text-lg font-semibold"
          >
            {!toggle19 && <div>19</div>}
            {toggle19 && <OpenBeer />}
          </div>
          <div
            onClick={handleClick20}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-85 md:border-dashed text-lg font-semibold"
          >
            {!toggle20 && <div>20</div>}
            {toggle20 && <OpenBeer />}
          </div>{" "}
          <div
            onClick={handleClick21}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-85 md:border-dashed text-lg font-semibold"
          >
            {!toggle21 && <div>21</div>}
            {toggle21 && <OpenBeer />}
          </div>
          <div
            onClick={handleClick22}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-85 md:border-dashed text-lg font-semibold"
          >
            {!toggle22 && <div>22</div>}
            {toggle22 && <OpenBeer />}
          </div>{" "}
          <div
            onClick={handleClick23}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-85 md:border-dashed text-lg font-semibold"
          >
            {!toggle23 && <div>22</div>}
            {toggle23 && <OpenBeer />}
          </div>
          <div
            onClick={handleClick24}
            className="flex justify-center h-48 w-48 md:w-auto md:h-auto items-end md:items-center m-2 border-b-4 md:border-4 overflow-hidden border-black hover:shadow-md cursor-pointer opacity-90 hover:opacity-100 md:opacity-85 md:border-dashed text-lg font-semibold"
          >
            {!toggle24 && <div>24</div>}
            {toggle24 && <OpenBeer />}
          </div>
        </div>
      </div>
    </main>
  );
}

export default JuleKalenderen;

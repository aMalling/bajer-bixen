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
          src={require("@/assets/tree.jpg")}
          width={850}
          alt="Logo"
        />
        {toggle1 && (
          <div onClick={handleClick1}>
            <MyCard calenderDate={{ dato: 1, top: "0px" }}></MyCard>
          </div>
        )}
        {toggle2 && (
          <div onClick={handleClick2}>
            <MyCard calenderDate={{ dato: 2, top: "240px" }}></MyCard>
          </div>
        )}
        {toggle3 && (
          <div onClick={handleClick3}>
            <MyCard calenderDate={{ dato: 3, top: "490px" }}></MyCard>
          </div>
        )}
        {toggle4 && (
          <div onClick={handleClick4}>
            <MyCard calenderDate={{ dato: 4, top: "739px" }}></MyCard>
          </div>
        )}
        {toggle5 && (
          <div onClick={handleClick5}>
            <MyCard calenderDate={{ dato: 5, top: "988px" }}></MyCard>
          </div>
        )}
        {toggle6 && (
          <div onClick={handleClick6}>
            <MyCard calenderDate={{ dato: 6, top: "1236px" }}></MyCard>
          </div>
        )}
        {toggle7 && (
          <div onClick={handleClick7}>
            <MyCard calenderDate={{ dato: 7, top: "1486px" }}></MyCard>
          </div>
        )}
        {toggle8 && (
          <div onClick={handleClick8}>
            <MyCard calenderDate={{ dato: 8, top: "1732px" }}></MyCard>
          </div>
        )}
        {toggle9 && (
          <div onClick={handleClick9}>
            <MyCard calenderDate={{ dato: 9, top: "1980px" }}></MyCard>
          </div>
        )}
        {toggle10 && (
          <div onClick={handleClick10}>
            <MyCard calenderDate={{ dato: 10, top: "2229px" }}></MyCard>
          </div>
        )}
        {toggle11 && (
          <div onClick={handleClick11}>
            <MyCard calenderDate={{ dato: 11, top: "2478px" }}></MyCard>
          </div>
        )}
        {toggle12 && (
          <div onClick={handleClick12}>
            <MyCard calenderDate={{ dato: 12, top: "2727px" }}></MyCard>
          </div>
        )}
        {toggle13 && (
          <div onClick={handleClick13}>
            <MyCard calenderDate={{ dato: 13, top: "2976px" }}></MyCard>
          </div>
        )}
        {toggle14 && (
          <div onClick={handleClick14}>
            <MyCard calenderDate={{ dato: 14, top: "3225px" }}></MyCard>
          </div>
        )}
        {toggle15 && (
          <div onClick={handleClick15}>
            <MyCard calenderDate={{ dato: 15, top: "3472px" }}></MyCard>
          </div>
        )}
        {toggle16 && (
          <div onClick={handleClick16}>
            <MyCard calenderDate={{ dato: 16, top: "3722px" }}></MyCard>
          </div>
        )}
        {toggle17 && (
          <div onClick={handleClick17}>
            <MyCard calenderDate={{ dato: 17, top: "3968px" }}></MyCard>
          </div>
        )}
        {toggle18 && (
          <div onClick={handleClick18}>
            <MyCard calenderDate={{ dato: 18, top: "4216px" }}></MyCard>
          </div>
        )}
        {toggle19 && (
          <div onClick={handleClick19}>
            <MyCard calenderDate={{ dato: 19, top: "4464px" }}></MyCard>
          </div>
        )}
        {toggle20 && (
          <div onClick={handleClick20}>
            <MyCard calenderDate={{ dato: 20, top: "4712px" }}></MyCard>
          </div>
        )}
        {toggle21 && (
          <div onClick={handleClick21}>
            <MyCard calenderDate={{ dato: 21, top: "4960px" }}></MyCard>
          </div>
        )}
        {toggle22 && (
          <div onClick={handleClick22}>
            <MyCard calenderDate={{ dato: 22, top: "5208px" }}></MyCard>
          </div>
        )}
        {toggle23 && (
          <div onClick={handleClick23}>
            <MyCard calenderDate={{ dato: 23, top: "5456px" }}></MyCard>
          </div>
        )}
        {toggle24 && (
          <div onClick={handleClick24}>
            <MyCard calenderDate={{ dato: 24, top: "5704px" }}></MyCard>
          </div>
        )}
        <div className="bg-white rounded-lg shadow-xl md:absolute md:bg-opacity-30 border-0 flex flex-col justify-center md:grid gap-10 md:grid-cols-4 md:grid-rows-6 md:w-[840px] h-full p-10 ">
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
            {!toggle23 && <div>23</div>}
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

import Image from "next/image";
import Link from "next/link";

interface MyNavBarProps {
  selectedYear: number;
  onYearChange: (year: number) => void;
}

function MyNavBar({ selectedYear, onYearChange }: MyNavBarProps) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center md:grid grid-cols-3 shadow-md items-center bg-bajer-primary text-bajer-base">
        <div className="flex pl-3 items-center justify-start">
          <Image
            src={require("../assets/bajerBiksen_logo.png")}
            className="py-1 inline bg-baj"
            width={50}
            alt="icon"
          />
          <h2 className="hidden md:flex text-xl ml-2 ">BajerBiksen</h2>
        </div>

        <h2 className="text-xl ml-2 font-semibold inline text-center">
          ØLJULEKALENDERN {selectedYear}
        </h2>
        <div className="pr-3">
          <Image
            src={require("../assets/bajerBiksen_logo.png")}
            className=" md:hidden py-1 ml-2 inline"
            width={50}
            alt="icon"
          />
        </div>
      </div>
      <div className="flex justify-center gap-2 py-3 bg-bajer-primary border-t border-black">
        <button
          onClick={() => onYearChange(2023)}
          className={`px-4 py-2 rounded font-semibold transition-all ${
            selectedYear === 2023
              ? "bg-bajer-base text-bajer-primary"
              : "bg-white text-bajer-primary hover:bg-opacity-80"
          }`}
        >
          2023
        </button>
        <button
          onClick={() => onYearChange(2024)}
          className={`px-4 py-2 rounded font-semibold transition-all ${
            selectedYear === 2024
              ? "bg-bajer-base text-bajer-primary"
              : "bg-white text-bajer-primary hover:bg-opacity-80"
          }`}
        >
          2024
        </button>
        <button
          onClick={() => onYearChange(2025)}
          className={`px-4 py-2 rounded font-semibold transition-all ${
            selectedYear === 2025
              ? "bg-bajer-base text-bajer-primary"
              : "bg-white text-bajer-primary hover:bg-opacity-80"
          }`}
        >
          2025
        </button>
      </div>
    </div>
  );
}

export default MyNavBar;

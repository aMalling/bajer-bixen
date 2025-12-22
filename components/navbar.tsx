import Image from "next/image";
import Link from "next/link";

interface MyNavBarProps {
  selectedYear: number;
  onYearChange: (year: number) => void;
}

function MyNavBar({ selectedYear, onYearChange }: MyNavBarProps) {
  return (
    <div className="flex justify-between md:grid md:grid-cols-3 shadow-md items-center bg-bajer-primary text-bajer-base py-1">
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

      <div className="flex items-center justify-end pr-3 gap-1">
        <button
          onClick={() => onYearChange(2023)}
          className={`px-2 py-1 text-xs rounded transition-all ${
            selectedYear === 2023
              ? "bg-bajer-base text-bajer-primary font-semibold"
              : "text-bajer-base opacity-60 hover:opacity-100"
          }`}
        >
          2023
        </button>
        <button
          onClick={() => onYearChange(2024)}
          className={`px-2 py-1 text-xs rounded transition-all ${
            selectedYear === 2024
              ? "bg-bajer-base text-bajer-primary font-semibold"
              : "text-bajer-base opacity-60 hover:opacity-100"
          }`}
        >
          2024
        </button>
        <button
          onClick={() => onYearChange(2025)}
          className={`px-2 py-1 text-xs rounded transition-all ${
            selectedYear === 2025
              ? "bg-bajer-base text-bajer-primary font-semibold"
              : "text-bajer-base opacity-60 hover:opacity-100"
          }`}
        >
          2025
        </button>
      </div>
    </div>
  );
}

export default MyNavBar;

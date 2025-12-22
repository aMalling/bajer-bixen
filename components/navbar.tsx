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

      <div className="flex items-center justify-end pr-3">
        <select
          value={selectedYear}
          onChange={(e) => onYearChange(Number(e.target.value))}
          className="px-2 py-1 text-xs rounded bg-transparent text-bajer-base border border-bajer-base opacity-60 hover:opacity-100 focus:opacity-100 focus:outline-none cursor-pointer transition-all [&>option]:bg-bajer-primary [&>option]:text-bajer-base"
        >
          <option value={2023}>2023</option>
          <option value={2024}>2024</option>
          <option value={2025}>2025</option>
        </select>
      </div>
    </div>
  );
}

export default MyNavBar;

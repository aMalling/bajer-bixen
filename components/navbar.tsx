import Image from "next/image";
import Link from "next/link";

function MyNavBar() {
  return (
    <div className="grid grid-cols-3 shadow-md items-center bg-bajer-primary text-bajer-base">
      <div className="flex pl-3 items-center justify-start">
        <Image
          src={require("../assets/bajerBiksen_logo.png")}
          className="py-1 inline bg-baj"
          width={50}
          alt="icon"
        />
        <h2 className="text-xl ml-2 inline">BajerBiksen</h2>
      </div>

      <h2 className="text-xl ml-2 font-semibold inline text-center">
        {" "}
        ØLJULEKALENDERN 2023
      </h2>

      {/* <div className="flex flex-none justify-end col-start-2 col-span-1">
        <Link
          href="#julekalenderen"
          className="p-1 ml-3 font-medium border-bajer-base px-2  hover:bg-bajer-secondary rounded-full"
        >
          JuleKalenderen
        </Link>
        <Link
          href="#bottlesalg"
          className="p-1 ml-3 font-medium border-bajer-base px-2  hover:bg-bajer-secondary rounded-full hidden md:flex "
        >
          Løssalg
        </Link>
        <Link
          href="#beerontap"
          className="p-1 ml-3 font-medium border-bajer-base px-2  hover:bg-bajer-secondary rounded-full hidden md:flex"
        >
          BeerOnTap
        </Link>

        <Link
          href="#contact"
          className="p-1 ml-3 font-medium border-bajer-base px-2  hover:bg-bajer-secondary rounded-full hidden md:flex"
        >
          Kontakt
        </Link>
      </div> */}
    </div>
  );
}

export default MyNavBar;

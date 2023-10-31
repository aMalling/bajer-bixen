import Image from "next/image";
import Link from "next/link";

function MyNavBar() {
  return (
    <div className="grid grid-cols-12 shadow-md items-center bg-bajer-primary text-bajer-base ">
      <Link href="#velkommen">
        <div className="flex pl-3 col-span-2 items-center">
          <Image
            src={require("../assets/bajerBixen_logo.png")}
            className="py-1 inline bg-baj"
            width={50}
            alt="icon"
          />
          <h2 className="text-xl ml-2 inline">BajerBixen</h2>
        </div>
      </Link>
      <div className="flex-none col-start-10 col-span-3 ">
        <Link
          href="#julekalenderen"
          className="p-1 ml-3 font-medium border-bajer-base px-2  hover:bg-bajer-secondary rounded-full"
        >
          JuleKalenderen
        </Link>
        <Link
          href="#bottlesalg"
          className="p-1 ml-3 font-medium border-bajer-base px-2  hover:bg-bajer-secondary rounded-full "
        >
          Løssalg
        </Link>
        <Link
          href="#beerontap"
          className="p-1 ml-3 font-medium border-bajer-base px-2  hover:bg-bajer-secondary rounded-full"
        >
          Beer on tap
        </Link>

        <Link
          href="#contact"
          className="p-1 ml-3 font-medium border-bajer-base px-2  hover:bg-bajer-secondary rounded-full"
        >
          Kontakt
        </Link>
      </div>
    </div>
  );
}

export default MyNavBar;

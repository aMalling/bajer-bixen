import Image from "next/image";
import Link from "next/link";

function MyNavBar() {
  return (
    <div className="flex justify-center  md:grid grid-cols-3 shadow-md items-center bg-bajer-primary text-bajer-base">
      <div className="flex pl-3 items-center justify-start">
        <Image
          src={require("../assets/bajerBiksen_logo.png")}
          className="py-1 inline bg-baj"
          width={50}
          alt="icon"
        />
        <h2 className="hidden md:flex text-xl ml-2 inline">BajerBiksen</h2>
      </div>

      <h2 className="text-xl ml-2 font-semibold inline text-center">
        ØLJULEKALENDERN 2023
      </h2>
    </div>
  );
}

export default MyNavBar;

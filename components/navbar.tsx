import Image from "next/image";

function MyNavBar() {
  return (
    <div className="grid grid-cols-12  shadow-md items-center bg-bajer-primary text-bajer-base ">
      <div className="flex pl-3 col-span-2 items-center">
        <Image
          src={require("../assets/bajerBixen_logo.png")}
          className="py-1 inline bg-baj"
          width={50}
          alt="icon"
        />
        <h2 className="text-xl ml-2 inline">BajerBixen</h2>
      </div>
      <div className="flex-none col-start-10 col-span-3 ">
        <a className="p-1 ml-3 font-medium border-bajer-base px-2  hover:bg-bajer-secondary rounded-full">
          JuleKalenderen
        </a>
        <a className="p-1 ml-3 font-medium border-bajer-base px-2  hover:bg-bajer-secondary rounded-full">
          Beer on tab
        </a>
        <a className="p-1 ml-3 font-medium border-bajer-base px-2  hover:bg-bajer-secondary rounded-full ">
          løssalg
        </a>
        <a className="p-1 ml-3 font-medium border-bajer-base px-2  hover:bg-bajer-secondary rounded-full">
          kontakt
        </a>
      </div>
    </div>
  );
}

export default MyNavBar;

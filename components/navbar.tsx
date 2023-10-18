function MyNavBar() {
  return (
    <div className="grid grid-cols-12  shadow-md items-center bg-bajer-primary text-bajer-base ">
      <div className="flex p-1 pl-3 col-span-2 items-center">
        <img
          src="assets\letter-v.png"
          className="border border-gray-300 rounded-full h-10 p-1 inline"
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

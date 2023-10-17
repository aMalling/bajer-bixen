function MyNavBar() {
  return (
    <div className="grid grid-cols-12  shadow-sm items-center ">
      <div className="flex p-1 pl-3 col-span-2 items-center">
        <img
          src="assets\letter-v.png"
          className="border border-gray-300 rounded-full h-10 p-1 inline"
          alt="icon"
        />
        <h2 className="text-xl ml-2 inline">Vanaheim</h2>
      </div>
      <div className="flex-none col-start-11 col-span-2 items-center">
        <a className="p-1 ml-3 font-medium">CV</a>
        <a className="p-1 ml-3 font-medium">Contact</a>
        <a className="p-1 ml-3 font-medium">About</a>
        <img
          src="assets\tailwind icon.png"
          className="ml-2 h-10 p-1 inline"
          alt="icon"
        />
      </div>
    </div>
  );
}

export default MyNavBar;

import Image from "next/image";

function OpenBeer() {
  return (
    <div>
      {new Date("2022-12-01") <= new Date() ? (
        <Image
          className="md:bg-black p-3 transition"
          src={require("@/assets/bajerBixen_logo.png")}
          width={200}
          alt="Logo"
        />
      ) : (
        <div>1 </div>
      )}
    </div>
  );
}

export default OpenBeer;

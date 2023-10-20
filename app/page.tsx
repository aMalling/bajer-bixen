import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mx-20">
      <h2 className="text-xl mt-32 mb-2">VELKOMMERN I BAJERBIXEN!</h2>
      <div className="flex flex-row">
        <Image
          className=""
          src={require("../assets/bajerBixen_logo.png")}
          width={500}
          alt="Logo
          "
        />
        <div className=" p-5 w-[500px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed
          viverra ipsum nunc aliquet bibendum enim. Tincidunt tortor aliquam
          nulla facilisi cras fermentum. Dis parturient montes nascetur
          ridiculus.
        </div>
      </div>

      <h2 className="text-xl mt-32 mb-2 ">Løs salg</h2>
      <div className="grid grid-cols-3 gap-5  ">
        <div className="flex flex-row bg-white border border-gray-700 mt-3 shadow-md rounded-lg overflow-hidden ">
          <Image
            src={require("../assets/beer_231223.png")}
            width={500}
            className="w-2/5 "
            alt="beessssssssr"
          />
          <div className=" w-3/5 flex flex-col justify-center items-center">
            <p className="font-bold text-lg">Don't Tell Gus</p>
            <p className="text-sm">DIPA 8% ABV</p>
            <p className="italic">Verdant</p>
            <p>42 DKK</p>
            <p className="my-1 w-full text-center bg-bajer-secondary hover:opacity-80">
              tilføj til kurv
            </p>
          </div>
        </div>
        <div className="flex flex-row bg-white border border-gray-700 mt-3 shadow-md rounded-lg overflow-hidden ">
          <Image
            src={require("../assets/beer_4.jpg")}
            width={500}
            className="w-2/5 "
            alt="beessssssssr"
          />
          <div className=" w-3/5 flex flex-col justify-center items-center">
            <p className="font-bold text-lg">Lightbulb</p>
            <p className="text-sm">DIPA 8% ABV</p>
            <p className="italic">Verdant</p>
            <p>42 DKK</p>
            <p className="my-1 w-full text-center bg-bajer-secondary hover:opacity-80">
              tilføj til kurv
            </p>
          </div>
        </div>
        <div className="flex flex-row bg-white border border-gray-700 mt-3 shadow-md rounded-lg overflow-hidden ">
          <Image
            src={require("../assets/beer_2.jpg")}
            width={500}
            className="w-2/5 "
            alt="beessssssssr"
          />
          <div className=" w-3/5 flex flex-col justify-center items-center">
            <p className="font-bold text-lg">Headband</p>
            <p className="text-sm">DIPA 8% ABV</p>
            <p className="italic">Verdant</p>
            <p>42 DKK</p>
            <p className="my-1 w-full text-center bg-bajer-secondary hover:opacity-80">
              tilføj til kurv
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-xl mt-32 mb-2 ">JuleKalenderen!</h2>
      <div className="flex flex-row   ">
        <div className=" p-5 w-[500px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed
          viverra ipsum nunc aliquet bibendum enim. Tincidunt tortor aliquam
          nulla facilisi cras fermentum. Dis parturient montes nascetur
          ridiculus.
        </div>
        <Image
          className=""
          src={require("../assets/Beer_under_tree.jpg")}
          width={500}
          alt="beessssssssr"
        />
      </div>
      <h2 className="text-xl mt-32 mb-2 ">kvartalsøl!</h2>
      <div className="flex flex-row mt-2 ">
        <Image
          className=""
          src={require("../assets/quarterly_bajer.jpg")}
          width={500}
          alt="Logo
          "
        />
        <div className="p-5 w-[500px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed
          viverra ipsum nunc aliquet bibendum enim. Tincidunt tortor aliquam
          nulla facilisi cras fermentum. Dis parturient montes nascetur
          ridiculus.
        </div>
      </div>

      <h2 className="text-xl mt-32 mb-2 ">Fadøl til fest og hver dag!</h2>
      <div className="flex flex-row  ">
        <div className=" p-5 w-[500px]">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed
          viverra ipsum nunc aliquet bibendum enim. Tincidunt tortor aliquam
          nulla facilisi cras fermentum. Dis parturient montes nascetur
          ridiculus.
        </div>
        <Image
          className=""
          src={require("../assets/draft_beer.jpg")}
          width={500}
          alt="beessssssssr"
        />
      </div>

      <div className="bg-bajer-primary font-semibold text-white p-5 mt-10 text-center rounded-lg shadow-md">
        Tøv ikke med Kontakt os på:
        <p className="text-sm">info@Bajerbixen.dk</p>
        <p className="text-sm">+45 8888 8888</p>
      </div>
    </main>
    /*  */
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center md:mx-20">
      <section id="velkommen" className="text-xl mt-32 mb-2">
        VELKOMMERN I BAJERBIKSEN!!
      </section>
      <div className="flex ml-2 flex-col md:flex-row">
        <Image
          className="px-10"
          src={require("../assets/bajerBiksen_logo.png")}
          width={500}
          alt="Logo
          "
        />
        <div className=" px-5 md:w-[500px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed
          viverra ipsum nunc aliquet bibendum enim. Tincidunt tortor aliquam
          nulla facilisi cras fermentum. Dis parturient montes nascetur
          ridiculus.
        </div>
      </div>
      <section id="bottlesalg">
        <h2 className="text-xl md:mt-32 mt-10 mb-2 font-bold ml-4 md:ml-0">
          Løs salg
        </h2>
        <div className="flex-col mx-4 md:mx-0 md:grid grid-cols-3 gap-5  ">
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
              className="w-2/5"
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
              src={require("../assets/beer_17.jpg")}
              width={500}
              className="w-2/5"
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
      </section>
      <Link href={"/julekalenderen"}>
        <section id="julekalenderen">
          <h2 className="font-bold text-xl mt-10 md:mt-32 mx-7">
            JuleKalenderen!
          </h2>
          <div className="flex ml-2 flex-col md:flex-row  ">
            <div className=" p-5 pt-1 md:w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
              sed viverra ipsum nunc aliquet bibendum enim. Tincidunt tortor
              aliquam nulla facilisi cras fermentum. Dis parturient montes
              nascetur ridiculus.
            </div>
            <Image
              className="px-5 "
              src={require("../assets/Beer_under_tree.jpg")}
              width={500}
              alt="beessssssssr"
            />
          </div>
          <div className="w-full"></div>
        </section>
      </Link>
      <section id="kvartalsbeer">
        <h2 className="font-bold text-xl mt-10 md:mt-32 mx-7 ">Kvartalsøl!</h2>
        <div className="flex ml-2 flex-col md:flex-row  ">
          <Image
            className="px-5 "
            src={require("../assets/quarterly_bajer.jpg")}
            width={500}
            alt="Logo
            "
          />
          <div className="p-5 md:w-[500px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            sed viverra ipsum nunc aliquet bibendum enim. Tincidunt tortor
            aliquam nulla facilisi cras fermentum. Dis parturient montes
            nascetur ridiculus.
          </div>
        </div>
      </section>

      <section id="beerontap">
        <h2 className="font-bold text-xl mt-10 md:mt-32 mx-7">
          Fadøl til fest og hver dag!
        </h2>
        <div className="flex ml-2 flex-col md:flex-row ">
          <div className=" p-5 pt-0 md:w-[500px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            sed viverra ipsum nunc aliquet bibendum enim. Tincidunt tortor
            aliquam nulla facilisi cras fermentum. Dis parturient montes
            nascetur ridiculus.
          </div>
          <Image
            className="px-5"
            src={require("../assets/draft_beer.jpg")}
            width={500}
            alt="beessssssssr"
          />
        </div>
      </section>
      <section id="contact">
        <div className="bg-bajer-primary font-semibold text-white p-5 mt-10 text-center rounded-lg shadow-md">
          Tøv ikke med kontakte bajerBiKsen på:
          <p className="text-sm">info@BajerBiksen.dk</p>
          <p className="text-sm">+45 8888 8888</p>
        </div>
      </section>
    </main>
    /*  */
  );
}

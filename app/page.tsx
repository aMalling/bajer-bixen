import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mx-20">
      <div className="bg-bajer-secondary p-5 ">
        landing hook med teaser på about
      </div>

      <div className="flex flex-row mt-2">
        <div className="bg-bajer-secondary p-5 ">JuleKalenderen!</div>
        <Image src="/\assets\beer_231223.jpg" width={200} height={200} />
      </div>
      <div className="bg-bajer-secondary p-5 mt-3">kvartalsøl</div>
      <div className="bg-bajer-secondary p-5 mt-3 ">Beer on tab</div>
      <div className="bg-bajer-secondary p-5 mt-3">løssalg</div>
      <div className="bg-bajer-secondary p-5 mt-3">kontakt</div>
    </main>
    /*  */
  );
}

import Image from "next/image";
import Ucapan from "../components/ucapan/ucapan";
import CardList from "../components/ucapan/CardList";

interface Iucapans {
  Nama: String;
  Kehadiran: String;
  Catatan: string;
}

const base_url =
  "https://script.google.com/macros/s/AKfycbw1IxxhLnSGr3wAWnlAlRkIsEQWZLkJMdpa7SXAubW7Hl50cULYx_hqZLIxekREKfEj/exec";
// const base_url = "https://jsonplaceholder.typicode.com/posts"
const Dashboard = async () => {
  const response = await fetch(base_url);
  const ucapans: Iucapans[] = await response.json();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <section></section>

      <section
        id="hero"
        className="hero w-100 h-100 p-3 mx-auto text-center d-flex justify-content-center align-items-center text-white"
      >
        <main>
          <h1>Ucapan dari rekan: </h1>

          {ucapans.data.map((ucapan) => {
            return (
              <>
                <p>Nama: {ucapan.Nama}</p>
                <p>Kehadiran : {ucapan.Kehadiran}</p>
                <p>{ucapan.Catatan}</p>
              </>
            );
          })}
        </main>
      </section>
    </div>
  );
};

export default Dashboard;

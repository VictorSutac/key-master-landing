import PageHero from "../components/PageHero";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function CardPage() {
  return (
    <main className="min-h-screen bg-[#010409] text-white">
      <div
        className="max-w-[430px] mx-auto min-h-screen bg-cover bg-top bg-repeat-y overflow-hidden"
        style={{
          backgroundImage: "url('/background.png')",
        }}
      >
        <div className="relative min-h-screen bg-black/28 overflow-hidden flex flex-col">
          <div className="absolute right-[-135px] top-[-30px] opacity-[0.16] pointer-events-none blur-[0.6px] z-0">
            <img
              src="/key-vector-full.svg"
              alt=""
              className="w-[370px] max-w-none saturate-90 brightness-95"
            />
          </div>

          <div className="relative z-10 flex flex-col">
            <PageHero
              logoTo="/"
              title="Контакты"
              description="Быстрая связь с мастером: звонок, мессенджеры и адрес на карте"
              className="pb-8"
            />

            <section className="relative z-10">
              <ContactCard />
            </section>

            <div className="relative z-10 px-8 mt-10">
              <Link to="/" className="outline-button">
                Перейти на главную
              </Link>
            </div>

            <div className="relative z-10 mt-14">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

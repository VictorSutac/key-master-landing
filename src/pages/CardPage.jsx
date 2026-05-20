import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";

export default function CardPage() {
  return (
    <main className="min-h-screen bg-[#010409] text-white">
      <div
        className="max-w-[430px] mx-auto min-h-screen bg-cover bg-top bg-repeat-y overflow-hidden"
        style={{
          backgroundImage: "url('/background.png')",
        }}
      >
        <div className="min-h-screen bg-black/28 flex flex-col">
          <PageHero
            logoTo="/"
            title="Контакты"
            description="Быстрая связь с мастером: звонок, мессенджеры и адрес на карте"
            className="pb-8"
          />

          <section className="relative z-10 px-8">
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
    </main>
  );
}

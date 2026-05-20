import Hero from "../components/Hero";
import Services from "../components/Services";

import WhyUs from "../components/WhyUs";
import Slogan from "../components/Slogan";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#010409] text-white">
      <div
        className="max-w-[430px] mx-auto min-h-screen bg-cover bg-top bg-repeat-y overflow-hidden"
        style={{
          backgroundImage: "url('/background.png')",
        }}
      >
        <div className="min-h-screen bg-black/28">
          <Hero />
          <Services />
          <WhyUs />
          <Slogan />
          <Contacts />
          <div className="mt-14">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}

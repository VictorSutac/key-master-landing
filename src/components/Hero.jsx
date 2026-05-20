import { MessageCircle, Phone } from "lucide-react";
import { businessInfo } from "../data/content";
import PageHero from "./PageHero";

export default function Hero() {
  return (
    <PageHero
      title={businessInfo.title}
      description={businessInfo.description}
    >
      <div className="flex flex-col gap-3 w-full">
        <a href={businessInfo.phoneLink} className="primary-button">
          <Phone size={21} />
          Позвонить
        </a>

        <a
          href={businessInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="outline-button"
        >
          <MessageCircle size={20} />
          Написать в WhatsApp
        </a>
      </div>
    </PageHero>
  );
}
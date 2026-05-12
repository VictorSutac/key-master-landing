import { MessageCircle, Phone } from "lucide-react";
import { businessInfo } from "../data/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[620px] bg-transparent text-white flex items-center px-7 pt-10 pb-12">
      <div className="absolute right-[-135px] top-[-30px] opacity-[0.16] pointer-events-none blur-[0.6px] z-0">
        <img
          src="/key-vector.png"
          alt=""
          className="w-[370px] saturate-90 brightness-95"
        />
      </div>

      <div className="relative z-10 w-full">
        <img src="/hero.png" alt="KEY MASTER" className="w-[165px] mb-8" />

        <h1 className="text-[31px] leading-[1.08] font-[700] tracking-[-0.03em] mb-5 max-w-[310px] uppercase">
          {businessInfo.title}
        </h1>

        <p className="text-gray-100 text-[16px] leading-[1.55] mb-7 max-w-[330px] font-medium">
          {businessInfo.description}
        </p>

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
      </div>
    </section>
  );
}

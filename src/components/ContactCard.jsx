import {
  Phone,
  MessageCircle,
  MapPin,
  Send,
  Camera,
  Music2,
} from "lucide-react";

import { businessInfo } from "../data/content";

export default function ContactCard({ className = "" }) {
  return (
    <div className={`glass-card rounded-[26px] p-6 ${className}`}>
      {/* Телефоны */}
      <div className="flex flex-col gap-6 mb-7">
        <a
          href={businessInfo.phoneLink1}
          className="flex items-center gap-5"
          aria-label={`Позвонить: ${businessInfo.name1}`}
        >
          <Phone className="blue-icon shrink-0" size={34} />

          <div>
            <p className="text-sm text-gray-400 font-medium mb-1">
              {businessInfo.name1}
            </p>

            <p className="text-[24px] font-[700] leading-none">
              {businessInfo.phone1}
            </p>
          </div>
        </a>

        <a
          href={businessInfo.phoneLink2}
          className="flex items-center gap-5"
          aria-label={`Позвонить: ${businessInfo.name2}`}
        >
          <Phone className="blue-icon shrink-0" size={34} />

          <div>
            <p className="text-sm text-gray-400 font-medium mb-1">
              {businessInfo.name2}
            </p>

            <p className="text-[24px] font-[700] leading-none">
              {businessInfo.phone2}
            </p>
          </div>
        </a>
      </div>

      {/* Адрес */}
      <div className="flex items-center gap-5 mb-7">
        <MapPin className="blue-icon shrink-0" size={34} />

        <div>
          <p className="text-sm text-gray-400 font-medium mb-1">
            Адрес
          </p>

          <p className="text-white font-medium leading-[1.5]">
            {businessInfo.address}
          </p>
        </div>
      </div>

      {/* Главная кнопка */}
      <a href={businessInfo.phoneLink} className="primary-button mb-4">
        <Phone size={20} />
        Позвонить
      </a>

      {/* Мессенджеры */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <a
          href={businessInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="messenger-button whatsapp"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>

        <a
          href={businessInfo.telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="messenger-button telegram"
        >
          <Send size={18} />
          Telegram
        </a>

        <a href={businessInfo.viberLink} className="messenger-button viber">
          <MessageCircle size={18} />
          Viber
        </a>

        <a
          href={businessInfo.instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="messenger-button instagram"
        >
          <Camera size={18} />
          Instagram
        </a>

        <a
          href={businessInfo.tiktokLink}
          target="_blank"
          rel="noopener noreferrer"
          className="messenger-button tiktok col-span-2"
        >
          <Music2 size={18} />
          TikTok
        </a>
      </div>

      {/* Статичная карта */}
      <div className="rounded-[22px] overflow-hidden border border-white/10">
        <iframe
          title="KEY MASTER location"
          src={businessInfo.mapEmbed}
          width="100%"
          height="320"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
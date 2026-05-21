import { ShieldCheck, UserRound, KeyRound, Clock3 } from "lucide-react";
import { benefits } from "../data/content";

const icons = [ShieldCheck, UserRound, KeyRound, Clock3];

export default function WhyUs() {
  return (
    <section className="page-section">
      <h2 className="section-title">Почему обращаются</h2>

      <div className="space-y-3">
        {benefits.map((benefit, index) => {
          const Icon = icons[index];

          return (
            <div
              key={index}
              className="glass-card rounded-[18px] px-8 py-4 text-[15px] font-bold grid grid-cols-[34px_1fr] items-center gap-5"
            >
              <Icon className="blue-icon shrink-0" size={28} />
              <span>{benefit}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import { Car, KeyRound, LockOpen, RadioTower, RotateCcw } from "lucide-react";
import { services } from "../data/content";

const icons = [KeyRound, LockOpen, Car, RotateCcw, RadioTower];

export default function Services() {
  return (
    <section className="page-section">
      <div className="glass-card rounded-[26px] px-8 py-7">
        <h2 className="section-title mb-6">Услуги</h2>

        <div className="space-y-4">
          {services.map((service, index) => {
            const Icon = icons[index];

            return (
              <div key={index} className="flex items-center gap-6">
                <Icon
                  size={30}
                  strokeWidth={2.1}
                  className="blue-icon shrink-0"
                />

                <p className="text-[17px] font-medium leading-snug">
                  {service}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

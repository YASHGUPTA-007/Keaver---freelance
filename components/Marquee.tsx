"use client";

const items = [
  "Transforming Lives",
  "Education",
  "Empowerment",
  "Excellence",
  "Faith",
  "Compassion",
  "Fairness",
  "Global Impact",
  "London 2024",
  "Scholarship",
  "Leadership",
];

export default function Marquee() {
  const text = items.join(" · ") + " · ";

  return (
    <div className="bg-navy border-y border-white/5 py-3.5 overflow-hidden">
      <div className="marquee-track flex select-none">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="flex-shrink-0 font-(family-name:--font-syne) text-[11px] tracking-[0.22em] uppercase text-white/45 px-6 font-medium"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

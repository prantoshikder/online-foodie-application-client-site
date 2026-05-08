"use client";

import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    tag: "HOT DEAL 🔥",
    tagColor: "text-orange-400",
    title: "50% OFF on\nyour first order",
    code: "WELCOME50",
    cta: "Order Now",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&q=90",
    imageAlt: "Gourmet Smash Burger",
  },
  {
    id: 2,
    tag: "FREE DELIVERY 🛵",
    tagColor: "text-green-400",
    title: "Free delivery\non all pizza orders",
    code: "FREEDEL",
    cta: "Order Pizza",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=900&q=90",
    imageAlt: "Classic Pizza",
  },
  {
    id: 3,
    tag: "WEEKEND SPECIAL ⭐",
    tagColor: "text-yellow-300",
    title: "25% OFF on\nBiryani this weekend",
    code: "BIRYANI25",
    cta: "Order Biryani",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=900&q=90",
    imageAlt: "Aromatic Chicken Biryani",
  },
  {
    id: 4,
    tag: "NEW ARRIVAL 🍣",
    tagColor: "text-cyan-300",
    title: "Fresh sushi\ndelivered in 30 min",
    code: "SUSHI10",
    cta: "Try Now",
    image: "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=900&q=90",
    imageAlt: "Fresh Sushi Rolls",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  const goTo = useCallback((idx: number) => {
    setTextVisible(false);
    setTimeout(() => {
      setCurrent((idx + slides.length) % slides.length);
      setTextVisible(true);
    }, 400);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [next]);

  const slide = slides[current];

  return (
    <div className="relative rounded-3xl overflow-hidden mb-6 min-h-52.5">
      {/* All slide images stacked — crossfade via opacity, no unmount */}
      {slides.map((s, i) => (
        <img
          key={s.id}
          src={s.image}
          alt={s.imageAlt}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/30 to-transparent" />

      {/* Text content */}
      <div
        className="relative z-10 p-7 flex flex-col justify-center h-full min-h-52.5 w-1/2 transition-all duration-400"
        style={{
          opacity: textVisible ? 1 : 0,
          transform: textVisible ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        <div className={`font-bold text-sm mb-2 ${slide.tagColor}`}>{slide.tag}</div>
        <h1 className="text-[26px] font-extrabold text-white leading-tight mb-4 whitespace-pre-line drop-shadow">
          {slide.title}
        </h1>
        <div className="inline-flex w-fit border-2 border-dashed border-orange-400 rounded-xl px-4 py-1.5 text-orange-300 font-bold text-sm mb-5">
          Use code: {slide.code}
        </div>
        <button className="w-fit bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-xl transition-colors shadow-lg text-sm">
          {slide.cta}
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-7 flex items-center gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-5 bg-orange-500" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Prev / Next arrows — commented out
      <button onClick={() => goTo(current - 1)} ...>
        <ChevronLeft />
      </button>
      <button onClick={next} ...>
        <ChevronRight />
      </button>
      */}
    </div>
  );
}

import React from "react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Lightbulb } from "lucide-react";

// Replace the copy below with the exact wording from the three original Figma slides when available.
const slides = [
  { eyebrow: "A LITTLE REMINDER", title: "Progress over perfection.", body: "You don't have to do everything today. Focus on the next meaningful step.", tone: "lavender" },
  { eyebrow: "YOUR DAILY FOCUS", title: "Make space for deep work.", body: "Choose one priority, quiet the distractions, and give it your full attention.", tone: "peach" },
  { eyebrow: "KEEP GOING", title: "Consistency creates momentum.", body: "Small actions repeated every day lead to meaningful results. You've got this.", tone: "mint" }
];
export default function FocusNotes() {
  const [active, setActive] = useState(0);
  const slide = slides[active];
  const move = direction => setActive(index => (index + direction + slides.length) % slides.length);
  return <section className={`focus-note ${slide.tone}`} aria-label="Focus notes carousel">
    <div className="focus-art"><div className="focus-orbit orbit-one"/><div className="focus-orbit orbit-two"/><div className="focus-bulb"><Lightbulb size={28}/></div></div>
    <div className="focus-copy" aria-live="polite"><span className="eyebrow">{slide.eyebrow}</span><h2>{slide.title}</h2><p>{slide.body}</p></div>
    <div className="carousel-controls"><div className="carousel-dots">{slides.map((item, i) => <button key={item.title} className={`carousel-dot ${active === i ? "selected" : ""}`} onClick={() => setActive(i)} aria-label={`Go to slide ${i + 1}`} aria-current={active === i ? "true" : undefined}/>)}</div><button className="carousel-arrow" onClick={() => move(-1)} aria-label="Previous focus note"><ArrowLeft size={17}/></button><button className="carousel-arrow" onClick={() => move(1)} aria-label="Next focus note"><ArrowRight size={17}/></button></div>
  </section>;
}
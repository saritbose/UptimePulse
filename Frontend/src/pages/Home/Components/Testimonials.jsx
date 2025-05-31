import React from "react";

const testimonials = [
  {
    name: "Marcus Lytton",
    title: "DevOps Engineer, CloudForge",
    review:
      "UptimePulse caught a silent failure on our staging server before we even noticed. It’s fast, dead simple, and a must-have in our stack now.",
  },
  {
    name: "Alina Sharma",
    title: "Frontend Developer, Freelance",
    review:
      "I’ve used expensive tools in the past, but UptimePulse gave me everything I needed to monitor my portfolio projects — for free!",
  },
  {
    name: "Tyler Reeves",
    title: "CTO, PixelBridge",
    review:
      "We share the public status link with all our clients. It saves us from constant ‘Is it down?’ messages. Solid product.",
  },
  {
    name: "Jennifer Chou",
    title: "Indie Hacker",
    review:
      "I built a micro-SaaS in a weekend, and UptimePulse made it look professional with status pages and real monitoring.",
  },
  {
    name: "Ibrahim Yusuf",
    title: "Backend Engineer, Remotify",
    review:
      "The API health checks + webhook alerts helped me integrate monitoring directly into my CI pipeline. A++.",
  },
  {
    name: "Camille Roy",
    title: "Product Designer, Saasy Labs",
    review:
      "I’m not even a developer, but I set it up in 5 minutes and instantly got a status page for our app. Love the design too.",
  },
];

export default function Testimonials() {
  return (
    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t, index) => (
        <div
          key={index}
          className="bg-black border group shadow-white shadow-sm rounded-xl p-6 text-left hover:shadow-lg transition duration-300 hover:scale-105"
        >
          <p className="text-gray-500 text-sm">"{t.review}"</p>
          <div className="mt-4">
            <p className="font-semibold text-gray-900 group-hover:text-2xl group-hover:text-transparent bg-clip-text group-hover:bg-gradient-to-r from-red-400 via-75% to-sky-400">
              {t.name}
            </p>
            <p className="text-sm text-gray-500 ">{t.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

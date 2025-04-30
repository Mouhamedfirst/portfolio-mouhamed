import React from "react";

const experiences = [
  {
    company: "SONATEL",
    title: "Contrôleur Accès Clients",
    period: "2021 – 2023",
    details: [
      "Suivi des installations fibre",
      "Supervision réseau et audit qualité",
    ],
  },
  {
    company: "SONATEL",
    title: "Stagiaire contrôle qualité",
    period: "2020",
    details: [],
  },
  {
    company: "Prévoyance Assurance",
    title: "Assistant sinistres / informatique",
    period: "2017 – 2019",
    details: [],
  },
  {
    company: "Banque de l’Habitat",
    title: "Développeur C# (stage)",
    period: "2018",
    details: [],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-900 text-gray-300">
      <h2 className="text-3xl font-bold mb-10 text-center text-white">Experience</h2>
      <div className="space-y-8 max-w-5xl mx-auto">
        {experiences.map((exp, i) => (
          <div key={i} className="border-l-4 border-indigo-500 pl-6">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-sm text-gray-400">{exp.company} | {exp.period}</p>
            <ul className="list-disc ml-5 mt-1">
              {exp.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
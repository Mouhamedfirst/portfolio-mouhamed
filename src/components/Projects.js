import React from "react";

const projects = [
    {
      title: "Sen Logement",
      description: "Une plateforme de recherche de logements développée avec React et PHP/Laravel pour la gestion des annonces immobilières.",
    },
    {
      title: "Gestionnaire de factures",
      description: "Application web pour créer et gérer des factures, devis et bons de commande avec aperçu imprimable (React et PHP/Laravel).",
    },
  ];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-12 text-center text-white">
        My Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-gray-800 p-6 rounded-lg shadow hover:scale-[1.02] hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-indigo-400 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

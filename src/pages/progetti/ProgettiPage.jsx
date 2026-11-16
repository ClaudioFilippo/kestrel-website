import React from "react";

import ProgettiWallpaper from "./ProgettiWallpaper";
import MyContactFooter from "../components/contact-footer/contact-footer";
import MyFooter from "../components/footer/myfooter";

// Import dei componenti dei singoli progetti
import CommercialistiProposal from "./CommercialistiProposal";

import "./progetti.css"


const projects = [
  {
    id: "commercialisti-2025",
    title: "Proposta Commercialisti 2025",
    description: "Soluzioni AI, analisi dati e automazione per studi professionali.",
    component: <CommercialistiProposal />,
  },
  // { id: "altro-progetto", title: "...", description: "...", component: <AltroProgettoProposal /> },
];


const ProgettiPage = () => {
  return (
    <div className="new-font">
      <>
        <title>Kestrel Intelligence | Progetti e Collaborazioni</title>
        <meta
          name="description"
          content="Scopri le proposte di collaborazione di Kestrel Intelligence: consulenza in AI, analisi dati e automazione. Contattaci tramite il form per discutere un progetto personalizzato."
        />
        <meta
          name="keywords"
          content="Kestrel Intelligence, collaborazione, consulenza AI, automazione, analisi dati, progetti su misura, Piemonte, Cuneo, Torino"
        />
        <meta property="og:title" content="Progetti e Collaborazioni | Kestrel Intelligence" />
        <meta property="og:description" content="Esplora le nostre proposte di collaborazione in AI, analisi dati e automazione. Contattaci tramite il form per maggiori informazioni." />
      </>

      <main>
        {/* Sezione introduttiva generica */}
        <ProgettiWallpaper />

        {/* Mappatura dei progetti */}
        {projects.map((project) => (
          <section key={project.id} className="my-5">
            {project.component}
          </section>
        ))}

        <MyContactFooter />
      </main>

      <MyFooter />
    </div>
  );
};

export default ProgettiPage;

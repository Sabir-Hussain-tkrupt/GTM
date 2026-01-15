import { motion } from "framer-motion";

// Import client logos
import argonteqLogo from "@/assets/clients/argonteq.png";
import codestrideLogo from "@/assets/clients/codestride.png";
import penvaLogo from "@/assets/clients/penva.png";
import fluyeLogo from "@/assets/clients/fluye.png";
import prixiteLogo from "@/assets/clients/prixite.png";
import zelevateLogo from "@/assets/clients/zelevate.png";
import repriseLogo from "@/assets/clients/reprise.png";
import sync2Logo from "@/assets/clients/sync2.png";

const TrustedClients = () => {
  const clients = [
    { name: "Argonteq", logo: argonteqLogo },
    { name: "Codestride", logo: codestrideLogo },
    { name: "Penva", logo: penvaLogo },
    { name: "Fluye", logo: fluyeLogo },
    { name: "Prixite", logo: prixiteLogo },
    { name: "Zelevate", logo: zelevateLogo },
    { name: "Reprise", logo: repriseLogo },
    { name: "Sync2", logo: sync2Logo },
  ];

  return (
    <section className="py-12 px-6 border-b border-border overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground text-sm mb-8"
        >
          Trusted by innovative B2B companies
        </motion.p>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-fast">
            {[...clients, ...clients, ...clients].map((client, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 mx-6"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;

import Site from "./Site";

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SportsActivityLocation"],
  name: "Lavezso Personal Trainer",
  description: "Consultoria online, acompanhamento presencial e avaliação física com treino personalizado pelo MFit Personal.",
  telephone: "+55 16 99283-6571",
  areaServed: "Sertãozinho, SP",
  sameAs: ["https://instagram.com/vicalefit"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Jordão Borghetti, 859 - Vicale Fit",
    addressLocality: "Sertãozinho",
    addressRegion: "SP",
    postalCode: "14170-120",
    addressCountry: "BR",
  },
  priceRange: "R$ 80–R$ 210",
};

export default function Home() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><Site /></>;
}

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Painting, Waterproofing & Restoration",
  description: "Expert commercial painting, waterproofing, and restoration services in South Florida. Over 45 years experience with the most advanced techniques and materials.",
};

const exteriorServices = [
  "Exterior facade painting and waterproofing",
  "Window and sliding door sealant replacement",
  "Stucco and non-structural concrete repairs",
  "Expansion and control joints",
  "Epoxy injections",
  "Concrete restoration",
  "Post tension pocket repairs",
  "Slab edge repair",
  "Rail post pocket repairs",
  "Full and partial depth concrete repair",
  "Masonry crack repair",
];

const additionalServices = [
  "Project management and consulting",
  "Construction and maintenance services",
  "Paint details and wallpaper",
  "Flooring installation",
  "Interior hallway and common area painting",
];

const projects = [
  { title: "Mint Condo Lobby", image: "/images/projects/mint-condo-lobby.png" },
  { title: "Condo Work Force", image: "/images/projects/condo-work-force.png" },
  { title: "Mar Del Plata", image: "/images/projects/mar-del-plata.png" },
  { title: "Residential Condo", image: "/images/projects/residential-condo-remodel.png" },
  { title: "Club Atlantis", image: "/images/projects/club-atlantis.png" },
];

export default function PaintingPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">PAINTING, WATERPROOFING &amp; RESTORATION</h1>
          <p className="text-2xl text-gold font-semibold">Beauty Worth Protecting</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-gray-600 mb-4">Appearances matter — no matter if you have the best exterior, interior or components, if the corresponding areas don&apos;t match it takes away from the complete aesthetic. Commercial painting plays a key role in determining a successful project.</p>
            <p className="text-gray-600">Delaying this crucial element puts you at risk for water intrusion and deterioration. South Florida&apos;s complex zone with water, humidity, salt water conditions and intense UV rays requires expert staff with years of experience.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Exterior Services</h2>
              <ul className="space-y-3">
                {exteriorServices.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span className="text-gray-600">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Additional Services</h2>
              <ul className="space-y-3">
                {additionalServices.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span className="text-gray-600">{s}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-light p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold text-navy mb-3">Innovative techniques with virtually no mess</h3>
                <p className="text-gray-600">We use the latest products and technology. Our in-house developed spraying systems and clean up machines give us unparalleled speed and precision, eliminating breakage considerably and the need to repeat bad work.</p>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-navy mb-8">Our Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {projects.map((p) => (
              <div key={p.title} className="relative aspect-square rounded-lg overflow-hidden">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-end p-3">
                  <p className="text-white text-sm font-medium">{p.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/request-a-quote" className="inline-block bg-gold hover:bg-gold/90 text-navy font-bold px-8 py-4 rounded-md transition-colors">Get a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}

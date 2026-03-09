import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maintenance Work Orders",
  description: "Professional maintenance services from B & B Concept Designs. Pressure cleaning, leak detection, fire stopping, electrostatic painting, and more.",
};

const servicesLeft = ["Inspection Pre-Check", "Pressure cleaning", "Leak detection and repairs", "Fire stopping", "Electrostatic painting", "Property perimeter walls and fences", "Fire Rated"];
const servicesRight = ["Hallway Painting", "Fountains and guard houses", "Entertainment Rooms", "Pool/Spa mechanical, electrical, plumbing", "Paver sealing", "Mechanical and elevator rooms", "Interior/exterior painting"];

export default function MaintenancePage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">MAINTENANCE WORK ORDERS</h1>
          <p className="text-xl text-gray-300">On schedule. On budget. On topic.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-gray-600 mb-4">Our maintenance division is professionally trained to handle tasks with minimal disruption. We are regularly asked to take on additional tasks and go above and beyond as a normal circumstance.</p>
            <p className="text-gray-600 font-semibold">Count on B&amp;B Concept Designs to do the job done right — the very first time without complication.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {["/images/services/maintenance-1.webp", "/images/services/maintenance-2.webp", "/images/services/maintenance-3.webp", "/images/services/maintenance-4.webp"].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image src={src} alt={`Maintenance work ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-navy mb-8">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ul className="space-y-3">
              {servicesLeft.map((s) => (
                <li key={s} className="flex items-center gap-3 bg-light p-4 rounded-lg">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span className="text-gray-700 font-medium">{s}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {servicesRight.map((s) => (
                <li key={s} className="flex items-center gap-3 bg-light p-4 rounded-lg">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span className="text-gray-700 font-medium">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center bg-navy py-12 rounded-lg">
            <p className="text-2xl font-bold text-gold mb-6">&ldquo;On schedule, On budget. On Topic.&rdquo;</p>
            <Link href="/request-a-quote" className="inline-block bg-gold hover:bg-gold/90 text-navy font-bold px-8 py-4 rounded-md transition-colors">Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}

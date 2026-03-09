import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Standards",
  description: "Safety is our top priority at B & B Concept Designs. We meet or exceed OSHA standards with regular inspections, audits, and comprehensive training.",
};

export default function StandardsPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">STANDARDS</h1>
          <p className="text-xl text-gray-300">Do it safely. Do it right.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-6">Safety Is Our Top Priority</h2>
            <p className="text-gray-600 mb-4">At B &amp; B Concept Designs, we maintain an unwavering commitment to meeting or exceeding OSHA standards. We conduct regular job site inspections and audits, and provide comprehensive OSHA training to all team members.</p>
            <p className="text-gray-600">We believe that safety is everyone&apos;s responsibility. Full OSHA guideline compliance for all team members ensures the protection of both workers and clients.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {["/images/services/maintenance-1.webp", "/images/services/maintenance-2.webp", "/images/services/maintenance-3.webp", "/images/services/maintenance-4.webp"].map((src, i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                <Image src={src} alt={`Safety standards ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Hazard Identification", desc: "Proactive identification of potential hazards and on-site training to prevent incidents." },
              { title: "Emergency Preparedness", desc: "Comprehensive emergency plans and regular drills to ensure team readiness." },
              { title: "Regular Inspections", desc: "Routine job site inspections and safety audits to maintain the highest standards." },
              { title: "Safety Reviews", desc: "Regular safety reviews with project management teams to address concerns." },
              { title: "OSHA Training", desc: "All team members receive comprehensive OSHA training and certification." },
              { title: "Ongoing Research", desc: "Continuous research to optimize industry standards and best practices." },
            ].map((item) => (
              <div key={item.title} className="bg-light p-6 rounded-lg">
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <p className="text-2xl font-bold text-gold mb-6">&ldquo;Do it safely. Do it right.&rdquo;</p>
            <Link href="/request-a-quote" className="inline-block bg-gold hover:bg-gold/90 text-navy font-bold px-8 py-4 rounded-md transition-colors">Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}

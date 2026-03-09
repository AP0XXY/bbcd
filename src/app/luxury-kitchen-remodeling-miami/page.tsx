import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Luxury Kitchen Remodeling Miami",
  description: "Luxury Kitchen Remodeling Miami transforms your culinary space into a modern masterpiece. Expert services tailored to your style and needs.",
};

export default function LuxuryKitchenPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-medium mb-2">Your Go-To Remodeling Solution Provider in Miami</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Luxury Kitchen Remodeling Miami</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden"><Image src="/images/services/luxury-kitchen-experience.webp" alt="Luxury kitchen" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden"><Image src="/images/services/kitchen-remodel-process.webp" alt="Kitchen remodel" fill className="object-cover" /></div>
          </div>
          <h2 className="text-2xl font-bold text-navy mb-8">Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[{ t: "Enhanced Comfort", d: "Innovative technology, quality materials, and customized layouts." }, { t: "Increased Property Value", d: "Attracts high-end buyers with upgraded functionality." }, { t: "Personalized Aesthetic", d: "Custom color schemes, unique elements, and tailored finishes." }, { t: "Eco-friendly Living", d: "Energy-efficient appliances, sustainable materials, and improved insulation." }].map((b) => (
              <div key={b.t} className="bg-light p-6 rounded-lg"><h3 className="font-bold text-navy mb-2">{b.t}</h3><p className="text-gray-600 text-sm">{b.d}</p></div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-navy mb-8">Our 6-Phase Process</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {["Initiation & Consultation", "Planning & Budgeting", "Permits & Procurement", "Demolition & Structural", "Installation & Finishing", "QA & Final Walkthrough"].map((step, i) => (
              <div key={step} className="text-center bg-light p-4 rounded-lg"><div className="w-10 h-10 bg-gold text-navy rounded-full flex items-center justify-center font-bold mx-auto mb-2">{i + 1}</div><p className="text-sm font-medium text-navy">{step}</p></div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-navy mb-8">Kitchen Styles</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[{ t: "Classic", d: "Work triangle efficiency with timeless design elements." }, { t: "Contemporary", d: "Minimalist approach with smart technology integration." }, { t: "Luxury Gourmet", d: "Professional-grade appliances for culinary enthusiasts." }, { t: "Open-Plan", d: "Seamless flow connecting kitchen to living spaces." }, { t: "Compact Urban", d: "Maximizing space without compromising on style." }, { t: "Eco-Friendly", d: "Sustainable materials and energy-efficient design." }].map((s) => (
              <div key={s.t} className="border border-gold/30 p-4 rounded-lg"><h3 className="font-bold text-gold mb-1">{s.t}</h3><p className="text-gray-600 text-sm">{s.d}</p></div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-navy mb-6">FAQs</h2>
          <div className="max-w-3xl space-y-3 mb-12">
            {[{ q: "How much does it cost to remodel a kitchen in Miami?", a: "Kitchen remodel costs typically range from $10,000 to $50,000 based on size, materials, and complexity." }, { q: "Is $10,000 enough for a kitchen remodel?", a: "A $10,000 budget may cover a small remodel with basic updates like new paint, hardware, and budget-friendly appliances." }, { q: "What is a realistic budget?", a: "A realistic budget typically ranges from $12,000 to $35,000, with high-end remodels exceeding $50,000." }, { q: "How much is the average kitchen remodel?", a: "The average costs approximately $25,000, with most projects ranging between $13,000 and $37,000." }].map((faq) => (
              <details key={faq.q} className="bg-light rounded-lg"><summary className="px-6 py-4 font-medium text-navy cursor-pointer">{faq.q}</summary><p className="px-6 pb-4 text-gray-600">{faq.a}</p></details>
            ))}
          </div>
          <div className="text-center"><Link href="/request-a-quote" className="inline-block bg-gold hover:bg-gold/90 text-navy font-bold px-8 py-4 rounded-md transition-colors">Transform Your Kitchen</Link></div>
        </div>
      </section>
    </>
  );
}

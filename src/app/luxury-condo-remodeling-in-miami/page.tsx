import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Luxury Condo Remodeling in Miami | B&B Concept Design",
  description: "Top-notch luxury condo remodeling service provider in Miami | B&B Concept Design. Take a luxurious step with our custom solutions.",
};

export default function CondoRemodelingPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-medium mb-2">Your Go-To Remodeling Solution Provider in Miami</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Luxury Condo Remodeling In Miami</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 max-w-3xl mb-16">Welcome to the epitome of luxury condo remodeling in Miami! Our custom solutions redefine luxury and make your living experience better. We combine high-end design with unmatched workmanship, incorporating customization and cutting-edge technology.</p>
          <h2 className="text-2xl font-bold text-navy mb-8">Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[{ t: "Increased Property Value", d: "A luxury remodel significantly boosts your condo's market value." }, { t: "Enhanced Living Experience", d: "Transform your daily living with premium finishes and smart features." }, { t: "Modernization & Customization", d: "Update your space with the latest trends tailored to your taste." }, { t: "Energy Efficiency", d: "Sustainable materials and energy-efficient fixtures reduce your footprint." }].map((b) => (
              <div key={b.t} className="bg-light p-6 rounded-lg"><h3 className="font-bold text-navy mb-2">{b.t}</h3><p className="text-gray-600 text-sm">{b.d}</p></div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {["/images/services/luxury-condo-1.webp", "/images/services/luxury-condo-2.webp", "/images/services/luxury-condo-miami.webp"].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden"><Image src={src} alt={`Luxury condo project ${i + 1}`} fill className="object-cover" /></div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-navy mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[{ t: "Custom Design Solutions", d: "Tailor your space to perfection with our personalized design approach." }, { t: "High-End Materials", d: "Premium sourcing ensuring durability, elegance, and timeless appeal." }, { t: "Smart Home Integration", d: "Cutting-edge smart home technology with control at your fingertips." }, { t: "Project Management", d: "Skilled team navigates every detail for a smooth process." }].map((f) => (
              <div key={f.t} className="border border-gold/30 p-6 rounded-lg"><h3 className="font-bold text-gold mb-2">{f.t}</h3><p className="text-gray-600 text-sm">{f.d}</p></div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-navy mb-8">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {["Consultation & Assessment", "Collaborative Design Process", "Transparent Timelines & Budgeting", "Skilled & Experienced Team"].map((step, i) => (
              <div key={step} className="text-center"><div className="w-12 h-12 bg-gold text-navy rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">{i + 1}</div><p className="font-medium text-navy">{step}</p></div>
            ))}
          </div>
          <div className="bg-light p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold text-navy mb-4">Service Locations</h2>
            <div className="flex flex-wrap gap-4">{["Williams Island Aventura", "Palm Bay Towers Biscayne", "Oceanside Plaza Miami Beach"].map((loc) => (<span key={loc} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-navy">{loc}</span>))}</div>
          </div>
          <h2 className="text-2xl font-bold text-navy mb-6">Why Choose B&amp;B</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {["Years of experienced expertise", "Impressive track record", "Client-centric collaborative approach", "Transparent and competitive pricing"].map((r) => (
              <div key={r} className="flex items-center gap-3"><svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg><span className="text-gray-700">{r}</span></div>
            ))}
          </div>
          <div className="text-center"><Link href="/request-a-quote" className="inline-block bg-gold hover:bg-gold/90 text-navy font-bold px-8 py-4 rounded-md transition-colors">Get a Free Quote</Link></div>
        </div>
      </section>
    </>
  );
}

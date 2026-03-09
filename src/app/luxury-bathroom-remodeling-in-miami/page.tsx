import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Luxury Bathroom Remodeling In Miami",
  description: "Transform your Miami home with our luxury bathroom remodeling that creates a sanctuary of comfort and elegance.",
};

export default function LuxuryBathroomPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-medium mb-2">Your Go-To Remodeling Solution Provider in Miami</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Luxury Bathroom Remodeling In Miami</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 max-w-3xl mb-12">Transform your Miami home with a luxury bathroom makeover that encapsulates elegance and relaxation. Trust local experts to deliver a high-end, customized redesign that suits your opulent lifestyle.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden"><Image src="/images/services/eco-bathroom.webp" alt="Eco luxury bathroom" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden"><Image src="/images/services/residential-bathroom.webp" alt="Residential bathroom" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden"><Image src="/images/services/luxury-bathroom-2.webp" alt="Luxury bathroom" fill className="object-cover" /></div>
          </div>
          <h2 className="text-2xl font-bold text-navy mb-8">Premium Materials</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[{ t: "White Carrara Marble", d: "Glistens like morning dew with lustrous shine and unique patterns." }, { t: "Calacatta Marble", d: "Bold, dramatic veining for a statement of luxury." }, { t: "Black Marquina", d: "Modern sophistication with superior durability." }].map((m) => (
              <div key={m.t} className="bg-light p-6 rounded-lg"><h3 className="font-bold text-navy mb-2">{m.t}</h3><p className="text-gray-600 text-sm">{m.d}</p></div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-navy mb-8">Design Themes</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[{ t: "Coastal", colors: "Blues, greens, sand", materials: "Natural stone, driftwood", lighting: "Soft, warm" }, { t: "Modern", colors: "Monochrome, metal accents", materials: "Glass, clean lines", lighting: "Bright, strategic" }, { t: "Classic", colors: "Neutral, timeless", materials: "Marble, polished wood", lighting: "Opulent, chandeliers" }].map((theme) => (
              <div key={theme.t} className="border border-gold/30 p-6 rounded-lg">
                <h3 className="font-bold text-gold mb-4">{theme.t}</h3>
                <div className="space-y-2 text-sm"><p><span className="font-medium text-navy">Colors:</span> <span className="text-gray-600">{theme.colors}</span></p><p><span className="font-medium text-navy">Materials:</span> <span className="text-gray-600">{theme.materials}</span></p><p><span className="font-medium text-navy">Lighting:</span> <span className="text-gray-600">{theme.lighting}</span></p></div>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-navy mb-8">Must-Have Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[{ t: "Smart Toilets", d: "Bidet functions, seat warmers, self-cleaning systems." }, { t: "Digital Shower Controls", d: "Preset water temperature and flow settings." }, { t: "Integrated Sound", d: "Hidden speakers for music and audio." }, { t: "Heated Floors", d: "Warmth and comfort throughout the bathroom." }].map((f) => (
              <div key={f.t} className="bg-light p-6 rounded-lg"><h3 className="font-bold text-navy mb-2">{f.t}</h3><p className="text-gray-600 text-sm">{f.d}</p></div>
            ))}
          </div>
          <div className="bg-light p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold text-navy mb-4">Eco-Luxury: Sustainable Opulence</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Low-flow faucets and showers conserve water", "Energy-efficient lighting cuts electricity use", "Recycled materials reduce waste", "Non-toxic paints and adhesives improve air quality"].map((item) => (
                <div key={item} className="flex items-center gap-3"><svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg><span className="text-gray-600">{item}</span></div>
              ))}
            </div>
          </div>
          <div className="text-center"><Link href="/request-a-quote" className="inline-block bg-gold hover:bg-gold/90 text-navy font-bold px-8 py-4 rounded-md transition-colors">Get a Free Quote</Link></div>
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Luxury Shower Renovation in Miami",
  description: "Transform your bathroom into a spa-like retreat with a luxury shower renovation in Miami with premium materials and cutting-edge features.",
};

export default function ShowerRenovationPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-medium mb-2">Your Go-To Remodeling Solution Provider in Miami</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Luxury Shower Renovation in Miami</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 max-w-3xl mb-12">Transform your bathroom into a spa-like retreat with premium materials and cutting-edge features. Miami&apos;s high property values and warm climate inspire shower designs that combine cooling escapes with luxurious experiences.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden"><Image src="/images/services/luxury-shower-1.webp" alt="Luxury shower" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden"><Image src="/images/services/luxury-shower-2.webp" alt="Shower renovation" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden"><Image src="/images/services/luxury-shower-3.webp" alt="Modern shower" fill className="object-cover" /></div>
          </div>
          <h2 className="text-2xl font-bold text-navy mb-8">Elements of a Luxurious Shower</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {["Multifunctional showerheads (rain, massage, mist)", "Seamless digital temperature controls", "Elegant high-quality tiles and stones", "Custom seating and built-in benches", "Steam generators and aromatic dispensers", "Adjustable ambient lighting", "Ample spacious layout"].map((e) => (
              <div key={e} className="flex items-center gap-3 bg-light p-4 rounded-lg"><svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg><span className="text-gray-600">{e}</span></div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-navy mb-8">Premium Materials & Fixtures</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-lg font-bold text-gold mb-4">High-End Fixtures</h3>
              <ul className="space-y-2">{["Rainfall showerheads", "Thermostatic mixers", "Digital controls", "Frameless glass enclosures"].map((f) => (<li key={f} className="text-gray-600 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full" />{f}</li>))}</ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gold mb-4">Durable Materials</h3>
              <ul className="space-y-2">{["Natural stone (heat-resistant)", "Porcelain tiles (moisture-resistant)", "Stainless steel fixtures (rust-proof)"].map((m) => (<li key={m} className="text-gray-600 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full" />{m}</li>))}</ul>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-navy mb-8">Smart Shower Technology</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[{ t: "Steam Systems", d: "Transform showers into private spas for improved circulation." }, { t: "Chromatherapy", d: "Color-based lighting for mood enhancement and relaxation." }, { t: "Body Jets", d: "Multiple angles for targeted muscle relaxation." }, { t: "Voice Activation", d: "Touchless controls for ultimate convenience." }, { t: "Mobile Integration", d: "Smartphone control and customizable presets." }, { t: "Digital Interfaces", d: "Sleek panels for precision temperature and flow control." }].map((tech) => (
              <div key={tech.t} className="border border-gold/30 p-6 rounded-lg"><h3 className="font-bold text-navy mb-2">{tech.t}</h3><p className="text-gray-600 text-sm">{tech.d}</p></div>
            ))}
          </div>
          <div className="text-center"><Link href="/request-a-quote" className="inline-block bg-gold hover:bg-gold/90 text-navy font-bold px-8 py-4 rounded-md transition-colors">Start Your Renovation</Link></div>
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Luxury Condo Bathroom Remodeling Contractor in Miami",
  description: "We offer top-notch luxury condo bathroom remodeling in Miami. Learn how we can transform your bathroom into a beautiful and functional space.",
};

export default function CondoBathroomPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-medium mb-2">Your Go-To Remodeling Solution Provider in Miami</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Luxury Condo Bathroom Remodeling in Miami</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 max-w-3xl mb-16">A well-designed and functional bathroom makeover is more than just aesthetics — it&apos;s a place to relax and recharge. We create a beautiful balance of design and function that improves both daily living and property value.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden"><Image src="/images/services/luxury-condo-bathroom.webp" alt="Luxury condo bathroom" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden"><Image src="/images/services/luxury-bathroom-3.webp" alt="Luxury bathroom remodel" fill className="object-cover" /></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-light p-8 rounded-lg">
              <h2 className="text-xl font-bold text-navy mb-4">Remodeling</h2>
              <p className="text-gray-600">Updates the appearance and functionality through fixture replacement and color scheme updates without major structural changes — essentially a fresh and modern facelift.</p>
            </div>
            <div className="bg-light p-8 rounded-lg">
              <h2 className="text-xl font-bold text-navy mb-4">Renovation</h2>
              <p className="text-gray-600">Involves a more extensive overhaul, often including structural modifications, with changes to layout, plumbing, or electrical systems for comprehensive space redefinition.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[{ t: "Budget Setting", d: "We help establish a realistic budget with transparent cost assessment for materials, labor, and contingencies." }, { t: "Design Inspiration", d: "Our team assists in discovering design ideas from modern minimalism to classic elegance." }, { t: "Color Scheme Selection", d: "Personalized consultations to select palettes that complement your space and express your style." }].map((s) => (
              <div key={s.t} className="border border-gold/30 p-6 rounded-lg"><h3 className="font-bold text-gold mb-2">{s.t}</h3><p className="text-gray-600 text-sm">{s.d}</p></div>
            ))}
          </div>
          <div className="text-center"><Link href="/request-a-quote" className="inline-block bg-gold hover:bg-gold/90 text-navy font-bold px-8 py-4 rounded-md transition-colors">Get a Free Quote</Link></div>
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interior Design & Renovation",
  description: "B & B Concept Designs specializes in transforming condo lobbies, hallways, spas, rooms, commercial units, and residential units across South Florida.",
};

const subServices = [
  { name: "Condo Remodeling", href: "/luxury-condo-remodeling-in-miami" },
  { name: "Kitchen & Bathroom Remodeling", href: "/kitchen-and-bathroom-remodeling" },
  { name: "Condo Kitchen Renovation", href: "/condo-kitchen-renovation-in-miami" },
  { name: "Condo Bathroom Remodeling", href: "/condo-bathroom-remodeling-in-miami" },
  { name: "Kitchen Remodeling", href: "/luxury-kitchen-remodeling-miami" },
  { name: "Bathroom Remodeling", href: "/luxury-bathroom-remodeling-in-miami" },
  { name: "Shower Renovation", href: "/luxury-shower-renovation" },
];

export default function InteriorDesignPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Renovation Revolution</h1>
          <p className="text-xl text-gray-300">INTERIOR DESIGN &amp; RENOVATION</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-gray-600 mb-4">Design improves existing conditions and enhances quality of life. B&amp;B specializes in transforming condo lobbies, hallways, spas, rooms, commercial units, and residential units.</p>
            <p className="text-gray-600">We are a unique one-stop shop combining contractor, designer, foreman, project manager, and customer service — all under one roof.</p>
          </div>
          <h2 className="text-2xl font-bold text-navy mb-8">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { title: "Form & Function", desc: "Design balances aesthetics with practical functionality for every space." },
              { title: "Material Selection", desc: "Careful material and fixture selection prioritizing aesthetics, durability, and maintenance." },
              { title: "Single Vendor", desc: "One point of contact for your entire project — simplified management." },
              { title: "Professional Oversight", desc: "Expert oversight of plans, codes, compliance, and the permitting process." },
            ].map((b) => (
              <div key={b.title} className="bg-light p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gold mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-navy mb-6">Service Areas</h2>
          <div className="flex flex-wrap gap-3 mb-16">
            {["Lobbies", "Hallways", "Recreation Rooms", "Residential Units", "Valet Areas", "Storage", "Commercial Office Space", "Restaurants", "Clinics", "Entertainment Spaces"].map((area) => (
              <span key={area} className="bg-light text-navy px-4 py-2 rounded-full text-sm font-medium">{area}</span>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-navy mb-6">Comprehensive Services</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-16">
            {["Project theme development", "Planning & 3D renderings", "Design concepts", "Turnkey renovations", "Painting & finishing", "MEP services", "Drywall work", "Project management", "Ongoing communication"].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span className="text-gray-600">{s}</span>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-navy mb-6">Specialized Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {subServices.map((s) => (
              <Link key={s.href} href={s.href} className="bg-navy text-white p-4 rounded-lg hover:bg-navy/90 transition-colors flex items-center justify-between">
                <span className="font-medium">{s.name}</span>
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            ))}
          </div>
          <div className="text-center bg-light py-12 rounded-lg">
            <p className="text-2xl font-bold text-navy mb-4">Beautiful work inside and out</p>
            <Link href="/request-a-quote" className="inline-block bg-gold hover:bg-gold/90 text-navy font-bold px-8 py-4 rounded-md transition-colors">Start Your Project</Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Miami Home Renovation",
  description: "B & B Concept Designs offers comprehensive home renovation services in Miami including kitchen remodeling, bathroom renovation, painting, and waterproofing.",
};

export default function MiamiHomeRenovationPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Miami Home Renovation</h1>
          <p className="text-xl text-gray-300">Comprehensive renovation services for Miami homeowners and property managers</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 max-w-3xl mb-12">Whether you&apos;re updating a single room or renovating an entire property, B &amp; B Concept Designs delivers quality craftsmanship and professional project management for every Miami home renovation project.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Kitchen Remodeling", href: "/luxury-kitchen-remodeling-miami", desc: "Transform your culinary space with modern designs and premium materials." },
              { name: "Bathroom Remodeling", href: "/luxury-bathroom-remodeling-in-miami", desc: "Create a spa-like retreat with luxury finishes and smart features." },
              { name: "Condo Remodeling", href: "/luxury-condo-remodeling-in-miami", desc: "Specialized condo renovation with HOA compliance expertise." },
              { name: "Painting & Waterproofing", href: "/painting-waterproofing-restoration", desc: "Protect and beautify your property against South Florida elements." },
              { name: "Interior Design", href: "/interior-design-renovation", desc: "Custom design solutions for lobbies, common areas, and residences." },
              { name: "Maintenance", href: "/maintenance-work-orders", desc: "Professional maintenance services done right the first time." },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="group bg-light p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h2 className="text-lg font-bold text-navy group-hover:text-gold transition-colors mb-2">{s.name}</h2>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/request-a-quote" className="inline-block bg-gold hover:bg-gold/90 text-navy font-bold px-8 py-4 rounded-md transition-colors">Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}

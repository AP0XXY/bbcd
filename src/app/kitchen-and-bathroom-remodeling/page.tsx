import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Luxurious kitchen and bathroom remodeling company",
  description: "Your top-notch luxury kitchen and bathroom remodeling company in Miami, Fl | B&B Concept Design. 20+ years of trusted expertise.",
};

const faqs = [
  { q: "What sets your bathroom remodeling services apart?", a: "Our commitment to excellence, attention to detail, and dedication to customer satisfaction set us apart." },
  { q: "Do you handle plumbing and electrical work?", a: "Yes, our comprehensive remodeling services encompass all aspects including plumbing and electrical work." },
  { q: "Can you help with design?", a: "Absolutely! Our experienced designers work closely with you to conceptualize and create a design that meets your needs." },
  { q: "What materials do you use?", a: "We utilize high-quality materials suited to Miami's climate, including moisture-resistant tiles, durable fixtures, and premium finishes." },
  { q: "Are permits required?", a: "Yes, in most cases you will need permits. Our team assists you in navigating the permit process." },
  { q: "How long does a kitchen project take?", a: "A standard kitchen remodel can take anywhere from 4 to 12 weeks to complete." },
  { q: "What does the kitchen remodeling package include?", a: "Consultation and design, demolition, installation of fixtures and appliances, flooring, cabinetry, countertops, plumbing, electrical work, and finishing touches." },
  { q: "Do you offer eco-friendly options?", a: "Yes, we offer a variety of eco-friendly materials and energy-efficient options for your remodel." },
  { q: "How do you handle unforeseen issues?", a: "We maintain open communication throughout the project to address any unforeseen issues or changes promptly." },
  { q: "Can I see previous projects?", a: "Certainly! Browse our portfolio on the Our Work page featuring before and after photos." },
];

export default function KitchenBathroomPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-medium mb-2">Your Go-To Remodeling Solution Provider in Miami</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Luxury Kitchen and Bathroom Remodeling in Miami</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 max-w-3xl mb-16">Welcome to Miami&apos;s go-to destination for unparalleled kitchen and bathroom transformations — where your dreams take center stage! With 20+ years of trusted expertise, our commitment to excellence is etched into every tile, fixture, and detail.</p>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[{ t: "Comprehensive Kitchen Remodeling", d: "Elevate your culinary space with our expert touch. From sleek modern designs to timeless classics." }, { t: "Expert Bathroom Renovations", d: "Immerse yourself in relaxation with our top-notch bathroom transformations and spa-like retreats." }, { t: "Luxury Upgrades", d: "Experience the epitome of elegance with high-end finishes and bespoke designs." }].map((s) => (
              <div key={s.t} className="bg-light p-8 rounded-lg"><h3 className="text-xl font-bold text-navy mb-3">{s.t}</h3><p className="text-gray-600">{s.d}</p></div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-navy mb-6">Specialized Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {[{ n: "Condo Remodeling", h: "/luxury-condo-remodeling-in-miami" }, { n: "Condo Kitchen Renovation", h: "/condo-kitchen-renovation-in-miami" }, { n: "Condo Bathroom Remodeling", h: "/condo-bathroom-remodeling-in-miami" }, { n: "Kitchen Remodeling", h: "/luxury-kitchen-remodeling-miami" }, { n: "Bathroom Remodeling", h: "/luxury-bathroom-remodeling-in-miami" }, { n: "Shower Renovation", h: "/luxury-shower-renovation" }].map((s) => (
              <Link key={s.h} href={s.h} className="bg-navy text-white p-4 rounded-lg hover:bg-navy/90 transition-colors flex items-center justify-between"><span>{s.n}</span><svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden"><Image src="/images/services/luxury-condo-bathroom.webp" alt="Bathroom renovation" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden"><Image src="/images/services/luxury-bathroom-6-1.webp" alt="Luxury bathroom" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden"><Image src="/images/services/after-2.webp" alt="Kitchen after" fill className="object-cover" /></div>
          </div>
          <h2 className="text-2xl font-bold text-navy mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl space-y-3 mb-12">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-light rounded-lg">
                <summary className="px-6 py-4 font-medium text-navy cursor-pointer hover:text-gold transition-colors">{faq.q}</summary>
                <p className="px-6 pb-4 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center"><Link href="/request-a-quote" className="inline-block bg-gold hover:bg-gold/90 text-navy font-bold px-8 py-4 rounded-md transition-colors">Get a Free Quote</Link></div>
        </div>
      </section>
    </>
  );
}

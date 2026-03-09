import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about kitchen remodeling, bathroom renovation, and general contracting services from B & B Concept Designs in Miami.",
};

const faqs = [
  { category: "Kitchen Remodeling", items: [
    { q: "How much does it cost to remodel a kitchen in Miami?", a: "Kitchen remodel costs in Miami typically range from $10,000 to $50,000. Pricing varies based on size, materials, and design complexity." },
    { q: "Is $10,000 enough for a kitchen remodel?", a: "A $10,000 budget may cover a small kitchen remodel with basic updates like new paint, hardware, and budget-friendly appliances." },
    { q: "What is a realistic budget for a kitchen remodel?", a: "A realistic budget typically ranges from $12,000 to $35,000, with high-end remodels exceeding $50,000." },
    { q: "How long does a kitchen remodel take?", a: "A standard kitchen remodel can take 4 to 12 weeks depending on scope, materials, and any structural changes." },
    { q: "What does a kitchen remodeling package include?", a: "Consultation, design, demolition, installation of fixtures and appliances, flooring, cabinetry, countertops, plumbing, electrical, and finishing." },
  ]},
  { category: "Bathroom Remodeling", items: [
    { q: "What sets your bathroom remodeling apart?", a: "Our commitment to excellence, attention to detail, and dedication to customer satisfaction set us apart from the competition." },
    { q: "Do you handle plumbing and electrical?", a: "Yes, our comprehensive remodeling services encompass all aspects including plumbing and electrical work." },
    { q: "What materials do you use?", a: "High-quality materials suited to Miami's climate including moisture-resistant tiles, durable fixtures, and premium finishes." },
    { q: "How long does a bathroom remodel take?", a: "A typical bathroom remodel takes 4 to 6 weeks. A simple cosmetic update may take 1-2 weeks, while a full gut renovation can extend to 8-12 weeks." },
  ]},
  { category: "General", items: [
    { q: "Are permits required?", a: "Yes, in most cases permits are required for remodeling projects in Miami. Our team assists with the entire permit process." },
    { q: "Do you offer eco-friendly options?", a: "Yes, we offer a variety of eco-friendly materials and energy-efficient options for all our remodeling projects." },
    { q: "Can you help with design?", a: "Absolutely! Our experienced designers work closely with you to conceptualize and create designs that meet your needs and vision." },
    { q: "How do you handle unforeseen issues?", a: "We maintain open communication throughout the project and address any unforeseen issues or changes promptly and transparently." },
    { q: "Are you licensed?", a: "Yes, B & B Concept Designs is a fully licensed General Contractor in Florida — CGC#1530584." },
  ]},
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300">Find answers to common questions about our services</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((section) => (
            <div key={section.category} className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-6">{section.category}</h2>
              <div className="space-y-3">
                {section.items.map((faq) => (
                  <details key={faq.q} className="bg-light rounded-lg">
                    <summary className="px-6 py-4 font-medium text-navy cursor-pointer hover:text-gold transition-colors">{faq.q}</summary>
                    <p className="px-6 pb-4 text-gray-600">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Have a question not listed here?</p>
            <Link href="/contact-us" className="inline-block bg-gold hover:bg-gold/90 text-navy font-bold px-8 py-4 rounded-md transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

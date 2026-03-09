import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "B & B Concept Designs is a long-running family business providing quality general contracting, painting, waterproofing, and renovation services in South Florida for over 20 years.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About B &amp; B Concept Designs</h1>
          <p className="text-xl text-gray-300 max-w-3xl">A long-running family business owned and operated for over 20 years, providing our clients with quality service and work.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">B &amp; B Concept Designs is founded on industry expertise, with leadership that brings innovation from property management and construction sectors. We develop service offerings targeting condominium boards, property managers, and commercial property owners.</p>
              <p className="text-gray-600 mb-4">We understand the daily responsibilities property managers and owners are already tasked with even before taking on a large interior or exterior project.</p>
              <p className="text-gray-600">Our company emphasizes streamlined operations for construction projects, handling documentation, communication, safety protocols, and work quality management.</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Values</h2>
              <div className="space-y-6">
                <div className="bg-light p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gold mb-2">Setting the standard for quality work</h3>
                  <p className="text-gray-600">We focus on the complete client experience, not just final outcomes. Every project receives our full attention to detail.</p>
                </div>
                <div className="bg-light p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gold mb-2">When our clients speak, we listen</h3>
                  <p className="text-gray-600">Client communication is our top priority. We believe in understanding your needs before we begin any work.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">What We Provide</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {["Direct supervision at job sites", "Real-time crew communication technology", "Daily and weekly progress reports", "Before/during/after project photography", "Pre-existing area surveys for liability protection"].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg text-center shadow-sm">
                <p className="text-gray-700 font-medium text-sm">{item}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/request-a-quote" className="inline-block bg-gold hover:bg-gold/90 text-navy font-bold px-8 py-4 rounded-md text-lg transition-colors">Get a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}

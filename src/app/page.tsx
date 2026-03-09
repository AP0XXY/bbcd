import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Painting Contractor - Miami Beach's Premier General Contractor",
  description:
    "Transform your commercial space with B&B Concept Designs, General Contractor and commercial painting contractor in Miami Beach. Over 45 years of experience in painting, waterproofing, restoration, and interior design.",
};

const projects = [
  { title: "Mint Condo Lobby", slug: "mint-condo-lobby", image: "/images/projects/mint-condo-lobby.png", category: "Painting, Waterproofing & Restoration" },
  { title: "Condo Work Force", slug: "condo-work-force", image: "/images/projects/condo-work-force.png", category: "Interior Design & Renovation" },
  { title: "Mar Del Plata Lobby Renovation", slug: "mar-del-plata-lobby-renovation", image: "/images/projects/mar-del-plata.png", category: "Painting, Waterproofing & Restoration" },
  { title: "Residential Condo Remodel", slug: "residential-condo-remodel", image: "/images/projects/residential-condo-remodel.png", category: "Interior Design & Renovation" },
  { title: "Club Atlantis Reception", slug: "club-atlantis-reception", image: "/images/projects/club-atlantis.png", category: "Interior Design & Renovation" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#1a2332] min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/95 to-[#1a2332]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Painting, Waterproofing &amp; Restoration
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              B &amp; B and its Commercial Painting Contractor Services have over 45 years of
              experience and we paint with the same dedication as day one. We proudly stand by
              premier waterproofing and renovation services — our paint and craftsmanship are the
              best in town because we use the most advanced techniques and best materials available
              for durable excellence you&apos;d expect from the best warranty in South Florida.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/request-a-quote"
                className="bg-[#c9a84c] hover:bg-[#c9a84c]/90 text-[#1a2332] font-bold px-8 py-4 rounded-md text-lg transition-colors"
              >
                Get a Quote
              </Link>
              <Link
                href="/the-work"
                className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-md text-lg transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] text-center mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            From painting and waterproofing to full interior renovations, we provide
            comprehensive solutions for your property.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/painting-waterproofing-restoration" className="group">
              <div className="bg-[#f5f1eb] rounded-lg p-8 h-full hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#c9a84c]/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a2332] mb-3 group-hover:text-[#c9a84c] transition-colors">
                  Painting, Waterproofing &amp; Restoration
                </h3>
                <p className="text-gray-600">
                  Expert exterior and interior painting, waterproofing, concrete restoration,
                  and stucco repairs with the most advanced techniques in South Florida.
                </p>
              </div>
            </Link>

            <Link href="/interior-design-renovation" className="group">
              <div className="bg-[#f5f1eb] rounded-lg p-8 h-full hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#c9a84c]/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a2332] mb-3 group-hover:text-[#c9a84c] transition-colors">
                  Interior Design &amp; Renovation
                </h3>
                <p className="text-gray-600">
                  Custom design solutions to update interiors — from condo lobbies and hallways
                  to full residential renovations with seamless project management.
                </p>
              </div>
            </Link>

            <Link href="/maintenance-work-orders" className="group">
              <div className="bg-[#f5f1eb] rounded-lg p-8 h-full hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#c9a84c]/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a2332] mb-3 group-hover:text-[#c9a84c] transition-colors">
                  Maintenance Work Orders
                </h3>
                <p className="text-gray-600">
                  Professional maintenance services including pressure cleaning, leak detection,
                  fire stopping, electrostatic painting, and more — done right the first time.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About / General Contractor Section */}
      <section className="py-20 bg-[#1a2332]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                State Licensed General Contractor
              </h2>
              <p className="text-gray-300 mb-6">
                Get to know the difference for yourself — high-quality work and excellent customer
                service. Our reputation is built on our commitment to hard work, accountability,
                and delivering on our promises. Our customers often refer us to others because of
                our exceptional day-to-day project management.
              </p>
              <p className="text-gray-300 mb-6">
                Our business was built on the simple idea to service communities — to see how we
                can add design and general contracting to beautify communities and buildings across
                the city.
              </p>
              <p className="text-gray-300 mb-8">
                We noticed a lot of HOA, high-rise and low-rise buildings were suffering from
                disrepair and neglect. We sought out to service that need across the greater
                South Florida so that doesn&apos;t happen in buildings where it shouldn&apos;t happen before
                it&apos;s too late and maintenance bills and renovation costs are through the roof.
              </p>
              <Link
                href="/about"
                className="text-[#c9a84c] font-semibold hover:text-[#c9a84c]/80 transition-colors inline-flex items-center gap-2"
              >
                Learn More About Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-[#c9a84c]/10 rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#c9a84c] mb-2">45+ Years Experience</h3>
                  <p className="text-gray-300">Decades of proven expertise in commercial and residential projects.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#c9a84c] mb-2">Licensed &amp; Bonded</h3>
                  <p className="text-gray-300">CGC#1530584 — Fully licensed General Contractor in the State of Florida.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#c9a84c] mb-2">South Florida Specialists</h3>
                  <p className="text-gray-300">Deep understanding of the unique demands of South Florida&apos;s climate and construction needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer-Centric Section */}
      <section className="py-20 bg-[#f5f1eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
              Customer-Centric Approach
            </h2>
            <p className="text-gray-600 mb-6">
              Every business has a different set of needs depending on location, building type,
              and whether it&apos;s a condominium, high-rise, low-rise HOA, hotel or other commercial
              building. B &amp; B understands the importance of the details. We can accommodate your
              painting, maintenance, renovation and construction needs into a single package.
            </p>
            <p className="text-gray-600 mb-8">
              At B &amp; B we believe it&apos;s not just about the end result, it&apos;s about the experience.
              Our goal is to minimize any disruptions to daily activity. Our crews are trained to
              pay attention to the smallest of details and are regularly commended for their
              professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Exceeding Expectations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
              Exceeding Expectations
            </h2>
            <p className="text-gray-600 mb-6">
              Simply doing what is expected is not enough. At B &amp; B, we make it a point to go
              above and beyond during all phases of a project. From daily communication with
              management and documentation to safety training, project scheduling, and application
              testing — it&apos;s attention to detail that makes a project truly successful.
            </p>
            <p className="text-gray-600 mb-8">
              Working closely with the best professionals in the industry, we have been asked
              time and time again by several of our clients over the years for new quotes and
              recommendations as new developments occur. At B &amp; B Concept Designs we understand
              that constant research and training keep us always up-to-date on the latest products
              and procedures so we can provide our clients with the highest caliber of service.
            </p>
            <Link
              href="/request-a-quote"
              className="inline-block bg-[#c9a84c] hover:bg-[#c9a84c]/90 text-[#1a2332] font-bold px-8 py-4 rounded-md text-lg transition-colors"
            >
              Get a Quote — Click Here
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-[#1a2332]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Our Work
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
            Browse our portfolio of completed projects across South Florida.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.slug} href={`/work/${project.slug}`} className="group">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-[#c9a84c] text-sm font-medium">{project.category}</span>
                    <h3 className="text-white text-xl font-bold mt-1">{project.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/the-work"
              className="border-2 border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#1a2332] font-bold px-8 py-4 rounded-md text-lg transition-colors inline-block"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import HeroSlideshow from "@/components/HeroSlideshow";

export const metadata: Metadata = {
  title: "Commercial Painting Contractor - Miami Beach's Premier General Contractor",
  description:
    "Transform your commercial space with B&B Concept Designs, General Contractor and commercial painting contractor in Miami Beach. Over 45 years of experience in painting, waterproofing, restoration, and interior design.",
};

const projects = [
  { title: "Mint Condo Lobby", slug: "mint-condo-lobby", image: "/images/projects/mint-condo-lobby.webp", category: "Painting, Waterproofing & Restoration" },
  { title: "Mar Del Plata Lobby Renovation", slug: "mar-del-plata-lobby-renovation", image: "/images/projects/mar-del-plata.png", category: "Painting, Waterproofing & Restoration" },
  { title: "Harbour House", slug: "harbour-house", image: "/images/projects/harbour-house.webp", category: "Painting, Waterproofing & Restoration" },
  { title: "Coronado at Highland Beach", slug: "coronado-highland-beach", image: "/images/projects/coronado.webp", category: "Painting, Waterproofing & Restoration" },
  { title: "One Plantation", slug: "one-plantation", image: "/images/projects/one-plantation.webp", category: "Painting, Waterproofing & Restoration" },
  { title: "Sea Air Tower", slug: "sea-air-tower", image: "/images/projects/sea-air-tower.webp", category: "Painting, Waterproofing & Restoration" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Slideshow */}
      <HeroSlideshow />

      {/* Services Section — 3 columns on dark background */}
      <section className="py-16 bg-[#2a2a2a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-xl font-bold mb-4">Painting, Waterproofing &amp; Restoration</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                B &amp; B and its Commercial Painting Contractor Services have over 45 years of
                experience and we paint with the same dedication as day one. We proudly stand by
                premier waterproofing and renovation services — our paint and craftsmanship are the
                best in town because we use the most advanced techniques and best materials available
                for durable excellence you&apos;d expect from the best warranty in South Florida.
              </p>
              <Link href="/painting-waterproofing-restoration" className="inline-block border border-white text-white text-sm font-semibold px-6 py-2 hover:bg-white hover:text-[#2a2a2a] transition-colors">
                SEE MORE
              </Link>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Interior Design &amp; Renovation</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Design solutions to update interiors can bring a new atmosphere when you
                need it most. Our experienced Interior Design team,
                B &amp; B uses custom finishes,
                fixture replacements, to give painting needs, we
                put you first and provide timely,
                budget-friendly solutions that are
                beautiful, control to your and your
                community.
              </p>
              <Link href="/interior-design-renovation" className="inline-block border border-white text-white text-sm font-semibold px-6 py-2 hover:bg-white hover:text-[#2a2a2a] transition-colors">
                SEE MORE
              </Link>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">State Licensed General Contractor</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Get to know the difference for yourself —
                high quality work and excellent customer
                service. Our reputation is built
                on our commitment to hard work,
                accountability, and delivering on our
                promises. Our customers often refer us
                to others because of our exceptional
                day to day project management.
              </p>
              <Link href="/about" className="inline-block border border-white text-white text-sm font-semibold px-6 py-2 hover:bg-white hover:text-[#2a2a2a] transition-colors">
                SEE MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* State Licensed General Contractor — white background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-[#2a2a2a] mb-2">
                State Licensed General Contractor
              </h2>
              <p className="text-lg text-gray-500 mb-6">Fully bonded &amp; insured.</p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our business was built on the simple idea to service communities — to see how we
                can add design and general contracting to beautify communities and buildings across
                the city.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We noticed a lot of HOA, high-rise and low-rise buildings were suffering from
                disrepair and neglect. We sought out to service that need across the greater
                South Florida so that doesn&apos;t happen in buildings where it shouldn&apos;t happen before
                it&apos;s too late and maintenance bills and renovation costs are through the roof.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We built it on a service that services the greater South Florida so that doesn&apos;t
                happen. By maintaining the need for experienced help, so our customer&apos;s integrity by keeping it clean
                and well up to date is always our purpose and will continue to be for as long as
                we&apos;re in business.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link href="/request-a-quote" className="inline-block bg-[#e74c3c] hover:bg-[#c0392b] text-white font-bold px-8 py-4 rounded text-lg transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Centric Approach — green overlay section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero/customer_first-1.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-green-700/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Customer Centric Approach</h2>
          <div className="max-w-4xl">
            <p className="text-white/90 mb-4 leading-relaxed">
              Every business has a different set of needs depending on location, building type,
              and whether it&apos;s a condominium, high-rise, low-rise HOA, hotel or other commercial
              building. B &amp; B understands the importance of the details. We can accommodate your
              painting, maintenance, renovation and construction needs into a single package.
            </p>
            <p className="text-white/90 leading-relaxed">
              At B &amp; B we believe it&apos;s not just about the end result, it&apos;s about the experience.
              Our goal is to minimize any disruptions to daily activity. Our crews are trained to
              pay attention to the smallest of details and are regularly commended for their
              professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Exceeding Expectations — green overlay section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero/exceeding_expectations-1.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-green-700/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Exceeding Expectations</h2>
          <div className="max-w-4xl">
            <p className="text-white/90 mb-4 leading-relaxed">
              Simply doing what is expected is not enough. At B &amp; B, we make it a point to go
              above and beyond during all phases of a project. From daily communication with
              management and documentation to safety training, project scheduling, and application
              testing — it&apos;s attention to detail that makes a project truly successful.
            </p>
            <p className="text-white/90 mb-6 leading-relaxed">
              Working closely with the best professionals in the industry, we have been asked
              time and time again by several of our clients over the years for new quotes and
              recommendations as new developments occur. At B &amp; B Concept Designs we understand
              that constant research and training keep us always up-to-date on the latest products
              and procedures so we can provide our clients with the highest caliber of service.
            </p>
            <Link
              href="/request-a-quote"
              className="inline-block bg-[#e74c3c] hover:bg-[#c0392b] text-white font-bold px-8 py-4 rounded text-lg transition-colors"
            >
              Get a Quote — Click Here
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Our Work
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Browse our portfolio of completed projects across South Florida.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.slug} href={`/work/${project.slug}`} className="group">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-green-400 text-sm font-medium">{project.category}</span>
                    <h3 className="text-white text-xl font-bold mt-1">{project.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/the-work"
              className="inline-block border border-white text-white hover:bg-white hover:text-[#2a2a2a] font-bold px-8 py-3 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

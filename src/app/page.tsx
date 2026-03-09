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
  { title: "Mint Condo Lobby", slug: "mint-condo-lobby", image: "/images/projects/mint-condo-lobby.png", category: "Painting, Waterproofing & Restoration" },
  { title: "Condo Work Force", slug: "condo-work-force", image: "/images/projects/condo-work-force.png", category: "Interior Design & Renovation" },
  { title: "Mar Del Plata Lobby Renovation", slug: "mar-del-plata-lobby-renovation", image: "/images/projects/mar-del-plata.png", category: "Painting, Waterproofing & Restoration" },
  { title: "Residential Condo Remodel", slug: "residential-condo-remodel", image: "/images/projects/residential-condo-remodel.png", category: "Interior Design & Renovation" },
  { title: "Club Atlantis Reception", slug: "club-atlantis-reception", image: "/images/projects/club-atlantis.png", category: "Interior Design & Renovation" },
];

const services = [
  {
    title: "Painting, Waterproofing & Restoration",
    href: "/painting-waterproofing-restoration",
    image: "/images/services/footer-painting.png",
    desc: "Expert exterior and interior painting, waterproofing, concrete restoration, and stucco repairs with the most advanced techniques in South Florida.",
  },
  {
    title: "Interior Design & Renovation",
    href: "/interior-design-renovation",
    image: "/images/services/luxury-condo-miami.webp",
    desc: "Custom design solutions to update interiors — from condo lobbies and hallways to full residential renovations with seamless project management.",
  },
  {
    title: "Maintenance Work Orders",
    href: "/maintenance-work-orders",
    image: "/images/services/maintenance-1.webp",
    desc: "Professional maintenance services including pressure cleaning, leak detection, fire stopping, electrostatic painting, and more — done right the first time.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            From painting and waterproofing to full interior renovations, we provide
            comprehensive solutions for your property.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="group">
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 bg-light">
                    <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About / General Contractor Section */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
                State Licensed General Contractor
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Get to know the difference for yourself — high-quality work and excellent customer
                service. Our reputation is built on our commitment to hard work, accountability,
                and delivering on our promises. Our customers often refer us to others because of
                our exceptional day-to-day project management.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our business was built on the simple idea to service communities — to see how we
                can add design and general contracting to beautify communities and buildings across
                the city.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We noticed a lot of HOA, high-rise and low-rise buildings were suffering from
                disrepair and neglect. We sought out to service that need across the greater
                South Florida so that doesn&apos;t happen in buildings where it shouldn&apos;t happen before
                it&apos;s too late and maintenance bills and renovation costs are through the roof.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-navy font-bold px-6 py-3 rounded-md transition-colors"
              >
                Learn More About Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gold mb-3">45+ Years Experience</h3>
                <p className="text-gray-300 leading-relaxed">Decades of proven expertise in commercial and residential projects.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gold mb-3">Licensed &amp; Bonded</h3>
                <p className="text-gray-300 leading-relaxed">CGC#1530584 — Fully licensed General Contractor in the State of Florida.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gold mb-3">South Florida Specialists</h3>
                <p className="text-gray-300 leading-relaxed">Deep understanding of the unique demands of South Florida&apos;s climate and construction needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer-Centric Section */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-6">
              Customer-Centric Approach
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Every business has a different set of needs depending on location, building type,
              and whether it&apos;s a condominium, high-rise, low-rise HOA, hotel or other commercial
              building. B &amp; B understands the importance of the details. We can accommodate your
              painting, maintenance, renovation and construction needs into a single package.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              At B &amp; B we believe it&apos;s not just about the end result, it&apos;s about the experience.
              Our goal is to minimize any disruptions to daily activity. Our crews are trained to
              pay attention to the smallest of details and are regularly commended for their
              professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Exceeding Expectations */}
      <section className="relative py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/hero/hero-1.webp" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Our Promise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
              Exceeding Expectations
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Simply doing what is expected is not enough. At B &amp; B, we make it a point to go
              above and beyond during all phases of a project. From daily communication with
              management and documentation to safety training, project scheduling, and application
              testing — it&apos;s attention to detail that makes a project truly successful.
            </p>
            <p className="text-gray-300 mb-10 leading-relaxed text-lg">
              Working closely with the best professionals in the industry, we have been asked
              time and time again by several of our clients over the years for new quotes and
              recommendations as new developments occur. At B &amp; B Concept Designs we understand
              that constant research and training keep us always up-to-date on the latest products
              and procedures so we can provide our clients with the highest caliber of service.
            </p>
            <Link
              href="/request-a-quote"
              className="inline-block bg-gold hover:bg-gold/90 text-navy font-bold px-10 py-4 rounded-md text-lg transition-colors shadow-lg"
            >
              Get a Quote — Click Here
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
              Our Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our portfolio of completed projects across South Florida.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.slug} href={`/work/${project.slug}`} className="group">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-gold text-sm font-medium">{project.category}</span>
                    <h3 className="text-white text-xl font-bold mt-1">{project.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/the-work"
              className="inline-block border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-8 py-4 rounded-md text-lg transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Projects Overview | B&B Concept Design",
  description: "Here you can see all previous projects overview - B&B Concept Design. Browse our portfolio of completed commercial and residential projects across South Florida.",
};

const projects = [
  { title: "Mint Condo Lobby", slug: "mint-condo-lobby", image: "/images/projects/mint-condo-lobby.png", category: "Painting, Waterproofing & Restoration" },
  { title: "Condo Work Force", slug: "condo-work-force", image: "/images/projects/condo-work-force.png", category: "Interior Design & Renovation" },
  { title: "Mar Del Plata Lobby Renovation", slug: "mar-del-plata-lobby-renovation", image: "/images/projects/mar-del-plata.png", category: "Painting, Waterproofing & Restoration" },
  { title: "Residential Condo Remodel", slug: "residential-condo-remodel", image: "/images/projects/residential-condo-remodel.png", category: "Interior Design & Renovation" },
  { title: "Club Atlantis Reception", slug: "club-atlantis-reception", image: "/images/projects/club-atlantis.png", category: "Interior Design & Renovation" },
];

export default function TheWorkPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">THE WORK</h1>
          <p className="text-xl text-gray-300">Browse our portfolio of completed projects across South Florida</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.slug} href={`/work/${project.slug}`} className="group">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-gold text-sm font-medium">{project.category}</span>
                    <h2 className="text-white text-xl font-bold mt-1">{project.title}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/request-a-quote" className="inline-block bg-gold hover:bg-gold/90 text-navy font-bold px-8 py-4 rounded-md transition-colors">Start Your Project</Link>
          </div>
        </div>
      </section>
    </>
  );
}

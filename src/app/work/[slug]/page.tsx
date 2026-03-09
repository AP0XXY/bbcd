import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const projects: Record<string, { title: string; category: string; image: string; description: string[] }> = {
  "club-atlantis-reception": { title: "Club Atlantis Reception", category: "Interior Design & Renovation", image: "/images/projects/club-atlantis.png", description: ["The Club Atlantis Reception project involved a complete transformation of the building's reception and common areas. Our team redesigned the space to create a welcoming, modern atmosphere that reflects the building's coastal Miami aesthetic.", "We installed custom millwork, updated lighting fixtures, and applied premium finishes throughout. The project included new flooring, wall treatments, and carefully curated furniture selections that elevate the entire building's first impression.", "Working closely with the condo association, we managed the project to minimize disruption to residents while delivering a stunning result that has been praised by both management and homeowners alike."] },
  "condo-work-force": { title: "Condo Work Force", category: "Interior Design & Renovation", image: "/images/projects/condo-work-force.png", description: ["The Condo Work Force project showcased our ability to handle large-scale interior renovation work across multiple units and common areas simultaneously. This project required meticulous planning and coordination to ensure quality delivery on a tight timeline.", "Our team managed all aspects including demolition, construction, finishing, and final inspections. We coordinated with building management to schedule work around resident activities and building operations.", "The result was a complete modernization of the property's interior spaces, bringing them up to current design standards while enhancing functionality and value for all unit owners."] },
  "mar-del-plata-lobby-renovation": { title: "Mar Del Plata Lobby Renovation", category: "Painting, Waterproofing & Restoration", image: "/images/projects/mar-del-plata.png", description: ["The Mar Del Plata Lobby Renovation was a comprehensive project that transformed the building's main lobby and entrance areas. Our team handled everything from surface preparation and painting to decorative finishes and waterproofing treatments.", "Special attention was paid to moisture protection given the building's proximity to the coast. We applied advanced waterproofing systems and selected paint products specifically formulated for South Florida's challenging climate conditions.", "The completed project features a fresh, contemporary color palette that brightens the space while protective coatings ensure lasting beauty against humidity, salt air, and UV exposure."] },
  "mint-condo-lobby": { title: "Mint Condo Lobby", category: "Painting, Waterproofing & Restoration", image: "/images/projects/mint-condo-lobby.png", description: ["The Mint Condo Lobby project was a painting and waterproofing renovation that brought new life to this popular Miami condominium. Our team completely refreshed the lobby's aesthetic with a modern color scheme and premium paint products.", "We addressed existing water damage and applied comprehensive waterproofing treatments to prevent future issues. The project included surface preparation, priming, and multiple coats of high-quality paint designed for high-traffic commercial environments.", "The result is a clean, inviting lobby space that makes a strong first impression for residents and visitors. The building management has reported positive feedback from the community and increased interest from prospective buyers."] },
  "residential-condo-remodel": { title: "Residential Condo Remodel", category: "Interior Design & Renovation", image: "/images/projects/residential-condo-remodel.png", description: ["This Residential Condo Remodel was a full interior renovation of a private unit in a Miami high-rise. The project included kitchen and bathroom renovations, new flooring throughout, updated lighting, and fresh paint in a contemporary color palette.", "Our design team worked directly with the homeowner to create a cohesive look that maximized the unit's natural light and ocean views. We selected materials and finishes that complement the coastal setting while providing durability for everyday living.", "The project was completed on schedule and within budget, transforming the dated unit into a modern, stylish home. The homeowner was thrilled with the transformation and the seamless project management experience."] },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return { title: "Project Not Found" };
  return { title: `${project.title} | Our Work`, description: project.description[0] };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();

  return (
    <>
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gold">Home</Link> / <Link href="/the-work" className="hover:text-gold">Our Work</Link> / <span className="text-gray-300">{project.title}</span>
          </nav>
          <span className="text-gold font-medium">{project.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">{project.title}</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-12">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </div>
          <div className="max-w-3xl">
            {project.description.map((p, i) => (
              <p key={i} className="text-gray-600 mb-6 leading-relaxed text-lg">{p}</p>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-12">
            <Link href="/the-work" className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-6 py-3 rounded-md transition-colors">View All Projects</Link>
            <Link href="/request-a-quote" className="bg-gold hover:bg-gold/90 text-navy font-bold px-6 py-3 rounded-md transition-colors">Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}

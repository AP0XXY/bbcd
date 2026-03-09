import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const projects: Record<string, { title: string; category: string; image: string; description: string[] }> = {
  "mint-condo-lobby": { title: "Mint Condo Lobby", category: "Painting, Waterproofing & Restoration", image: "/images/projects/mint-condo-lobby.webp", description: ["The Mint Condo Lobby project was a painting and waterproofing renovation that brought new life to this popular Miami condominium. Our team completely refreshed the lobby's aesthetic with a modern color scheme and premium paint products.", "We addressed existing water damage and applied comprehensive waterproofing treatments to prevent future issues. The project included surface preparation, priming, and multiple coats of high-quality paint designed for high-traffic commercial environments.", "The result is a clean, inviting lobby space that makes a strong first impression for residents and visitors. The building management has reported positive feedback from the community and increased interest from prospective buyers."] },
  "mar-del-plata-lobby-renovation": { title: "Mar Del Plata Lobby Renovation", category: "Painting, Waterproofing & Restoration", image: "/images/projects/mar-del-plata.png", description: ["The Mar Del Plata Lobby Renovation was a comprehensive project that transformed the building's main lobby and entrance areas. Our team handled everything from surface preparation and painting to decorative finishes and waterproofing treatments.", "Special attention was paid to moisture protection given the building's proximity to the coast. We applied advanced waterproofing systems and selected paint products specifically formulated for South Florida's challenging climate conditions.", "The completed project features a fresh, contemporary color palette that brightens the space while protective coatings ensure lasting beauty against humidity, salt air, and UV exposure."] },
  "harbour-house": { title: "Harbour House", category: "Painting, Waterproofing & Restoration", image: "/images/projects/harbour-house.webp", description: ["The Harbour House project involved comprehensive exterior painting and waterproofing for this oceanfront condominium. Our team applied advanced coating systems to protect against South Florida's harsh salt air and UV exposure.", "We coordinated closely with building management and residents to execute the work with minimal disruption. The project included thorough surface preparation, crack repair, and application of premium elastomeric coatings for long-lasting protection.", "The completed project restored the building's curb appeal while providing superior moisture protection backed by our industry-leading warranty."] },
  "coronado-highland-beach": { title: "Coronado at Highland Beach", category: "Painting, Waterproofing & Restoration", image: "/images/projects/coronado.webp", description: ["The Coronado at Highland Beach project was a full exterior restoration and painting of this prestigious coastal property. Our team addressed weathering and moisture damage while delivering a fresh, modern color palette.", "We applied state-of-the-art waterproofing systems designed for coastal environments, ensuring the building's envelope is protected against humidity, wind-driven rain, and salt corrosion.", "The result was a beautifully refreshed building exterior that enhanced property values and earned praise from the homeowners association and residents alike."] },
  "one-plantation": { title: "One Plantation", category: "Painting, Waterproofing & Restoration", image: "/images/projects/one-plantation.webp", description: ["One Plantation was a large-scale exterior painting and restoration project. Our team managed every aspect of the project from scaffolding setup and surface preparation to final coating application.", "We worked with the building's management to select colors and materials that would complement the property's architecture while providing maximum durability in South Florida's climate.", "The project was delivered on time and within budget, demonstrating our ability to handle major commercial painting projects with professionalism and attention to detail."] },
  "sea-air-tower": { title: "Sea Air Tower", category: "Painting, Waterproofing & Restoration", image: "/images/projects/sea-air-tower.webp", description: ["The Sea Air Tower project was a comprehensive painting and waterproofing renovation for this high-rise condominium. Our team executed the work while maintaining full building operations and resident access.", "Special waterproofing treatments were applied to all exterior surfaces to combat the building's direct exposure to ocean conditions. We used only premium products rated for coastal high-rise applications.", "The completed project transformed the building's appearance and provided lasting protection against the elements, backed by our comprehensive warranty program."] },
  "parc-at-turnberry": { title: "Parc at Turnberry", category: "Painting, Waterproofing & Restoration", image: "/images/projects/parc-turnberry.webp", description: ["The Parc at Turnberry project involved exterior painting and waterproofing services for this luxury residential community. Our experienced crews delivered premium results across the property's multiple buildings.", "We selected high-performance coatings specifically formulated for South Florida's climate demands, ensuring long-lasting beauty and protection for the community.", "The project was managed with our hallmark attention to detail, daily communication with property management, and commitment to exceeding expectations at every phase."] },
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

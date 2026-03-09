import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Luxury Condo Kitchen Renovation in Miami",
  description: "Elevate Your Condo Living Experience with B & B Concept Designs - Premier Condo Kitchen Renovation in Miami.",
};

export default function CondoKitchenPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-medium mb-2">Your Go-To Remodeling Solution Provider in Miami</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Premier Condo Kitchen Renovation in Miami</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 max-w-3xl mb-12">Transform your Miami condo kitchen into a luxurious and stylish space that blends functionality and aesthetics. Our team delivers customized kitchen design reflecting your individual personality with high-quality, durable materials and skilled craftsmanship from concept to completion.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden"><Image src="/images/services/condo-kitchen-mar-azul.webp" alt="Condo kitchen Mar Azul" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden"><Image src="/images/services/condo-kitchen.webp" alt="Condo kitchen renovation" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden"><Image src="/images/services/condo-kitchen-bb.webp" alt="B&B kitchen design" fill className="object-cover" /></div>
          </div>
          <h2 className="text-2xl font-bold text-navy mb-8">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[{ quote: "They brought my dream kitchen to life! Every detail was perfect and the craftsmanship exceeded all my expectations.", author: "Overjoyed Homeowner" }, { quote: "Working with B&B felt like having friends redesign my kitchen. Personal, professional, and absolutely stunning results.", author: "Ecstatic Client" }, { quote: "The work was completed within budget without cutting corners. I couldn't be more pleased with the quality.", author: "Relieved Customer" }].map((t) => (
              <blockquote key={t.author} className="bg-light p-6 rounded-lg"><p className="text-gray-600 italic mb-4">&ldquo;{t.quote}&rdquo;</p><p className="text-navy font-bold text-sm">— {t.author}</p></blockquote>
            ))}
          </div>
          <div className="text-center"><Link href="/request-a-quote" className="inline-block bg-gold hover:bg-gold/90 text-navy font-bold px-8 py-4 rounded-md transition-colors">Transform Your Kitchen</Link></div>
        </div>
      </section>
    </>
  );
}

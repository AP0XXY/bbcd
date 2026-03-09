import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Expert tips and guides on kitchen remodeling, bathroom renovation, and home improvement in Miami from B & B Concept Designs.",
};

const posts = [
  { slug: "how-do-you-modernize-an-old-shower", title: "How Do You Modernize an Old Shower? Top 7 Useful Tips", date: "March 15, 2024", excerpt: "Upgrade fixtures, tiles, and consider adding a frameless glass door. Implement water-efficient showerheads for sustainability." },
  { slug: "how-long-does-it-take-to-remodel-a-bathroom", title: "How Long Does It Take to Remodel a Bathroom: Experts Guide", date: "March 12, 2024", excerpt: "A typical bathroom remodel takes 4 to 6 weeks. Factors like bathroom size and project complexity can extend this timeline." },
  { slug: "how-long-does-it-take-to-remodel-a-shower", title: "How Long Does It Take to Remodel a Shower?", date: "March 9, 2024", excerpt: "A shower remodel can typically take anywhere from a few days to three weeks depending on complexity and scope." },
  { slug: "what-is-the-most-expensive-part-of-a-kitchen", title: "What is the Most Expensive Part of a Kitchen?", date: "March 8, 2024", excerpt: "The most expensive part is typically the cabinetry and countertops, requiring customization and high-quality materials." },
  { slug: "how-much-should-a-12x12-kitchen-remodel-cost", title: "How Much Should a 12X12 Kitchen Remodel Cost", date: "March 3, 2024", excerpt: "A 12x12 kitchen remodel typically costs between $12,000 and $33,000 depending on materials and labor." },
  { slug: "how-much-does-it-cost-to-remodel-a-kitchen-in-florida", title: "How Much Does It Cost to Remodel a Kitchen in Florida", date: "March 3, 2024", excerpt: "The cost ranges from $5,000 to $60,000. Factors like size and material choices greatly influence the final price." },
  { slug: "what-are-luxury-materials-for-bathrooms", title: "What are Luxury Materials for Bathrooms", date: "March 3, 2024", excerpt: "Luxury materials include marble, quartz, gold, and crystal with timeless appeal and elegance." },
  { slug: "why-is-bathroom-luxury-important", title: "Why is Bathroom Luxury Important?", date: "March 3, 2024", excerpt: "Bathroom luxury enhances personal comfort and increases home value while reflecting personal style." },
  { slug: "how-to-create-a-luxury-bathroom", title: "How to Create a Luxury Bathroom? Unlock Elegance!", date: "March 3, 2024", excerpt: "Focus on high-quality materials, sophisticated fixtures, and spa-like features for comfort and elegance." },
  { slug: "what-is-the-hardest-part-of-the-bathroom-renovation", title: "What is the Hardest Part of Bathroom Renovation?", date: "March 1, 2024", excerpt: "Plumbing and layout changes are often the hardest, requiring professional skills and impacting budget." },
  { slug: "what-adds-the-most-value-to-a-bathroom", title: "What Adds the Most Value to a Bathroom?", date: "March 1, 2024", excerpt: "Updated vanities, modern fixtures, quality tiling, and improved lighting add the most value." },
  { slug: "how-much-does-a-bathroom-remodel-cost-in-miami", title: "How Much Does A Bathroom Remodel Cost In Miami?", date: "February 29, 2024", excerpt: "Miami bathroom remodel costs vary by scope. Learn about average costs and factors that influence your budget." },
  { slug: "what-is-the-most-expensive-part-of-a-bathroom-remodel", title: "What is the Most Expensive Part of a Bathroom Remodel?", date: "February 29, 2024", excerpt: "Plumbing and tile work tend to be the costliest. Understanding these costs helps plan your budget." },
  { slug: "when-remodeling-a-house-what-comes-first", title: "When Remodeling a House What Comes First", date: "February 26, 2024", excerpt: "Key steps from planning to execution for tackling your home renovation project in the right order." },
  { slug: "what-room-is-the-most-expensive-to-renovate", title: "What Room is the Most Expensive to Renovate?", date: "January 30, 2024", excerpt: "Kitchens and bathrooms top the list due to plumbing, electrical, and high-end finishes." },
  { slug: "how-to-budget-wisely-for-your-bathroom-renovation", title: "How to Budget Wisely for Your Bathroom Renovation?", date: "January 30, 2024", excerpt: "Smart budgeting tips to get the most value from your renovation without overspending." },
  { slug: "how-much-does-it-cost-per-square-foot-to-renovate-a-condo", title: "How Much Does It Cost Per Square Foot to Renovate a Condo", date: "January 30, 2024", excerpt: "Uncovering the expenses of condo renovation on a per-square-foot basis." },
  { slug: "should-you-replace-toilet-in-bathroom-renovation", title: "Should You Replace Toilet in Bathroom Renovation?", date: "January 29, 2024", excerpt: "Key factors to consider when deciding whether to replace your toilet during a renovation." },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-xl text-gray-300">Expert renovation tips and guides from B &amp; B Concept Designs</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-light rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h2 className="text-lg font-bold text-navy mb-3">{post.title}</h2>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-gold font-semibold text-sm hover:text-gold/80 transition-colors inline-flex items-center gap-1">
                    Read More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

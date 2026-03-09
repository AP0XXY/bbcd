"use client";

import { useState } from "react";

export default function RequestQuotePage() {
  const [form, setForm] = useState({ projectName: "", street: "", city: "", state: "", zip: "", firstName: "", lastName: "", email: "", phone: "", message: "" });
  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [field]: e.target.value });

  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">REQUEST A QUOTE</h1>
          <p className="text-xl text-gray-300">We appreciate the opportunity to work on your property</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-gray-600 mb-8">Let us offer our expertise as a resource for identifying issues, recommending products, developing a scope of work, and providing education on the project process.</p>
              <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! We will review your request and get back to you shortly."); }} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Project Name</label>
                  <input type="text" value={form.projectName} onChange={update("projectName")} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Project Address</label>
                  <input type="text" placeholder="Street Address" value={form.street} onChange={update("street")} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none mb-3" />
                  <div className="grid grid-cols-3 gap-3">
                    <input type="text" placeholder="City" value={form.city} onChange={update("city")} className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none" />
                    <input type="text" placeholder="State" value={form.state} onChange={update("state")} className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none" />
                    <input type="text" placeholder="Zip Code" value={form.zip} onChange={update("zip")} className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">First Name</label>
                    <input type="text" value={form.firstName} onChange={update("firstName")} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">Last Name</label>
                    <input type="text" value={form.lastName} onChange={update("lastName")} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">Email *</label>
                    <input type="email" value={form.email} onChange={update("email")} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">Phone *</label>
                    <input type="tel" value={form.phone} onChange={update("phone")} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Message *</label>
                  <textarea rows={5} value={form.message} onChange={update("message")} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none" required />
                </div>
                <button type="submit" className="bg-gold hover:bg-gold/90 text-navy font-bold px-8 py-4 rounded-md text-lg transition-colors">Submit Form</button>
              </form>
            </div>
            <div>
              <div className="bg-light p-8 rounded-lg sticky top-28">
                <blockquote className="text-gray-600 italic mb-4">&ldquo;I recently had the pleasure of working with the team at B&amp;B Concept Designs on a multi-phase construction project. From start to finish, they were professional, skilled, and dedicated to completing the project on schedule and within budget.&rdquo;</blockquote>
                <p className="text-navy font-bold">— Marcus Johanssen</p>
                <p className="text-gray-500 text-sm">Property Manager, Rio Mar Condominium Association</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

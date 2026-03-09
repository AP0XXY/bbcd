"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const services = [
  { name: "Painting, Waterproofing & Restoration", href: "/painting-waterproofing-restoration" },
  {
    name: "Interior Design & Renovation",
    href: "/interior-design-renovation",
    children: [
      { name: "Condo Remodeling", href: "/luxury-condo-remodeling-in-miami" },
      { name: "Kitchen & Bathroom Remodeling", href: "/kitchen-and-bathroom-remodeling" },
      { name: "Condo Kitchen Renovation", href: "/condo-kitchen-renovation-in-miami" },
      { name: "Condo Bathroom Remodeling", href: "/condo-bathroom-remodeling-in-miami" },
      { name: "Kitchen Remodeling", href: "/luxury-kitchen-remodeling-miami" },
      { name: "Bathroom Remodeling", href: "/luxury-bathroom-remodeling-in-miami" },
      { name: "Shower Renovation", href: "/luxury-shower-renovation" },
    ],
  },
  { name: "Maintenance Work Orders", href: "/maintenance-work-orders" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [interiorOpen, setInteriorOpen] = useState(false);

  return (
    <nav className="bg-navy sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/images/BB-Logo.png" alt="B & B Concept Designs" width={80} height={60} className="h-14 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/about" className="text-gray-200 hover:text-gold px-3 py-2 text-sm font-medium transition-colors">
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-200 hover:text-gold px-3 py-2 text-sm font-medium transition-colors inline-flex items-center gap-1">
                Our Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-xl py-2">
                  {services.map((service) => (
                    <div key={service.href}>
                      <Link href={service.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-light hover:text-navy font-medium">
                        {service.name}
                      </Link>
                      {service.children && (
                        <div className="pl-4">
                          {service.children.map((child) => (
                            <Link key={child.href} href={child.href} className="block px-4 py-1.5 text-xs text-gray-500 hover:bg-light hover:text-navy">
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/standards" className="text-gray-200 hover:text-gold px-3 py-2 text-sm font-medium transition-colors">
              Standards
            </Link>
            <Link href="/the-work" className="text-gray-200 hover:text-gold px-3 py-2 text-sm font-medium transition-colors">
              Our Work
            </Link>
            <Link href="/category/blog" className="text-gray-200 hover:text-gold px-3 py-2 text-sm font-medium transition-colors">
              Blog
            </Link>
            <Link href="/request-a-quote" className="bg-gold hover:bg-gold/90 text-navy font-bold px-5 py-2.5 rounded-md text-sm transition-colors ml-2">
              Request a Quote
            </Link>
            <a href="tel:3054192231" className="text-gold font-semibold text-sm ml-3 hover:text-gold/80 transition-colors">
              (305)-419-2231
            </a>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-gray-200 p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-gray-700">
          <div className="px-4 py-4 space-y-2">
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-gray-200 hover:text-gold py-2 font-medium">
              About
            </Link>

            <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between w-full text-gray-200 hover:text-gold py-2 font-medium">
              Our Services
              <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1">
                {services.map((service) => (
                  <div key={service.href}>
                    <Link href={service.href} onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-gold py-1.5 text-sm">
                      {service.name}
                    </Link>
                    {service.children && (
                      <>
                        <button onClick={() => setInteriorOpen(!interiorOpen)} className="text-gray-400 text-xs pl-2 py-1">
                          {interiorOpen ? "Hide sub-services" : "Show sub-services"}
                        </button>
                        {interiorOpen && (
                          <div className="pl-4 space-y-1">
                            {service.children.map((child) => (
                              <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)} className="block text-gray-400 hover:text-gold py-1 text-xs">
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}

            <Link href="/standards" onClick={() => setMobileOpen(false)} className="block text-gray-200 hover:text-gold py-2 font-medium">
              Standards
            </Link>
            <Link href="/the-work" onClick={() => setMobileOpen(false)} className="block text-gray-200 hover:text-gold py-2 font-medium">
              Our Work
            </Link>
            <Link href="/category/blog" onClick={() => setMobileOpen(false)} className="block text-gray-200 hover:text-gold py-2 font-medium">
              Blog
            </Link>
            <Link href="/request-a-quote" onClick={() => setMobileOpen(false)} className="block bg-gold text-navy font-bold px-5 py-3 rounded-md text-center mt-4">
              Request a Quote
            </Link>
            <a href="tel:3054192231" className="block text-gold font-semibold text-center py-2">
              (305)-419-2231
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

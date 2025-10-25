'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const footerLinks = {
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    Shop: [
      { name: 'Collections', href: '/collections' },
      { name: 'New Arrivals', href: '#' },
      { name: 'Best Sellers', href: '#' },
      { name: 'Sale', href: '#' },
    ],
    Support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQs', href: '#' },
      { name: 'Shipping', href: '#' },
      { name: 'Returns', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Mail, href: '#' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/">
              <div className="flex items-center space-x-2 mb-4 cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">W</span>
                </div>
                <div className="font-display text-2xl font-bold">
                  Whytee <span className="text-brand-400">Stitches</span>
                </div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Discover timeless elegance and contemporary fashion. Each piece is crafted with precision to make you stand out.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-500 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-lg mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <span className="text-gray-400 hover:text-brand-400 transition-colors cursor-pointer">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Whytee Stitches. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#">
                <span className="text-gray-400 hover:text-brand-400 text-sm transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
              <Link href="#">
                <span className="text-gray-400 hover:text-brand-400 text-sm transition-colors cursor-pointer">
                  Terms of Service
                </span>
              </Link>
              <Link href="#">
                <span className="text-gray-400 hover:text-brand-400 text-sm transition-colors cursor-pointer">
                  Cookie Policy
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

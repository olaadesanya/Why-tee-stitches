'use client'

import { motion } from 'framer-motion'
import { Award, Users, Globe, Heart } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We never compromise on the quality of our materials and craftsmanship.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We listen, adapt, and deliver.',
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Committed to ethical fashion practices and environmental responsibility.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Fashion is our love language. Every piece tells a story.',
    },
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'Michael Chen',
      role: 'Head Designer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Emma Williams',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
    {
      name: 'David Martinez',
      role: 'Brand Strategist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
  ]

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Crafting Stories Through Fashion
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Whytee Stitches, we believe fashion is more than just clothing – it's a form of self-expression, 
              a celebration of individuality, and a testament to quality craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 2020, Whytee Stitches emerged from a simple vision: to create timeless fashion 
                  that empowers individuals to express their unique style while maintaining the highest 
                  standards of quality and sustainability.
                </p>
                <p>
                  What started as a small boutique has grown into a beloved fashion brand, serving thousands 
                  of customers worldwide. Our commitment to excellence, attention to detail, and passion for 
                  fashion remains unwavering.
                </p>
                <p>
                  Every piece in our collection is carefully designed and crafted to not just meet, but exceed 
                  expectations. We source the finest materials, work with skilled artisans, and ensure every 
                  stitch reflects our dedication to quality.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-orange-600 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Whytee Stitches
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-xl mb-1 text-gray-900">
                  {member.name}
                </h3>
                <p className="text-brand-600 font-medium">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

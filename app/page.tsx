'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star, Sparkles, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import FeaturedProducts from '@/components/FeaturedProducts'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-brand-200/30 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-orange-200/30 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            variants={stagger}
            initial="initial"
            animate="animate"
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-brand-600 font-medium text-sm">
                <Sparkles className="w-4 h-4" />
                New Collection 2024
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-900"
            >
              Where Style Meets
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-orange-600">
                Perfection
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Discover timeless elegance and contemporary fashion. Each piece is crafted with precision to make you stand out.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/collections">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-brand-500 to-orange-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
                >
                  Shop Collection
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all border-2 border-gray-200"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 max-w-2xl mx-auto"
            >
              {[
                { number: '10K+', label: 'Happy Customers' },
                { number: '500+', label: 'Premium Products' },
                { number: '4.9', label: 'Average Rating', icon: Star }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="flex items-center justify-center gap-1 text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                    {stat.icon && <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex items-start justify-center p-2">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-gray-400 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Collections Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Featured Collections
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked selection of premium fashion pieces
            </p>
          </motion.div>

          <FeaturedProducts />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Why Choose Whytee Stitches
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Premium Quality',
                description: 'Every piece is crafted with the finest materials and attention to detail'
              },
              {
                icon: TrendingUp,
                title: 'Latest Trends',
                description: 'Stay ahead with our constantly updated collection of contemporary fashion'
              },
              {
                icon: Star,
                title: 'Customer Satisfaction',
                description: 'Join thousands of satisfied customers who trust our brand'
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-orange-600 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  )
}

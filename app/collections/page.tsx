'use client'

import { motion } from 'framer-motion'
import { Filter, SlidersHorizontal } from 'lucide-react'
import { useState } from 'react'
import FeaturedProducts from '@/components/FeaturedProducts'

const collections = [
  { name: 'All', count: 124 },
  { name: 'Formal', count: 42 },
  { name: 'Casual', count: 38 },
  { name: 'Outerwear', count: 24 },
  { name: 'Essentials', count: 20 },
]

export default function CollectionsPage() {
  const [selectedCollection, setSelectedCollection] = useState('All')

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Our Collections
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of premium fashion pieces for every occasion
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {collections.map((collection) => (
                <motion.button
                  key={collection.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCollection(collection.name)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCollection === collection.name
                      ? 'bg-gradient-to-r from-brand-500 to-orange-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {collection.name}
                  <span className="ml-2 text-sm opacity-75">({collection.count})</span>
                </motion.button>
              ))}
            </div>

            {/* Sort & Filter Buttons */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white rounded-full font-medium flex items-center gap-2 border border-gray-200 hover:bg-gray-100 transition-colors"
              >
                <SlidersHorizontal className="w-5 h-5" />
                Sort
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white rounded-full font-medium flex items-center gap-2 border border-gray-200 hover:bg-gray-100 transition-colors"
              >
                <Filter className="w-5 h-5" />
                Filter
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <FeaturedProducts />
          
          {/* Load More Button */}
          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-brand-500 to-orange-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Load More Products
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

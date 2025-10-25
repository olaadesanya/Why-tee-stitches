'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Heart, Eye } from 'lucide-react'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Classic White Shirt',
    category: 'Essentials',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=600&fit=crop',
  },
  {
    id: 2,
    name: 'Elegant Black Dress',
    category: 'Formal',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop',
  },
  {
    id: 3,
    name: 'Casual Denim Jacket',
    category: 'Outerwear',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop',
  },
  {
    id: 4,
    name: 'Summer Floral Dress',
    category: 'Casual',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=600&fit=crop',
  },
]

export default function FeaturedProducts() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, idx) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          onHoverStart={() => setHoveredId(product.id)}
          onHoverEnd={() => setHoveredId(null)}
          className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
        >
          {/* Image Container */}
          <div className="relative h-80 overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Hover Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredId === product.id ? 1 : 0 }}
              className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors"
              >
                <Heart className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors"
              >
                <Eye className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900">
                {product.category}
              </span>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-6">
            <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-brand-500 transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-brand-600">
                ${product.price}
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-brand-500 transition-colors"
              >
                Add to Cart
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, ShoppingCart, DollarSign, Eye, Heart } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { useEffect, useState } from 'react'

const salesData = [
  { month: 'Jan', sales: 4200, orders: 82 },
  { month: 'Feb', sales: 5100, orders: 95 },
  { month: 'Mar', sales: 6300, orders: 118 },
  { month: 'Apr', sales: 5800, orders: 103 },
  { month: 'May', sales: 7200, orders: 134 },
  { month: 'Jun', sales: 8500, orders: 156 },
]

const categoryData = [
  { name: 'Formal', value: 35, color: '#ef7e42' },
  { name: 'Casual', value: 28, color: '#f39c64' },
  { name: 'Outerwear', value: 22, color: '#f7bf92' },
  { name: 'Essentials', value: 15, color: '#fad9be' },
]

const recentActivity = [
  { id: 1, type: 'order', customer: 'Sarah Johnson', amount: 289.99, time: '5 mins ago' },
  { id: 2, type: 'signup', customer: 'Michael Chen', time: '12 mins ago' },
  { id: 3, type: 'order', customer: 'Emma Williams', amount: 459.99, time: '23 mins ago' },
  { id: 4, type: 'review', customer: 'David Martinez', rating: 5, time: '1 hour ago' },
  { id: 5, type: 'order', customer: 'Lisa Anderson', amount: 189.99, time: '2 hours ago' },
]

export default function AnalyticsPage() {
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    totalCustomers: 0,
    avgOrderValue: 0,
    pageViews: 0,
    conversionRate: 0,
  })

  useEffect(() => {
    // Simulate fetching analytics data
    const fetchAnalytics = async () => {
      // In a real app, this would fetch from your database
      setStats({
        totalRevenue: 42350,
        totalOrders: 688,
        totalCustomers: 1247,
        avgOrderValue: 61.55,
        pageViews: 15840,
        conversionRate: 4.34,
      })
    }
    
    fetchAnalytics()
  }, [])

  const statCards = [
    {
      title: 'Total Revenue',
      value: `$${stats.totalRevenue.toLocaleString()}`,
      change: '+12.5%',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Total Orders',
      value: stats.totalOrders.toLocaleString(),
      change: '+8.2%',
      icon: ShoppingCart,
      color: 'from-brand-500 to-orange-600',
    },
    {
      title: 'Customers',
      value: stats.totalCustomers.toLocaleString(),
      change: '+15.3%',
      icon: Users,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Avg Order Value',
      value: `$${stats.avgOrderValue.toFixed(2)}`,
      change: '+3.7%',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Page Views',
      value: stats.pageViews.toLocaleString(),
      change: '+22.1%',
      icon: Eye,
      color: 'from-cyan-500 to-teal-600',
    },
    {
      title: 'Conversion Rate',
      value: `${stats.conversionRate}%`,
      change: '+1.2%',
      icon: Heart,
      color: 'from-rose-500 to-red-600',
    },
  ]

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-2 text-gray-900">
            Analytics Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Track your business performance and insights
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {statCards.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-green-600 font-semibold">{stat.change}</span>
                <span className="text-gray-500">vs last month</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Sales Trend Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h2 className="font-display text-2xl font-bold mb-6 text-gray-900">
              Sales Trend
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="sales" 
                  stroke="#ef7e42" 
                  strokeWidth={3}
                  dot={{ fill: '#ef7e42', r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Orders Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h2 className="font-display text-2xl font-bold mb-6 text-gray-900">
              Monthly Orders
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                />
                <Legend />
                <Bar dataKey="orders" fill="#ef7e42" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Category Distribution & Recent Activity */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h2 className="font-display text-2xl font-bold mb-6 text-gray-900">
              Category Sales
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {categoryData.map((category, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: category.color }}
                    />
                    <span className="text-sm text-gray-700">{category.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{category.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg"
          >
            <h2 className="font-display text-2xl font-bold mb-6 text-gray-900">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div 
                  key={activity.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.type === 'order' ? 'bg-green-100' :
                      activity.type === 'signup' ? 'bg-blue-100' :
                      'bg-yellow-100'
                    }`}>
                      {activity.type === 'order' && <ShoppingCart className="w-5 h-5 text-green-600" />}
                      {activity.type === 'signup' && <Users className="w-5 h-5 text-blue-600" />}
                      {activity.type === 'review' && <Heart className="w-5 h-5 text-yellow-600" />}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{activity.customer}</p>
                      <p className="text-sm text-gray-600">
                        {activity.type === 'order' && `Placed order - $${activity.amount}`}
                        {activity.type === 'signup' && 'New customer signup'}
                        {activity.type === 'review' && `Left a ${activity.rating}-star review`}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

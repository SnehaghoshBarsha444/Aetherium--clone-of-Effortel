
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const DataVisualization = () => {
  const [activeFilter, setActiveFilter] = useState('newbuild');

  // Different data sets for each filter
  const dataByFilter = {
    newbuild: {
      barData: [
        { name: 'Q1', value: 65, growth: 12 },
        { name: 'Q2', value: 78, growth: 18 },
        { name: 'Q3', value: 82, growth: 8 },
        { name: 'Q4', value: 95, growth: 22 }
      ],
      kpiData: [
        { label: 'Revenue Growth', value: '187%', change: '+23%', color: 'text-green-400' },
        { label: 'Client Satisfaction', value: '98.5%', change: '+5.2%', color: 'text-blue-400' },
        { label: 'Project Success Rate', value: '94.2%', change: '+8.1%', color: 'text-purple-400' }
      ]
    },
    refurbishment: {
      barData: [
        { name: 'Q1', value: 52, growth: 15 },
        { name: 'Q2', value: 68, growth: 12 },
        { name: 'Q3', value: 71, growth: 18 },
        { name: 'Q4', value: 89, growth: 25 }
      ],
      kpiData: [
        { label: 'Revenue Growth', value: '156%', change: '+18%', color: 'text-green-400' },
        { label: 'Client Satisfaction', value: '96.8%', change: '+3.7%', color: 'text-blue-400' },
        { label: 'Project Success Rate', value: '91.5%', change: '+6.3%', color: 'text-purple-400' }
      ]
    }
  };

  const pieData = [
    { name: 'Strategy', value: 35, color: '#3B82F6' },
    { name: 'Development', value: 40, color: '#8B5CF6' },
    { name: 'Design', value: 25, color: '#EC4899' }
  ];

  const currentData = dataByFilter[activeFilter as keyof typeof dataByFilter];

  return (
    <section id="data" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Data-Driven <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Results</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our approach is backed by comprehensive analytics and measurable outcomes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Performance Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-700"
          >
            <div className="flex flex-col space-y-4 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Performance Metrics</h3>
                <p className="text-gray-400">Quarterly growth analysis</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => setActiveFilter('newbuild')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === 'newbuild' 
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  New Build
                </button>
                <button
                  onClick={() => setActiveFilter('refurbishment')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === 'refurbishment' 
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  Refurbishment
                </button>
              </div>
            </div>

            <motion.div 
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="h-64"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={currentData.barData}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                  <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </motion.div>

          {/* Service Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Service Distribution</h3>
            <p className="text-gray-400 mb-8">Portfolio breakdown by service type</p>

            <div className="flex items-center justify-center">
              <div className="relative w-48 h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-sm text-gray-400">Complete</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {pieData.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-3 h-3 rounded-full mx-auto mb-2" style={{ backgroundColor: item.color }} />
                  <div className="text-sm text-gray-400">{item.name}</div>
                  <div className="text-lg font-bold text-white">{item.value}%</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* KPI Section - Updated with responsive data */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid md:grid-cols-3 gap-8"
        >
          {currentData.kpiData.map((kpi, index) => (
            <motion.div 
              key={`${activeFilter}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-700 text-center"
            >
              <h4 className="text-lg text-gray-400 mb-4">{kpi.label}</h4>
              <div className="text-4xl font-bold text-white mb-2">{kpi.value}</div>
              <div className={`text-sm font-medium ${kpi.color}`}>{kpi.change}</div>
              
              {/* Progress Bar */}
              <div className="mt-6">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                    className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DataVisualization;

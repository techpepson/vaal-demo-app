import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from 'recharts';

const MarketAnalysis = () => {
  const [timeRange, setTimeRange] = useState('1y');

  // Mock data - replace with API data
  const marketTrends = [
    { month: 'Jan', price: 450000, sales: 24, inventory: 156 },
    { month: 'Feb', price: 460000, sales: 28, inventory: 148 },
    { month: 'Mar', price: 475000, sales: 32, inventory: 142 },
    { month: 'Apr', price: 490000, sales: 35, inventory: 138 },
    { month: 'May', price: 510000, sales: 30, inventory: 145 },
    { month: 'Jun', price: 525000, sales: 28, inventory: 150 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Market Analysis
        </h1>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="p-2 rounded-lg border border-gray-200 dark:border-gray-700"
        >
          <option value="1m">Last Month</option>
          <option value="6m">Last 6 Months</option>
          <option value="1y">Last Year</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Price Trends */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Price Trends
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={marketTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke="#0ea5e9" 
                name="Avg. Price"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Sales Volume */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Sales Volume
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={marketTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#0ea5e9" name="Sales" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Inventory Levels */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Inventory Levels
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={marketTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="inventory" 
                fill="#0ea5e9" 
                stroke="#0284c7"
                name="Available Properties"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Market Statistics */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Market Statistics
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Avg. Days on Market
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                45 days
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Avg. Price/sqft
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                $350
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                YoY Price Change
              </p>
              <p className="text-2xl font-bold text-green-600">
                +8.5%
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Inventory Change
              </p>
              <p className="text-2xl font-bold text-red-600">
                -3.2%
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MarketAnalysis; 
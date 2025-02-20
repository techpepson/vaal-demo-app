import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChartBarIcon,
  UserGroupIcon,
  HomeIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  const stats = [
    {
      title: "Total Properties",
      value: "156",
      change: "+12%",
      icon: HomeIcon,
    },
    {
      title: "Total Revenue",
      value: "$284,500",
      change: "+8%",
      icon: CurrencyDollarIcon,
    },
    {
      title: "Active Listings",
      value: "48",
      change: "+24%",
      icon: ChartBarIcon,
    },
    {
      title: "New Leads",
      value: "29",
      change: "+16%",
      icon: UserGroupIcon,
    },
  ];

  const recentActivities = [
    {
      type: "viewing",
      property: "Modern Downtown Apartment",
      date: "2024-02-15T10:00:00",
      status: "scheduled",
      icon: CalendarIcon,
    },
    {
      type: "message",
      property: "Luxury Beachfront Villa",
      date: "2024-02-14T15:30:00",
      status: "unread",
      icon: ChatBubbleLeftIcon,
    },
    // Add more activities...
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
          Dashboard
        </h1>
        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
          className="p-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:bg-gray-800 dark:border-gray-700"
        >
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  {stat.value}
                </p>
                <p className="text-sm text-green-600 mt-1">{stat.change}</p>
              </div>
              <stat.icon className="w-12 h-12 text-primary-600" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Activities
          </h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <activity.icon className="w-6 h-6 text-primary-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {activity.property}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {new Date(activity.date).toLocaleDateString()}
                  </p>
                </div>
                <span
                  className={`ml-auto text-sm ${
                    activity.status === "scheduled"
                      ? "text-blue-600"
                      : "text-red-600"
                  }`}
                >
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Performance Analytics
          </h2>
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart component coming soon...
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;

import React, { useState } from "react";
import {
  FaMoneyBillWave,
  FaChartPie,
  FaArrowUp,
  FaArrowDown,
  FaRupeeSign,
  FaPlus,
  FaFilter,
  FaDownload
} from "react-icons/fa";

const BudgetSection = () => {
  const [budgetView, setBudgetView] = useState('overview');
  
  const budgetData = {
    totalBudget: 220000,
    totalExpenses: 118000,
    totalIncome: 220000,
    categories: [
      { name: 'Food & Beverages', amount: 25000, percentage: 21.2 },
      { name: 'Decoration', amount: 18000, percentage: 15.3 },
      { name: 'Technical Equipment', amount: 35000, percentage: 29.7 },
      { name: 'Marketing', amount: 10000, percentage: 8.5 },
      { name: 'Venue', amount: 30000, percentage: 25.4 }
    ],
    recentTransactions: [
      {
        id: 1,
        title: 'Catering for Technical Workshop',
        amount: 25000,
        type: 'expense',
        date: '2023-06-10',
        category: 'Food & Beverages',
        status: 'approved'
      },
      {
        id: 2,
        title: 'Sound System Rental',
        amount: 15000,
        type: 'expense',
        date: '2023-06-12',
        category: 'Technical Equipment',
        status: 'pending'
      },
      {
        id: 3,
        title: 'Sponsorship - TechCorp',
        amount: 50000,
        type: 'income',
        date: '2023-06-15',
        category: 'Sponsorship',
        status: 'received'
      }
    ]
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Budget Management</h2>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-white rounded-lg border border-gray-300 hover:bg-gray-50">
            <FaFilter className="mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-white rounded-lg border border-gray-300 hover:bg-gray-50">
            <FaDownload className="mr-2" />
            Export
          </button>
          <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700">
            <FaPlus className="mr-2" />
            Add Transaction
          </button>
        </div>
      </div>

      {/* Budget Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">Total Budget</h3>
            <FaMoneyBillWave className="text-primary-500" />
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-900">
              {formatCurrency(budgetData.totalBudget)}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">Total Expenses</h3>
            <FaArrowDown className="text-red-500" />
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-900">
              {formatCurrency(budgetData.totalExpenses)}
            </span>
            <span className="ml-2 text-sm text-gray-500">
              ({Math.round((budgetData.totalExpenses / budgetData.totalBudget) * 100)}% used)
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">Remaining Budget</h3>
            <FaArrowUp className="text-green-500" />
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-900">
              {formatCurrency(budgetData.totalBudget - budgetData.totalExpenses)}
            </span>
            <span className="ml-2 text-sm text-gray-500">
              ({Math.round(((budgetData.totalBudget - budgetData.totalExpenses) / budgetData.totalBudget) * 100)}% left)
            </span>
          </div>
        </div>
      </div>

      {/* Expense Categories */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Expense Categories</h3>
          <div className="space-y-4">
            {budgetData.categories.map((category, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">{category.name}</span>
                    <span className="text-sm text-gray-500">{formatCurrency(category.amount)}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 rounded-full h-2"
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <span className="ml-4 text-sm text-gray-500">{category.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Transactions</h3>
          <div className="divide-y">
            {budgetData.recentTransactions.map((transaction) => (
              <div key={transaction.id} className="py-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{transaction.title}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500">{transaction.date}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-xs text-gray-500">{transaction.category}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className={`text-sm font-medium ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'income' ? '+' : '-'} {formatCurrency(transaction.amount)}
                  </span>
                  <span className={`ml-3 px-2 py-1 text-xs font-medium rounded-full ${
                    transaction.status === 'approved' || transaction.status === 'received'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetSection;

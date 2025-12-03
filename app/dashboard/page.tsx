export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          📊 Dashboard
        </h1>
        <p className="text-gray-600">
          Welcome to your dashboard! Here are your key metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
            <span className="text-2xl">👥</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">5</p>
          <p className="text-sm text-green-600 mt-2">+12% from last month</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">Total Products</h3>
            <span className="text-2xl">📦</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">5</p>
          <p className="text-sm text-green-600 mt-2">+8% from last month</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
            <span className="text-2xl">💰</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">$12,584</p>
          <p className="text-sm text-green-600 mt-2">+23% from last month</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">Orders</h3>
            <span className="text-2xl">📋</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">89</p>
          <p className="text-sm text-green-600 mt-2">+15% from last month</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Recent Activity
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-sm">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="text-gray-600">New user registered</span>
              <span className="ml-auto text-gray-400">2 hours ago</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              <span className="text-gray-600">Product added to inventory</span>
              <span className="ml-auto text-gray-400">5 hours ago</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
              <span className="text-gray-600">Order completed</span>
              <span className="ml-auto text-gray-400">1 day ago</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="space-y-3">
            <button className="w-full px-4 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 text-left">
              + Add New User
            </button>
            <button className="w-full px-4 py-3 bg-orange-600 text-white rounded hover:bg-orange-700 text-left">
              + Add New Product
            </button>
            <button className="w-full px-4 py-3 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-left">
              View All Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
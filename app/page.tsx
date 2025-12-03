import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🏠 Welcome to My App
        </h1>
        <p className="text-xl text-gray-600">
          Your central hub for managing users and products
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/users">
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              View All Users
            </h2>
            <p className="text-gray-600 text-sm">
              Browse and manage user profiles
            </p>
          </div>
        </Link>

        <Link href="/products">
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📦</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              View All Products
            </h2>
            <p className="text-gray-600 text-sm">
              Explore product catalog
            </p>
          </div>
        </Link>

        <Link href="/dashboard">
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Go to Dashboard
            </h2>
            <p className="text-gray-600 text-sm">
              View analytics and metrics
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}
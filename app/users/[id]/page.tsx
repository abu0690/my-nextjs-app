import Link from 'next/link'

export default async function UserDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }>
}) {
  const { id } = await params;

  return (
    <div className="space-y-6">
      <Link href="/users" className="text-blue-600 hover:text-blue-800 font-medium">
        ← Back to Users
      </Link>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="bg-blue-600 p-8">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-blue-600">U</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">User {id}</h1>
              <p className="text-blue-100">user{id}@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            User Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                User ID
              </label>
              <p className="text-lg text-gray-900">{id}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Role
              </label>
              <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-800">
                User
              </span>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Status
              </label>
              <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-800">
                Active
              </span>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Join Date
              </label>
              <p className="text-lg text-gray-900">January 15, 2024</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Department
              </label>
              <p className="text-lg text-gray-900">Engineering</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                URL Path
              </label>
              <code className="text-sm bg-gray-100 px-3 py-2 rounded text-blue-600 block">
                /users/{id}
              </code>
            </div>
          </div>
        </div>

        <div className="px-8 py-4 bg-gray-50 border-t flex gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Edit Profile
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            View Activity
          </button>
        </div>
      </div>
    </div>
  )
}
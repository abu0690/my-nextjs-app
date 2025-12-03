import Link from 'next/link'

export default function UsersPage() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@gmail.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@gmail.com', role: 'User' },
    { id: 3, name: 'Mike Johnson', email: 'mike@gmail.com', role: 'User' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@gmail.com', role: 'Manager' },
    { id: 5, name: 'Tom Brown', email: 'tom@gmail.com', role: 'User' },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          👥 All Users
        </h1>
        <p className="text-gray-600">
          Click on any user to see their profile
        </p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {users.map((user) => (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>
                <div className="p-6 hover:bg-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-blue-600">
                        {user.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900">
                        {user.name}
                      </p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                    {user.role}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
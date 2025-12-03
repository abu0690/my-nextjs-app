import Link from 'next/link'

export default function ProductsPage() {
  const products = [
    { id: 101, name: 'Wireless Headphones', price: 99.99, stock: 45 },
    { id: 102, name: 'Smart Watch', price: 199.99, stock: 23 },
    { id: 103, name: 'Laptop Stand', price: 49.99, stock: 67 },
    { id: 104, name: 'USB-C Hub', price: 39.99, stock: 12 },
    { id: 105, name: 'Mechanical Keyboard', price: 149.99, stock: 34 },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          📦 All Products
        </h1>
        <p className="text-gray-600">
          Browse our catalog. Click any product for details.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition h-full">
              <div className="bg-orange-100 h-40 flex items-center justify-center rounded-t-lg">
                <span className="text-6xl">📦</span>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </p>
                    <p className="text-sm text-gray-500">
                      Stock: {product.stock}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
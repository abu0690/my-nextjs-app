import Link from 'next/link'

export default async function ProductDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }>
}) {    
  const { id } = await params;

  return (
    <div className="space-y-6">
      <Link href="/products" className="text-orange-600 hover:text-orange-800 font-medium">
        ← Back to Products
      </Link>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-orange-100 p-12 flex items-center justify-center">
            <span className="text-9xl">📦</span>
          </div>

          <div className="p-8">
            <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-orange-100 text-orange-800 mb-4">
              Electronics
            </span>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Product {id}
            </h1>
            
            <p className="text-gray-600 mb-6">
              High-quality product with excellent features and performance.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Price
                </label>
                <p className="text-3xl font-bold text-gray-900">$99.99</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Stock
                </label>
                <p className="text-lg text-gray-900">45 units available</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Product ID
                </label>
                <p className="text-lg text-gray-900">{id}</p>
              </div>
               
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  URL Path
                </label>
                <code className="text-sm bg-gray-100 px-3 py-2 rounded text-orange-600 block">
                  /products/{id}
                </code>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="px-6 py-3 bg-orange-600 text-white rounded hover:bg-orange-700 font-medium">
                Add to Cart
              </button>
              <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 font-medium">
                Save for Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
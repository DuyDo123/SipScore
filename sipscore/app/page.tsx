import Link from "next/link";
import { Shop } from "./types/index";
import StarRating from "./components/StarRating";

async function getShops(): Promise<Shop[]> {
  try {
    const res = await fetch('http://localhost:3000/api/shops', {
      cache: 'no-store'
    });
    
    if (!res.ok) {
      console.error('Failed to fetch shops');
      return [];
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching shops:', error);
    return [];
  }
}

export default async function HomePage() {
  const shops = await getShops();

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Discover the Best Boba Near You
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Rate, review, and find your perfect bubble tea
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for shops or drinks..."
                className="w-full px-6 py-4 pr-12 text-lg border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Shops Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Featured Shops
          </h2>
          
          {shops.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No shops found. Make sure your API is running and database is seeded.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shops.map((shop) => (
                <Link
                  key={shop.id}
                  href={`/shops/${shop.id}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="h-48 bg-linear-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-6xl">
                    🧋
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {shop.name}
                    </h3>
                    
                    <div className="flex items-center mb-2">
                      <StarRating rating={shop.averageRating} showNumber />
                      <span className="ml-2 text-gray-600 text-sm">
                        ({shop.totalRatings} reviews)
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      📍 {shop.address}, {shop.city}
                    </p>
                    
                    {shop.description && (
                      <p className="text-gray-500 text-sm line-clamp-2">
                        {shop.description}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
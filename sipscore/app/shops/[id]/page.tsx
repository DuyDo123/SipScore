import Link from "next/link";
import { notFound } from "next/navigation";
import { ShopDetail } from "@/app/types/index";
import StarRating from "@/app/components/StarRating";

async function getShop(id: string): Promise<ShopDetail | null> {
  try {
    const res = await fetch(`http://localhost:3000/api/shops/${id}`, {
      cache: 'no-store'
    });
    
    if (!res.ok) {
      return null;
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching shop:', error);
    return null;
  }
}

export default async function ShopDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const shop = await getShop(id);
  if (!shop) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Shops
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Shop Header */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-start gap-6">
            <div className="w-32 h-32 bg-linear-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center text-6xl shrink-0">
              🧋
            </div>
            
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                {shop.name}
              </h1>
              
              <div className="flex items-center gap-2 mb-3">
                <StarRating rating={shop.averageRating} size="lg" showNumber />
                <span className="text-gray-600">
                  ({shop.totalRatings} {shop.totalRatings === 1 ? 'review' : 'reviews'})
                </span>
              </div>
              
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>{shop.address}, {shop.city}, {shop.state}</span>
                </div>
                
                {shop.phone && (
                  <div className="flex items-center gap-2">
                    <span>📞</span>
                    <a href={`tel:${shop.phone}`} className="hover:text-blue-600">
                      {shop.phone}
                    </a>
                  </div>
                )}
                
                {shop.website && (
                  <div className="flex items-center gap-2">
                    <span>🌐</span>
                    <a
                      href={shop.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
              
              {shop.description && (
                <p className="mt-4 text-gray-600">
                  {shop.description}
                </p>
              )}
              
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                Write a Review
              </button>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu</h2>
          
          {shop.drinks.length === 0 ? (
            <p className="text-gray-600">No menu items available yet.</p>
          ) : (
            <div className="space-y-4">
              {shop.drinks.map((drink) => (
                <div
                  key={drink.id}
                  className="flex items-start justify-between p-4 border rounded-lg hover:bg-gray-50 transition"
                >
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {drink.name}
                      </h3>
                      {drink.price && (
                        <span className="text-lg font-semibold text-gray-900">
                          ${drink.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                    
                    {drink.description && (
                      <p className="text-gray-600 text-sm mb-2">
                        {drink.description}
                      </p>
                    )}
                    
                    {drink.toppings.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-2">
                        {drink.toppings.map((dt) => (
                          <span
                            key={dt.toppingId}
                            className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                          >
                            {dt.topping.name}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2">
                      <StarRating rating={drink.averageRating} size="sm" />
                      <span className="text-sm text-gray-600">
                        {drink.averageRating > 0
                          ? `${drink.averageRating.toFixed(1)} (${drink.totalRatings})`
                          : 'No ratings yet'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Reviews</h2>
          
          {shop.ratings.length === 0 ? (
            <p className="text-gray-600">No reviews yet. Be the first to review!</p>
          ) : (
            <div className="space-y-6">
              {shop.ratings.map((rating) => (
                <div key={rating.id} className="border-b pb-6 last:border-b-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-semibold text-gray-900">
                        {rating.user.name || 'Anonymous'}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <StarRating rating={rating.rating} size="sm" />
                        <span className="text-sm text-gray-500">
                          {new Date(rating.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {rating.review && (
                    <p className="text-gray-700 mt-3">{rating.review}</p>
                  )}
                  
                  {(rating.serviceRating || rating.ambianceRating || rating.valueRating) && (
                    <div className="flex gap-4 mt-3 text-sm">
                      {rating.serviceRating && (
                        <div>
                          <span className="text-gray-600">Service: </span>
                          <span className="font-medium">{rating.serviceRating}/5</span>
                        </div>
                      )}
                      {rating.ambianceRating && (
                        <div>
                          <span className="text-gray-600">Ambiance: </span>
                          <span className="font-medium">{rating.ambianceRating}/5</span>
                        </div>
                      )}
                      {rating.valueRating && (
                        <div>
                          <span className="text-gray-600">Value: </span>
                          <span className="font-medium">{rating.valueRating}/5</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
import React, { useEffect } from "react";
import { fetchOffers } from "../../features/slices/offerSlice";
import { useDispatch, useSelector } from "react-redux";

const OffersListPage = () => {
  const dispatch = useDispatch();
  const { offers, loading, error } = useSelector((state) => state.offers);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  if (loading) return <p className="text-center mt-10">Loading offers...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">All Offers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div key={offer._id} className="bg-white rounded-xl shadow-md overflow-hidden">
              {offer.imageUrl && (
                <img
                  src={offer.imageUrl}
                  alt={offer.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{offer.title}</h2>
                <p className="text-gray-700 mb-2">{offer.description}</p>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>
                    Type: {offer.type} {offer.type === "percentage" && `(${offer.value}%)`}
                    {offer.type === "fixed" && `($${offer.value})`}
                  </span>
                  <span>Active: {offer.active ? "Yes" : "No"}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Start: {new Date(offer.startAt).toLocaleDateString()}</span>
                  <span>End: {offer.endAt ? new Date(offer.endAt).toLocaleDateString() : "N/A"}</span>
                </div>
                {offer.tags && offer.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {offer.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {offers.length === 0 && (
          <p className="text-center mt-10 text-gray-500">No offers available.</p>
        )}
      </div>
    </div>
  );
};

export default OffersListPage;
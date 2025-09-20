import React, { useEffect } from "react";
import { fetchOffers } from "../../features/slices/offerSlice";
import { useDispatch, useSelector } from "react-redux";

const OffersListPage = () => {
  const dispatch = useDispatch();
  const { offers, loading, error } = useSelector((state) => state.offers);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  // Debug: Log the current state
  console.log("Current offers state:", offers);
  console.log("Offers length:", offers?.length);
  console.log("Loading:", loading);
  console.log("Error:", error);

  const handleRefresh = () => {
    console.log("Refreshing offers...");
    dispatch(fetchOffers());
  };

  const handleToggleActive = async (offerId, currentStatus) => {
    console.log(`Toggling offer ${offerId} from ${currentStatus} to ${!currentStatus}`);
    
    try {
      // Try different possible endpoints using proxy
      const endpoints = [
        `/api/offers/${offerId}`,
        `/api/offers/update/${offerId}`,
        `/api/offers/${offerId}/toggle`
      ];

      let success = false;
      
      for (const endpoint of endpoints) {
        try {
          console.log(`Trying endpoint: ${endpoint}`);
          const response = await fetch(endpoint, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ active: !currentStatus }),
          });

          console.log(`Response status: ${response.status}`);
          const responseData = await response.text();
          console.log(`Response data:`, responseData);

          if (response.ok) {
            console.log("Successfully updated offer status");
            success = true;
            dispatch(fetchOffers());
            break;
          }
        } catch (endpointError) {
          console.log(`Endpoint ${endpoint} failed:`, endpointError);
          continue;
        }
      }

      if (!success) {
        alert("Failed to update offer status. Please check the console for details.");
      }
    } catch (error) {
      console.error("Error updating offer status:", error);
      alert("Error updating offer status: " + error.message);
    }
  };

  const handleRemoveOffer = async (offerId) => {
    if (!window.confirm("Are you sure you want to remove this offer?")) {
      return;
    }

    console.log(`Removing offer ${offerId}`);
    
    try {
      // Try different possible endpoints using proxy
      const endpoints = [
        `/api/offers/${offerId}`,
        `/api/offers/delete/${offerId}`,
        `/api/offers/remove/${offerId}`
      ];

      let success = false;

      for (const endpoint of endpoints) {
        try {
          console.log(`Trying delete endpoint: ${endpoint}`);
          const response = await fetch(endpoint, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });

          console.log(`Delete response status: ${response.status}`);
          const responseData = await response.text();
          console.log(`Delete response data:`, responseData);

          if (response.ok) {
            console.log("Successfully removed offer");
            success = true;
            dispatch(fetchOffers());
            break;
          }
        } catch (endpointError) {
          console.log(`Delete endpoint ${endpoint} failed:`, endpointError);
          continue;
        }
      }

      if (!success) {
        alert("Failed to remove offer. Please check the console for details.");
      }
    } catch (error) {
      console.error("Error removing offer:", error);
      alert("Error removing offer: " + error.message);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading offers...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">All Offers</h1>
          <button
            onClick={handleRefresh}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? "Loading..." : "Refresh"}
          </button>
        </div>
        


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(offers) &&
            offers.map((offer) => (
                              <div
                key={offer._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image Section */}
                <div className="relative">
                  {offer.imageUrl ? (
                    <img
                      src={offer.imageUrl}
                      alt={offer.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
                      }}
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                  
                  {/* Status Badge */}
                  <div className="absolute top-2 right-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        offer.active
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {offer.active ? "Active" : "Inactive"}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-gray-900">{offer.title}</h2>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">{offer.description}</p>
                  
                  {/* Offer Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Discount:</span>
                      <span className="font-medium text-blue-600">
                        {offer.type === "percentage" && `${offer.value}% off`}
                        {offer.type === "fixed" && `${offer.value} off`}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Valid from:</span>
                      <span className="text-gray-700">
                        {new Date(offer.startAt).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Valid until:</span>
                      <span className="text-gray-700">
                        {offer.endAt
                          ? new Date(offer.endAt).toLocaleDateString()
                          : "No expiry"}
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  {offer.tags && offer.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {offer.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => handleToggleActive(offer._id, offer.active)}
                      className={`px-2 py-1 rounded text-xs font-medium transition-colors duration-200 ${
                        offer.active
                          ? "bg-red-500 text-white hover:bg-red-600"
                          : "bg-green-500 text-white hover:bg-green-600"
                      }`}
                    >
                      {offer.active ? "Deactivate" : "Activate"}
                    </button>
                    
                    <button
                      onClick={() => handleRemoveOffer(offer._id)}
                      className="flex-1 px-2 py-1 bg-red-500 text-white rounded text-xs font-medium hover:bg-red-700 transition-colors duration-200"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {Array.isArray(offers) && offers.length === 0 && (
          <p className="text-center mt-10 text-gray-500">
            No offers available.
          </p>
        )}
        {!Array.isArray(offers) && (
          <p className="text-center mt-10 text-red-500">
            Error: Offers data is not in the expected format
          </p>
        )}
      </div>
    </div>
  );
};

export default OffersListPage;
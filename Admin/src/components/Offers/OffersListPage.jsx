import React, { useEffect, useState } from "react";
import {
  fetchOffers,
  editOffer,
  toggleOfferStatus,
  deleteOffer,
} from "../../features/slices/offerSlice";
import { useDispatch, useSelector } from "react-redux";
import OfferEditModal from "../Modal/OfferEditModal";
import Swal from "sweetalert2";

const OffersListPage = () => {
  const dispatch = useDispatch();
  const { offers, loading, error } = useSelector((state) => state.offers);

  const [selectedOffer, setSelectedOffer] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  // Live timer effect - updates every minute normally, every second for urgent offers
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      setCurrentTime(now);
      
      // Check if any offers are expiring within 1 hour
      const hasUrgentOffers = offers.some(offer => {
        if (!offer.endAt) return false;
        const diff = new Date(offer.endAt) - now;
        return diff > 0 && diff < 60 * 60 * 1000; // Less than 1 hour
      });
      
      // Return appropriate interval
      return hasUrgentOffers ? 1000 : 60000; // 1 second if urgent, 1 minute otherwise
    };
    
    let interval = updateTimer();
    const timer = setInterval(() => {
      interval = updateTimer();
    }, interval);

    return () => clearInterval(timer);
  }, [offers]);

  // Initial timer setup
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 10000); // Update every 10 seconds as fallback

    return () => clearInterval(timer);
  }, []);

  const handleRefresh = async () => {
    try {
      Swal.fire({
        title: "Refreshing...",
        text: "Loading latest offers",
        icon: "info",
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      await dispatch(fetchOffers()).unwrap();

      Swal.fire({
        title: "Success!",
        text: "Offers refreshed successfully",
        icon: "success",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to refresh offers. Please try again.",
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
    }
  };

  const handleEditClick = (offer) => {
    setSelectedOffer({ ...offer });
    setIsEditOpen(true);
  };

  const handleSave = async (updatedData) => {
    if (!selectedOffer) return;
    const offerId = selectedOffer._id || selectedOffer.id;

    try {
      // Show loading state
      Swal.fire({
        title: "Updating Offer...",
        text: "Please wait while we save your changes",
        icon: "info",
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      await dispatch(
        editOffer({
          id: offerId,
          data: updatedData,
        })
      ).unwrap();

      // Force refresh the offers list to get updated data
      await dispatch(fetchOffers()).unwrap();

      setIsEditOpen(false);
      setSelectedOffer(null);

      Swal.fire({
        title: "Success!",
        text: "Offer updated successfully",
        icon: "success",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } catch (err) {
      console.error("Update failed:", err);
      Swal.fire({
        title: "Error!",
        text: "Failed to update offer. Please try again.",
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
    }
  };

  const handleToggleActive = async (offerId, currentStatus) => {
    const action = currentStatus ? "deactivate" : "activate";
    const actionCapitalized = currentStatus ? "Deactivate" : "Activate";

    try {
      const result = await Swal.fire({
        title: `${actionCapitalized} Offer?`,
        text: `Are you sure you want to ${action} this offer?`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: currentStatus ? "#EF4444" : "#10B981",
        cancelButtonColor: "#6B7280",
        confirmButtonText: `Yes, ${action} it!`,
        cancelButtonText: "Cancel",
        reverseButtons: true,
      });

      if (!result.isConfirmed) return;

      Swal.fire({
        title: `${actionCapitalized.slice(0, -1)}ing...`,
        text: "Please wait",
        icon: "info",
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      await dispatch(
        toggleOfferStatus({
          id: offerId,
          active: !currentStatus,
        })
      ).unwrap();

      await Swal.fire({
        title: "Success!",
        text: `Offer has been ${action}d successfully`,
        icon: "success",
        confirmButtonColor: "#10B981",
        timer: 2000,
        timerProgressBar: true,
      });
    } catch (error) {
      console.error("Error updating offer status:", error);

      Swal.fire({
        title: "Error!",
        text: `Failed to ${action} offer. Please try again.`,
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
    }
  };

  const handleRemoveOffer = async (offerId, offerTitle) => {
    try {
      const result = await Swal.fire({
        title: "Delete Offer?",
        html: `
          <p>Are you sure you want to permanently delete this offer?</p>
          <p class="text-sm text-gray-600 mt-2"><strong>"${offerTitle}"</strong></p>
          <p class="text-xs text-red-600 mt-2">This action cannot be undone!</p>
        `,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#EF4444",
        cancelButtonColor: "#6B7280",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
        reverseButtons: true,
        focusCancel: true,
      });

      if (!result.isConfirmed) return;

      Swal.fire({
        title: "Deleting...",
        text: "Removing offer from database",
        icon: "info",
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      await dispatch(deleteOffer(offerId)).unwrap();

      await Swal.fire({
        title: "Deleted!",
        text: "Offer has been permanently removed",
        icon: "success",
        confirmButtonColor: "#10B981",
        timer: 2000,
        timerProgressBar: true,
      });
    } catch (error) {
      console.error("Error removing offer:", error);

      Swal.fire({
        title: "Error!",
        text: "Failed to remove offer. Please try again.",
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
    }
  };

  // Enhanced function to display remaining time with live updates
  const getRemainingTime = (endAt) => {
    if (!endAt) return "No expiry";
    
    const now = currentTime; // Use the live currentTime state
    const end = new Date(endAt);
    const diff = end - now;
    
    if (diff <= 0) return <span className="text-red-400 font-semibold">Expired</span>;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    
    // Color coding based on time remaining
    let colorClass = "text-gray-200";
    if (diff < 24 * 60 * 60 * 1000) { // Less than 1 day
      colorClass = "text-red-400 font-semibold";
    } else if (diff < 3 * 24 * 60 * 60 * 1000) { // Less than 3 days
      colorClass = "text-yellow-400 font-semibold";
    } else if (diff < 7 * 24 * 60 * 60 * 1000) { // Less than 7 days
      colorClass = "text-orange-400";
    } else {
      colorClass = "text-green-400";
    }
    
    if (days > 0) {
      return <span className={colorClass}>{days}d {hours}h left</span>;
    } else if (hours > 0) {
      return <span className={colorClass}>{hours}h {minutes}m left</span>;
    } else if (minutes > 0) {
      return <span className={colorClass}>{minutes}m {seconds}s left</span>;
    } else {
      return <span className="text-red-400 font-semibold animate-pulse">{seconds}s left</span>;
    }
  };

  // Fixed function to display discount value properly
  const getDiscountDisplay = (offer) => {
    if (offer.type === "percentage") {
      return `${offer.value}% off`;
    } else if (offer.type === "coupon") {
      // Check for different possible coupon code properties
      const couponCode = offer.code || offer.couponCode || offer.value;
      return couponCode ? `#${couponCode}` : "Coupon";
    } else {
      // For fixed amount or other types
      return `₹${offer.value} off`;
    }
  };

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: "Error Loading Offers",
        text: error,
        icon: "error",
        confirmButtonColor: "#EF4444",
        confirmButtonText: "Retry",
        showCancelButton: true,
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(fetchOffers());
        }
      });
    }
  }, [error, dispatch]);

  if (loading && offers.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading offers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">All Offers</h1>
            <p className="text-gray-600 text-sm mt-1">
              {offers.length} offer{offers.length !== 1 ? "s" : ""} found
            </p>
          </div>
          <button
            onClick={handleRefresh}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Loading..." : "Refresh"}
          </button>
        </div>

        {Array.isArray(offers) && offers.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">No offers found</div>
            <button
              onClick={handleRefresh}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Refresh
            </button>
          </div>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(offers) &&
            offers.map((offer) => (
              <div
                key={offer._id || offer.id}
                className="relative bg-gray-900 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                {/* Background Image with better error handling */}
                {offer.imageUrl && (
                  <div className="absolute inset-0">
                    <img
                      src={offer.imageUrl}
                      alt={offer.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      style={{ display: 'block' }}
                      onLoad={(e) => {
                        e.target.style.display = 'block';
                        e.target.parentElement.nextElementSibling.style.display = 'none';
                      }}
                      onError={(e) => {
                        console.log('Image failed to load:', offer.imageUrl);
                        e.target.style.display = 'none';
                        e.target.parentElement.nextElementSibling.style.display = 'flex';
                      }}
                    />
                  </div>
                )}

                {/* Fallback gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center ${
                    offer.imageUrl ? 'hidden' : 'flex'
                  }`}
                  style={{ display: offer.imageUrl ? 'none' : 'flex' }}
                >
                  <span className="text-white text-xl font-bold opacity-50">
                    {offer.title?.charAt(0)?.toUpperCase() || "O"}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

                <div className="relative p-4 h-72 flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                        offer.active
                          ? "bg-green-500/80 text-white shadow-lg"
                          : "bg-red-500/80 text-white shadow-lg"
                      }`}
                    >
                      {offer.active ? "Active" : "Inactive"}
                    </span>

                    {/* Fixed Coupon Code Display */}
                    <span className="px-2 py-1 bg-yellow-400 text-black text-xs font-semibold rounded">
                      {offer.code || offer.couponCode || (offer.type === "fixed" ? `₹${offer.value}` : `${offer.value}%`)}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-white mb-1">
                      {offer.title}
                    </h2>
                    <p className="text-sm text-gray-200 line-clamp-2">
                      {offer.description}
                    </p>
                  </div>

                  <div className="space-y-1 text-xs text-gray-200">
                    <div className="flex justify-between">
                      <span>Discount:</span>
                      <span className="font-semibold text-yellow-300">
                        {getDiscountDisplay(offer)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time left:</span>
                      <span>{getRemainingTime(offer.endAt)}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() =>
                        handleToggleActive(offer._id || offer.id, offer.active)
                      }
                      disabled={loading}
                      className={`px-3 py-1 rounded text-xs font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                        offer.active
                          ? "bg-red-600 hover:bg-red-700 text-white"
                          : "bg-green-600 hover:bg-green-700 text-white"
                      }`}
                    >
                      {offer.active ? "Deactivate" : "Activate"}
                    </button>
                    <button
                      onClick={() => handleEditClick(offer)}
                      disabled={loading}
                      className="px-3 py-1 bg-yellow-500 text-white rounded text-xs font-medium hover:bg-yellow-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        handleRemoveOffer(offer._id || offer.id, offer.title)
                      }
                      disabled={loading}
                      className="flex-1 px-3 py-1 bg-red-500 text-white rounded text-xs font-medium hover:bg-red-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <OfferEditModal
        offer={selectedOffer}
        isOpen={isEditOpen}
        onClose={() => {
          setIsEditOpen(false);
          setSelectedOffer(null);
        }}
        onSave={handleSave}
      />
    </div>
  );
};

export default OffersListPage;
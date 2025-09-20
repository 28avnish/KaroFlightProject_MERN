import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { addPricingConfig } from "../../../features/action/pricingConfig";

export const CreatePricingConfig = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { response, isLoading } = useSelector((state) => state.pricingConfig);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const payload = {
      region: data.region,
      isActive: data.isActive === "true", // convert string to boolean
      charges: {
        flight: {
          platformFee: {
            value: Number(data.flightPlatformValue),
            type: data.flightPlatformType,
          },
          markupFee: {
            value: Number(data.flightMarkupValue),
            type: data.flightMarkupType,
          },
          refundConfig: {
            enableFullRefund: data.flightEnableRefund === "yes",
            refundWithExtraCharge: {
              value: Number(data.flightRefundCharge),
              type: "percentage",
            },
          },
        },
        hotel: {
          platformFee: {
            value: Number(data.hotelPlatformValue),
            type: data.hotelPlatformType,
          },
          markupFee: {
            value: Number(data.hotelMarkupValue),
            type: data.hotelMarkupType,
          },
          refundConfig: {
            enableFullRefund: data.hotelEnableRefund === "yes",
            refundWithExtraCharge: {
              value: Number(data.hotelRefundCharge),
              type: "percentage",
            },
          },
        },
      },
    };

    dispatch(addPricingConfig(payload));
  };

  useEffect(() => {
    if (response?.status) {
      navigate("/pricing-config");
    }
  }, [response]);

  return (
    <div>
      <div className="text-gray-600">
        <div className="flex justify-center">
          <h3 className="text-gray-600 text-2xl font-semibold sm:text-3xl">
            Add New Region Pricing
          </h3>
        </div>
        <div className="bg-white rounded-lg shadow p-4 py-6 sm:rounded-lg sm:max-w-5xl mt-8 mx-auto">
          <form
            className="space-y-6 mx-8 sm:mx-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Region + Status */}
            <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
              {/* Region */}
              <div className="w-full">
                <label className="font-medium">Region</label>
                <select
                  {...register("region", { required: true })}
                  className="w-full mt-2 border border-slate-300 rounded-md p-2 h-10"
                >
                  <option value="">Choose Region</option>
                  <option value="IN">India</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="FR">France</option>
                  <option value="ES">Spain</option>
                </select>
                {errors.region && (
                  <span className="text-red-500">Region is required</span>
                )}
              </div>

              {/* Status */}
              <div className="w-full">
                <label className="font-medium">Status</label>
                <div className="flex mt-2 gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      {...register("isActive", { required: true })}
                      type="radio"
                      value="true"
                      className="accent-pink-700"
                    />
                    Active
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      {...register("isActive", { required: true })}
                      type="radio"
                      value="false"
                      className="accent-pink-700"
                    />
                    Inactive
                  </label>
                </div>
                {errors.isActive && (
                  <span className="text-red-500">Status is required</span>
                )}
              </div>
            </div>

            {/* Charges - Flight */}
            <div className="border p-4 rounded-md">
              <h4 className="font-semibold mb-2">Flight Charges</h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label>Platform Fee Value</label>
                  <input
                    type="number"
                    {...register("flightPlatformValue", { required: true })}
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>
                <div>
                  <label>Platform Fee Type</label>
                  <select
                    {...register("flightPlatformType")}
                    className="w-full border rounded p-2 mt-1"
                  >
                    <option value="percentage">Percentage</option>
                    <option value="fixed">Fixed</option>
                  </select>
                </div>
                <div>
                  <label>Markup Fee Value</label>
                  <input
                    type="number"
                    {...register("flightMarkupValue", { required: true })}
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>
                <div>
                  <label>Markup Fee Type</label>
                  <select
                    {...register("flightMarkupType")}
                    className="w-full border rounded p-2 mt-1"
                  >
                    <option value="percentage">Percentage</option>
                    <option value="fixed">Fixed</option>
                  </select>
                </div>
                <div>
                  <label>Enable Full Refund</label>
                  <select
                    {...register("flightEnableRefund")}
                    className="w-full border rounded p-2 mt-1"
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>
                <div>
                  <label>Refund Extra Charge (%)</label>
                  <input
                    type="number"
                    {...register("flightRefundCharge")}
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Charges - Hotel */}
            <div className="border p-4 rounded-md">
              <h4 className="font-semibold mb-2">Hotel Charges</h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label>Platform Fee Value</label>
                  <input
                    type="number"
                    {...register("hotelPlatformValue", { required: true })}
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>
                <div>
                  <label>Platform Fee Type</label>
                  <select
                    {...register("hotelPlatformType")}
                    className="w-full border rounded p-2 mt-1"
                  >
                    <option value="percentage">Percentage</option>
                    <option value="fixed">Fixed</option>
                  </select>
                </div>
                <div>
                  <label>Markup Fee Value</label>
                  <input
                    type="number"
                    {...register("hotelMarkupValue", { required: true })}
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>
                <div>
                  <label>Markup Fee Type</label>
                  <select
                    {...register("hotelMarkupType")}
                    className="w-full border rounded p-2 mt-1"
                  >
                    <option value="percentage">Percentage</option>
                    <option value="fixed">Fixed</option>
                  </select>
                </div>
                <div>
                  <label>Enable Full Refund</label>
                  <select
                    {...register("hotelEnableRefund")}
                    className="w-full border rounded p-2 mt-1"
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>
                <div>
                  <label>Refund Extra Charge (%)</label>
                  <input
                    type="number"
                    {...register("hotelRefundCharge")}
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>
              </div>
            </div>
            {/* Submit */}
            <div style={{ marginTop: "2rem" }}>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-pink-700 font-medium hover:bg-pink-800 active:bg-pink-700 rounded-lg duration-150"
              >
                {isLoading ? <ClipLoader color="#c4c2c2" /> : <>Create</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

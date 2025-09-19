import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Stack, Skeleton } from "@mui/material";
import Delete from "../../../components/Delete";
import { MdCircle } from "react-icons/md";
import {
  deletePricingConfig,
  getAllPricingConfig,
} from "../../../features/action/pricingConfig";

export const ViewPricingConfig = () => {
  const { pricingConfigData, isDeleted, isLoading } = useSelector(
    (state) => state.pricingConfig
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPricingConfig());
  }, []);

  useEffect(() => {
    if (isDeleted) {
      dispatch(getAllPricingConfig());
    }
  }, [isDeleted]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [id, setId] = useState();
  const handleDelete = () => {
    dispatch(deletePricingConfig(id));
    setShowDeleteModal(false);
    setId("");
  };

  const handleModal = (ID) => {
    setShowDeleteModal(true);
    setId(ID);
  };
  const handleAdd = () => {
    navigate("/add-pricing-config");
  };
  console.log(pricingConfigData);
  return (
    <>
      <div className="max-w-screen-xl mx-auto text-sm">
        {/* <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label> */}

        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              Manage Pricing Config
            </h3>
            <p className="text-gray-600 mt-2">
              This page is for handle pricing config by Create, Update and
              Delete.
            </p>
          </div>
          <div className="mt-3 md:mt-0">
            <button
              onClick={handleAdd}
              className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-700 active:bg-indigo-700 md:text-sm"
            >
              Add New Pricing Config
            </button>
          </div>
        </div>
        {/* <div class="relative mt-4 ">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Product"
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div> */}
        <div className="mt-5 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left ">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b justify-between">
              <tr>
                <th className="py-3 px-6">Region</th>
                <th className="py-3 px-6">Flights</th>
                <th className="py-3 px-6">Hotels</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {isLoading ? (
                <tr>
                  <td colSpan="6" className="text-center px-6 py-8">
                    <Stack spacing={4}>
                      <Skeleton variant="rounded" height={30} />
                      <Skeleton variant="rounded" height={25} />
                      <Skeleton variant="rounded" height={20} />
                      <Skeleton variant="rounded" height={20} />
                      <Skeleton variant="rounded" height={20} />
                    </Stack>
                  </td>
                </tr>
              ) : (
                Array.isArray(pricingConfigData) &&
                pricingConfigData.length > 0 &&
                pricingConfigData?.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item?.scope === "region" ? (
                        <>
                          {" "}
                          <span className="bg-blue-700 text-white my-2 rounded-md px-2 ">
                            {item?.region}
                          </span>
                        </>
                      ) : (
                        <span className="bg-purple-600 text-white my-2 rounded-md px-2 ">
                          GLOBAL
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className=" bg-slate-100 flex mb-2 rounded-md px-2 gap-2 w-fit">
                        <span className="text-slate-900 my-2 rounded-md px-2 ">
                          Markup Fee :
                        </span>
                        <span className="bg-white my-2 rounded-md px-2 ">
                          {item?.charges?.flight?.markupFee?.value}{" "}
                        </span>
                        <span className="my-2 capitalize bg-black text-white px-1 rounded-md">
                          {item?.charges?.flight?.markupFee?.type}
                        </span>
                      </div>
                      <div className=" bg-slate-100 flex mb-2 rounded-md px-2 gap-2 w-fit">
                        <span className="text-slate-900 my-2 rounded-md px-2 ">
                          Platform Fee :
                        </span>
                        <span className="bg-white my-2 rounded-md px-2 ">
                          {item?.charges?.flight?.platformFee?.value}{" "}
                        </span>
                        <span className="my-2 capitalize bg-black text-white px-1 rounded-md">
                          {item?.charges?.flight?.platformFee?.type}
                        </span>
                      </div>
                      {item?.charges?.flight?.refundConfig?.enableFullRefund ? (
                        <div className=" bg-slate-100 flex mb-2 rounded-md px-2 gap-2 w-fit">
                          <span className="text-slate-900 my-2 rounded-md px-2 ">
                            Full Refund Extra Charge :
                          </span>
                          <span className="bg-white  my-2 rounded-md px-2 ">
                            {
                              item?.charges?.flight?.refundConfig
                                ?.refundWithExtraCharge?.value
                            }{" "}
                          </span>
                          <span className="my-2 capitalize bg-black text-white px-1 rounded-md">
                            {
                              item?.charges?.flight?.refundConfig
                                ?.refundWithExtraCharge?.type
                            }
                          </span>
                        </div>
                      ) : (
                        <span className="bg-white my-2 rounded-md px-2 ">
                          Full Refund Not Enabled
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className=" bg-slate-100 flex mb-2 rounded-md px-2 gap-2 w-fit">
                        <span className="text-slate-900 my-2 rounded-md px-2 ">
                          Markup Fee :
                        </span>
                        <span className="bg-white my-2 rounded-md px-2 ">
                          {item?.charges?.hotel?.markupFee?.value}{" "}
                        </span>
                        <span className="my-2 capitalize bg-black text-white px-1 rounded-md">
                          {item?.charges?.hotel?.markupFee?.type}
                        </span>
                      </div>
                      <div className=" bg-slate-100 flex mb-2 rounded-md px-2 gap-2 w-fit">
                        <span className="text-slate-900 my-2 rounded-md px-2 ">
                          Platform Fee :
                        </span>
                        <span className="bg-white my-2 rounded-md px-2 ">
                          {item?.charges?.hotel?.platformFee?.value}{" "}
                        </span>
                        <span className="my-2 capitalize bg-black text-white px-1 rounded-md">
                          {item?.charges?.hotel?.platformFee?.type}
                        </span>
                      </div>
                      {item?.charges?.hotel?.refundConfig?.enableFullRefund ? (
                        <div className=" bg-slate-100 flex mb-2 rounded-md px-2 gap-2 w-fit">
                          <span className="text-slate-900 my-2 rounded-md px-2 ">
                            Full Refund Extra Charge :
                          </span>
                          <span className="bg-white  my-2 rounded-md px-2 ">
                            {
                              item?.charges?.hotel?.refundConfig
                                ?.refundWithExtraCharge?.value
                            }{" "}
                          </span>
                          <span className="my-2 capitalize bg-black text-white px-1 rounded-md">
                            {
                              item?.charges?.hotel?.refundConfig
                                ?.refundWithExtraCharge?.type
                            }
                          </span>
                        </div>
                      ) : (
                        <span className="bg-slate-100 text-red-600  my-2 rounded-md px-4 ">
                          Full Refund Not Enabled
                        </span>
                      )}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap  text-xs">
                      {item?.isActive ? (
                        <span className="bg-slate-50 flex gap-2  items-center text-green-600 py-1 my-2 rounded-md  ">
                          <MdCircle /> ACTIVE
                        </span>
                      ) : (
                        <span className="text-red-600 flex gap-2 items-center bg-slate-50 my-2 rounded-md">
                          <MdCircle /> INACTIVE
                        </span>
                      )}
                    </td>

                    <td className="px-3 whitespace-nowrap">
                      <button
                        onClick={() => {
                          navigate(`/update-admin`, { state: item });
                        }}
                        className="py-2 px-3 font-semibold text-green-500 hover:text-green-600 duration-150 hover:bg-gray-50 rounded-lg
                        "
                      >
                        Edit
                      </button>

                      {item?.scope === "region" && (
                        <button
                          onClick={() => {
                            handleModal(item?._id);
                          }}
                          className="py-2 px-3 leading-none font-semibold text-red-500 hover:text-red-600 duration-150 hover:bg-gray-50 rounded-lg"
                        >
                          Delete
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {showDeleteModal && (
        <Delete setModal={setShowDeleteModal} handleDelete={handleDelete} />
      )}
    </>
  );
};

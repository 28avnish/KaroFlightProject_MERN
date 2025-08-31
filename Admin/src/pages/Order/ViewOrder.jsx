import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Stack,Skeleton } from '@mui/material';
import { getAllOrders } from '../../features/action/order';
import ViewModalOrder from './ViewModalOrder';




const ViewOrder = () => {
    const { orderData, isDeleted, isLoading } = useSelector((state) => state.order);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showViewModal,setShowViewModal] = useState(false)
  const [viewData,setViewData]= useState()

  const handleViewModal=(itemData)=>{
    setShowViewModal(true)
    setViewData(itemData)
  }

  useEffect(() => {
    dispatch(getAllOrders());
   }, []);



  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-sm">
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>

        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              Manage Orders
            </h3>
            {/* <p className="text-gray-600 mt-2">
            This page is for handle products by Create, Update and Delete
            </p> */}
          </div>
          {/* <div className="mt-3 md:mt-0">
            <button
              onClick={handleAddTrek}
              className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-700 active:bg-indigo-700 md:text-sm"
            >
              Add Product
            </button>
          </div> */}
        </div>
        <div class="relative mt-4 ">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search ID" required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
        <div className="mt-5 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left ">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b justify-between">
              <tr>
                <th className="py-3 px-6">ID</th>
                <th className="py-3 px-6">Product</th>
                <th className="py-3 px-6">Amount</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Payment Method</th>
                <th className="py-3 px-6">Actions</th>
                
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
            {isLoading ? (
            <tr>
            <td colSpan="6" className="text-center px-6 py-8">
              <Stack spacing={4}>
                <Skeleton variant="rounded" height={30} />
                <Skeleton variant="rounded" height={25}/>
                <Skeleton variant="rounded" height={20}/>
                <Skeleton variant="rounded" height={20}/>
                <Skeleton variant="rounded" height={20}/>
              </Stack>
            </td>
          </tr>
          ) : (
            Array.isArray(orderData) && orderData.length > 0 && orderData?.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">{item?._id}</td>
           
                    <td className="px-6 py-4 whitespace-nowrap">
                    {Array.isArray(item?.product) && item?.product?.map((product,idy)=>(
                         <div className=' bg-slate-100 flex mb-2 rounded-md px-2 gap-2 w-fit' key={idy}>
                         <div className='flex items-center '><span className='bg-white  rounded-md px-2'>{idy+1} :</span> </div>
                         <div className='p-2 space-x-2'>
                      <span className='bg-white mb-2 rounded-md px-2 '> {product?.productId?.productName}</span>
                      <span className='bg-white mb-2 rounded-md px-2 '> Size : {product?.size}</span>
                  
                   
                      </div>
                      </div>
                     )) }

                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    ₹ {item?.amount }
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item?.email }
                    </td>
                    <td className={`${item?.paymentType==="Cash on delivery" ? "text-yellow-500":"text-green-700"} font-semibold text-center py-4 whitespace-nowrap`}>
                      {item?.paymentType }
                    </td>
           

                    <td className="px-3 whitespace-nowrap">
                      <button
                        onClick={() => {
                          handleViewModal(item)
                         }}
                        className="py-2 px-3 font-semibold text-green-500 hover:text-green-600 duration-150 hover:bg-gray-50 rounded-lg
                        "
                      >
                        View Full Details
                      </button>
              
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {showViewModal && (
        <ViewModalOrder setModal={setShowViewModal} viewData={viewData} />
      )}
    </>
  );
};

export default ViewOrder;

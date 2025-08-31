import React, { useEffect, useState } from 'react';
import Delete from '../../components/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Stack,Skeleton } from '@mui/material';
import { deleteTour, getAllTours } from '../../features/action/tour';
import ViewModalTour from './ViewModalTour';




const ViewTours = () => {
  const { tourData, isDeleted, isLoading } = useSelector((state) => state.tour);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTours());
   }, []);

   useEffect(() => {
 if(isDeleted){
   dispatch(getAllTours());
 }
   }, [isDeleted]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [id, setId] = useState();
  const handleDelete = () => {
    dispatch(deleteTour(id));
    setShowDeleteModal(false);
    setId('');
  };

  const handleModal = (ID) => {
    setShowDeleteModal(true);
    setId(ID);
  };

  const [showViewModal,setShowViewModal] = useState(false)
  const [viewData,setViewData]= useState()

  const handleViewModal=(itemData)=>{
    setShowViewModal(true)
    setViewData(itemData)
  }

  const handleAddTour = () => {
    navigate('/createTour');
  };


  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-sm">
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>

        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              Manage Tours
            </h3>
            <p className="text-gray-600 mt-2">
            This page is for handle tours by Create, Update and Delete
            </p>
          </div>
          
          <div className="mt-3 md:mt-0">
            <button
              onClick={handleAddTour}
              className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-700 active:bg-indigo-700 md:text-sm"
            >
              Add Tour
            </button>
          </div>
        </div>

        <div class="relative mt-4 ">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Tour, Season, Difficulty..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
     
        <div className="mt-5 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left ">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b justify-between">
              <tr>
                <th className="py-3 px-6">ID</th>
                <th className="py-3 px-6">Tour Name</th>
                <th className="py-3 px-6">Tour Banner</th>
                <th className="py-3 px-6">Price</th>
                <th className="py-3 px-6">Activity</th>
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
            Array.isArray(tourData) && tourData.length > 0 && tourData?.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">{idx+1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item?.title }
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img src={item?.banners[0]?.url} className='w-36 h-24 rounded-lg'/>
                    </td>
                   
              
                    <td className="px-6 py-4 whitespace-nowrap">
                      ₹ {item?.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item?.activity?.title}
                    </td>


                    <td className="px-3 whitespace-nowrap">
                    <button
                         onClick={() => {
                          handleViewModal(item)
                         }}
                        className="py-2 px-3  font-semibold text-indigo-500 hover:text-indigo-600 duration-150 hover:bg-gray-50 rounded-lg
                        "
                      >
                        View
                      </button>
                      
                      <button
                        onClick={() => {
                          navigate(`/updateTour/${item?._id}`, { state: item });
                        }}
                        className="py-2 px-3 font-semibold text-green-500 hover:text-green-600 duration-150 hover:bg-gray-50 rounded-lg
                        "
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          handleModal(item?._id);
                        }}
                        className="py-2 px-3 leading-none font-semibold text-red-500 hover:text-red-600 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        Delete
                      </button>
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
        {showViewModal && (
        <ViewModalTour setModal={setShowViewModal} viewData={viewData} />
      )}

    </>
  );
};

export default ViewTours;

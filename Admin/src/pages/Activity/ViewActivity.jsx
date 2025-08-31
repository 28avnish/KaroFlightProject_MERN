import React, { useEffect, useState } from 'react';
import Delete from '../../components/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Stack,Skeleton } from '@mui/material';
import { deleteActivity, getAllActivities } from '../../features/action/activity';
import ViewModalAcitvity from './ViewModalActivity';


const ViewActivities = () => {
  const { activityData, isDeleted, isLoading } = useSelector((state) => state.activity);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllActivities());
   }, []);

   useEffect(() => {
 if(isDeleted){
   dispatch(getAllActivities());
 }
   }, [isDeleted]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [id, setId] = useState();
  const handleDelete = () => {
    dispatch(deleteActivity(id));
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

  const handleAddActivity = () => {
    navigate('/createActivity');
  };


  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-sm">
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>

        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              Manage Activities
            </h3>
            <p className="text-gray-600 mt-2">
            This page is for handle activitys by Create, Update and Delete
            </p>
          </div>
          <div className="mt-3 md:mt-0">
            <button
              onClick={handleAddActivity}
              className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-700 active:bg-indigo-700 md:text-sm"
            >
              Add Activity
            </button>
          </div>
        </div>
      
        <div className="mt-5 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left ">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b justify-between">
              <tr>
                <th className="py-3 px-6">ID</th>
                <th className="py-3 px-6">Activity Title</th>
                <th className="py-3 px-6">Activity Thumbnail</th>
            
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
            Array.isArray(activityData) && activityData.length > 0 && activityData?.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">{idx+1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item?.title }
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img src={item?.banners[0]?.url} className='w-36 h-24 rounded-lg'/>
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
                          navigate(`/updateActivity/${item?._id}`, { state: item });
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
        <ViewModalAcitvity setModal={setShowViewModal} viewData={viewData} />
      )}
    </>
  );
};

export default ViewActivities;

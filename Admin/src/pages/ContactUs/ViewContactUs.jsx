import React, { useEffect, useState } from 'react';
import Delete from '../../components/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Stack,Skeleton } from '@mui/material';
import { deleteContactUs, getAllContactUs } from '../../features/action/contactUs';





const ViewContactUs = () => {
  const { contactUsData, isDeleted, isLoading } = useSelector((state) => state.contactUs);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContactUs());
   }, []);

   useEffect(() => {
 if(isDeleted){
   dispatch(getAllContactUs());
 }
   }, [isDeleted]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [id, setId] = useState();
  const handleDelete = () => {
    dispatch(deleteContactUs(id));
    setShowDeleteModal(false);
    setId('');
  };

  const handleModal = (ID) => {
    setShowDeleteModal(true);
    setId(ID);
  };

 

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-sm">
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>

        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              Manage ContactUs
            </h3>
            <p className="text-gray-600 mt-2">
            This page is for handle contactUs for View and Delete
            </p>
          </div>
    
        </div>
     
        <div className="mt-5 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left ">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b justify-between">
              <tr>
                <th className="py-3 px-6">ID</th>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Email</th>
          
         
                <th className="py-3 px-6">Mobile No.</th>
                <th className="py-3 px-6">Address</th>
                {/* <th className="py-3 px-6">Message</th> */}
                
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
            Array.isArray(contactUsData) && contactUsData.length > 0 && contactUsData?.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">{idx+1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    {item?.name }
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    {item?.email }
                    </td>
                   
              
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item?.phoneNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item?.address}
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap">
                      {item?.message}
                    </td> */}


                    <td className="px-3 whitespace-nowrap">
                 
                    
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
    

    </>
  );
};

export default ViewContactUs;

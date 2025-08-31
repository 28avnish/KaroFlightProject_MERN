import React, {useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { createRegion } from "../../features/action/region";




const CreateRegion = () => {

  const navigate=useNavigate()
  const dispatch = useDispatch();
  const {regionData,isLoading} = useSelector((state)=>state.region)


    const {register,handleSubmit,formState: { errors },control}=useForm( )



        const onSubmit = data =>{           
            dispatch(createRegion(data))
            
          }
       
          useEffect(() => {
            if(regionData?.status){
              navigate("/region")
            }
          }, [regionData]);

  return (
    <div>
        <div className="text-gray-600">
      <div className=" flex justify-center">
        <h3 className="text-gray-600 text-2xl font-semibold sm:text-3xl">
          Create region details
        </h3>
      </div>
      <div className="bg-white rounded-lg shadow p-4 py-6  sm:rounded-lg sm:max-w-5xl mt-8 mx-auto">
        <form className="space-y-6 mx-8 sm:mx-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
        <div className="w-full">
            <label className="font-medium">Region Name</label>
            <input 
            {...register('name', { required: "Region Name is required" })}
              type="text"
              className="w-full mt-2 me-35 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
            />
            
                    <span className="text-red-500">
                    {errors?.name?.message}
                    </span>
                  
        </div>
  
</div>

  




          <div style={{ marginTop: '4rem' }}>
              <button className="w-full px-4 py-2 text-white bg-pink-700  font-medium hover:bg-pink-800 active:bg-pink-700 rounded-lg duration-150">
              {isLoading ? (
                <ClipLoader color="#c4c2c2" />
              ) : (<>Create</>)}
              </button>
            </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default CreateRegion
import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useForm,Controller,useFieldArray } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { createTour } from "../../features/action/tour";
import Select from "react-select"
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ReactTextEditor from "../../components/TextEditor/JoditEditor";
import { getAllActivities } from "../../features/action/activity";
import defaultPhoto from "/placeholder.jpg"



const CreateTour = () => {

  const navigate=useNavigate()
  const dispatch = useDispatch();
  const {tourData,isLoading} = useSelector((state)=>state.tour)
  const {regionData} = useSelector((state)=>state.region)
  const {activityData} = useSelector((state)=>state.activity)

console.log(regionData)
    const {register,handleSubmit,formState: { errors },control}=useForm({
      defaultValues:{
        availableDates:[" "],
        tripHighlights:[" "],
        inclusions:[" "],
        exclusions:[" "]

      }
   
    })

const { fields: tripHighlightsFields, append: appendTripHighlights, remove: removeTripHighlights } = useFieldArray({
  control,
  name: "tripHighlights"
});

const { fields: availableDatesFields, append: appendAvailableDates, remove: removeAvailableDates } = useFieldArray({
  control,
  name: "availableDates"
});
const { fields: inclusionFields, append: appendInclusion, remove: removeInclusion } = useFieldArray({
  control,
  name: "inclusions"
});
const { fields: exclusionFields, append: appendExclusion, remove: removeExclusion } = useFieldArray({
  control,
  name: "exclusions"
});


    const [mapPhoto, setMapPhoto] = useState("");

    const handleMapPhoto = (e) => {
      const selectedPhoto = e.target.files[0];
      
      if (selectedPhoto) {
        
        const reader = new FileReader();
        reader.readAsDataURL(selectedPhoto);
        reader.onloadend = () => {
          setMapPhoto(reader.result);
        };
      }
    };

      ////// gallery //////
    
      const [gallery, setGallery] = useState([]);

      const [selectedGallery,setSelectedGallery]=useState([])
  
      const handleGalleryChange = (e) => {
        const selectedImages = e.target.files;
    
        if (selectedImages.length > 0) {
          // Create an array to store file objects
          const imagesArray = [];
    
          Array.from(selectedImages).forEach((image) => {
            // Create a new File object
            const fileObject = new File([image], image.name, {
              type: image.type,
            });
    
            imagesArray.push(fileObject);
          });
    
          // Update the state with the array of file objects
          setSelectedGallery((prevGallery) => [...prevGallery, ...imagesArray]);
    // Convert the file objects to base64 for UI display
  const base64Array = [];
  
  // Create a counter to keep track of when all images are processed
  let counter = 0;
  
  imagesArray.forEach((fileObject) => {
  const reader = new FileReader();
  reader.readAsDataURL(fileObject);
  reader.onloadend = () => {
  base64Array.push(reader.result);
  
  // Increment the counter
  counter++;
  
  // Check if all images are processed
  if (counter === imagesArray.length) {
  // Update the state with the base64Array
  setGallery(base64Array
    );
  }
  };
  });
  }
  };
  
  const removeGalleryImage = (index) => {
    setGallery((prevGallery) => {
      const updatedGallery = [...prevGallery];
      updatedGallery.splice(index, 1);
      return updatedGallery;
    });
  };
  
   ////// Banners  ///////
  
  const [banner, setBanner] = useState([]);
  
  const [selectedBanner,setSelectedBanner]=useState([])
  
  
      const handleBannerChange = (e) => {
        const selectedImages = e.target.files;
    
        if (selectedImages.length > 0) {
          // Create an array to store file objects
          const imagesArray = [];
    
          Array.from(selectedImages).forEach((image) => {
            // Create a new File object
            const fileObject = new File([image], image.name, {
              type: image.type,
            });
    
            imagesArray.push(fileObject);
          });
    
          // Update the state with the array of file objects
          setSelectedBanner((prevBanner) => [...prevBanner, ...imagesArray]);
    // Convert the file objects to base64 for UI display
  const base64Array = [];
  
  // Create a counter to keep track of when all images are processed
  let counter = 0;
  
  imagesArray.forEach((fileObject) => {
  const reader = new FileReader();
  reader.readAsDataURL(fileObject);
  reader.onloadend = () => {
  base64Array.push(reader.result);
  
  // Increment the counter
  counter++;
  
  // Check if all images are processed
  if (counter === imagesArray.length) {
  // Update the state with the base64Array
  setBanner(base64Array
    );
  }
  };
  });
  }
  };
  
  const removeBannerImage = (index) => {
    setBanner((prevBanner) => {
      const updatedBanner = [...prevBanner];
      updatedBanner.splice(index, 1);
      return updatedBanner;
    });
  };

  const months= [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" }
  ]

        const onSubmit = data =>{
    const {activity,season,difficulty,region,months}= data;
    const categoryValue= activity?.value
    const difficultyValue= difficulty?.value
    const regionValue= region?.value
    const seasonArray= season?.map((item,idx)=>item?.value)
    const monthArray= months?.map((item,idx)=>item?.value)

            const formData = new FormData();
            formData.append("title",data?.title)
            formData.append("price",data?.price)
            formData.append("activity",categoryValue);   
            formData.append("tripDuration",data?.tripDuration);
            formData.append("region",regionValue);
            formData.append("months",JSON.stringify(monthArray));
            formData.append("tripHighlights",JSON.stringify(data?.tripHighlights));
            formData.append("availableDates",JSON.stringify(data?.availableDates));
            formData.append("exclusions",JSON.stringify(data?.exclusions));
            formData.append("inclusions",JSON.stringify(data?.inclusions));
            formData.append("season",JSON.stringify(seasonArray))
            formData.append("difficulty",difficultyValue);
            formData.append("highestPoint",data?.highestPoint);
            formData.append("description",data?.description)
            formData.append("bannerDescription",data?.bannerDescription)
    
            formData.append("itinerary",data?.itinerary)
       
            Array.from(data?.gallery).forEach((img)=>{
              formData.append("gallery",img)
            })
            Array.from(data?.banners).forEach((img)=>{
              formData.append("banners",img)
            })
  if(data?.mapLogo)  
      {   Array.from(data?.mapLogo).forEach((img)=>{
              formData.append("mapLogo",img)
            })}
          
            
            dispatch(createTour(formData))
            
          }
       
          useEffect(() => {
            if(tourData?.status){
              navigate("/tour")
            }
          }, [tourData]);

          useEffect(() => {
         dispatch(getAllActivities())
          }, []);

  return (
    <div>
        <div className="text-gray-600">
      <div className=" flex justify-center">
        <h3 className="text-gray-600 text-2xl font-semibold sm:text-3xl">
          Create tour details
        </h3>
      </div>
      <div className="bg-white rounded-lg shadow p-4 py-6  sm:rounded-lg sm:max-w-5xl mt-8 mx-auto">
        <form className="space-y-6 mx-8 sm:mx-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
        <div className="w-full">
            <label className="font-medium">Tour Name</label>
            <input 
            {...register('title', { required: "Title is required" })}
              type="text"
              className="w-full mt-2 me-35 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
            />
            
                    <span className="text-red-500">
                    {errors?.title?.message}
                    </span>
                  
        </div>
       
          <div className="w-full">
            <label className="font-medium">Price</label>
            <input 
            {...register('price', { required: "Price is required",  pattern: {
                value: /^[0-9]+(\.[0-9]+)?$/,
                message: 'Price must be a number'
              } })}
              type="text"
              className="w-full mt-2 me-35 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
            />
            
                    <span className="text-red-500">
                    {errors?.price?.message}
                    </span>
                  
        </div>
       
        </div>

        <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
        <div className="w-full">
            <label className="font-medium">Activity</label>
            <Controller 
                                      control={control}
                                      name="activity"
                                      render={({ field }) => (
                                          <Select
                                              value={field.value}
                                              options={Array.isArray(activityData)&& activityData.length> 0 && activityData.map(item=> ({ value: item?._id, label: item?.title }))}
                                              onChange={(selectedOption) => field.onChange(selectedOption)}
                                              className="mt-2 "
                                              placeholder="Choose Activity "
                                             
                                              styles={{
                                                  control: (provided) => ({
                                                      ...provided,
                                                      border: '1px solid #CBD5E1', // Set custom border style
                                                      borderRadius: '0.400rem', // Set custom border radius
                                                      height: '40px', // Add height here
                                                  }),
                                                  placeholder: (provided) => ({
                                                      ...provided,
                                                      color: '#9CA3AF', // Set custom placeholder color
                                                  }),
                                              }}
 
                                          />
                                     )}
                                      rules={{ required: true }}
                                      
                                  />
             {errors.activity && (
                    <span className="text-red-500">
                      Activity is required
                    </span>
                  )}
          </div>

          <div className="w-full">
            <label className="font-medium">Season</label>
            <Controller 
                                      control={control}
                                      name="season"
                                      render={({ field }) => (
                                          <Select
                                          isMulti
                                              value={field.value}
                                              options={[{ value: "Winter", label: "Winter" },
                                              {value:"Autumn",label:"Autumn"},{value:"Monsoon",label:"Monsoon"},{value:"Spring",label:"Spring"},{value:"Summer",label:"Summer"},]}
                                              onChange={(selectedOption) => field.onChange(selectedOption)}
                                              className="mt-2 "
                                              placeholder="Choose Season "
                                              closeMenuOnSelect={false}
                                             
                                          />
                                     )}
                                      rules={{ required: true }}
                                      
                                  />
             {errors.season && (
                    <span className="text-red-500">
                      Season is required
                    </span>
                  )}
          </div>
      

</div>
        <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
       


          <div className="w-full">
            <label className="font-medium">Region</label>
            <Controller 
                                      control={control}
                                      name="region"
                                      render={({ field }) => (
                                          <Select
                                              value={field.value}
                                              options={Array.isArray(regionData)&& regionData.length> 0 && regionData.map(item=> ({ value: item?._id, label: item?.name }))}
                                              onChange={(selectedOption) => field.onChange(selectedOption)}
                                              className="mt-2 "
                                              placeholder="Choose Region"
                                             
                                          />
                                     )}
                                      rules={{ required: true }}
                                      
                                  />
             {errors.region && (
                    <span className="text-red-500">
                      Region is required
                    </span>
                  )}
          </div>
          <div className="w-full">
            <label className="font-medium">Months</label>
            <Controller 
                                      control={control}
                                      name="months"
                                      render={({ field }) => (
                                          <Select
                                          isMulti
                                              value={field.value}
                                              options={months}
                                              onChange={(selectedOption) => field.onChange(selectedOption)}
                                              className="mt-2 "
                                              placeholder="Choose Months "
                                              closeMenuOnSelect={false}
                                             
                                          />
                                     )}
                                      rules={{ required: true }}
                                      
                                  />
             {errors.months && (
                    <span className="text-red-500">
                      Month is required
                    </span>
                  )}
          </div>
      
      
</div>
<div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
<div className="w-full">
            <label className="font-medium">Banner Text</label>
            <input 
            {...register('bannerDescription', { required: true })}
              type="text"
              className="w-full mt-2  px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
            />
             {errors.bannerDescription && (
                    <span className="text-red-500">
                      Banner Description is required
                    </span>
                  )}
          </div>
</div>

   <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
<div className="w-full">
          
          <div className="font-medium space-y-6 "> Banners 
           <div className="flex mt-2 flex-wrap sm:h-[175px] overflow-auto border rounded-lg ps-2">
          
           {banner.map((image, index) => (
        <div key={index} className="relative mr-3">
         <div className="w-full mt-2"> <img
            className="w-20 h-20 sm:w-18 sm:h-16 mr-5 rounded cursor-pointer"
            src={image}
            alt={`Banner Image ${index + 1}`}
            onClick={() => removeBannerImage(index)}
          />
          </div>
          <div
            className="absolute top-0 right-0 px-1 cursor-pointer bg-rose-400 rounded-md hover:bg-red-600"
            onClick={() => removeBannerImage(index)}
          >
            <span className="text-white text-sm">X</span>
          </div>
        </div>
      ))}
          </div>
  
          <label htmlFor="banner_input" className="flex" >
  <InsertPhotoOutlinedIcon/>
  <div className="w-full px-2 border rounded-md border-slate-300 ">Click here to upload</div>
</label>
          <input
           {...register('banners', { onChange:(e)=>{handleBannerChange(e)} })}
           
           className="hidden" 
           id="banner_input" 
           type="file"
           multiple
           />
        
          </div>
          </div>

<div className="w-full">
          
          <div className="font-medium space-y-6 "> Gallery 
           <div className="flex mt-2 flex-wrap sm:h-[175px] overflow-auto border rounded-lg ps-2">
          
           {gallery.map((image, index) => (
        <div key={index} className="relative mr-3">
         <div className="w-full mt-2"> <img
            className="w-20 h-20 sm:w-18 sm:h-16 mr-5 rounded cursor-pointer"
            src={image}
            alt={`Gallery Image ${index + 1}`}
            onClick={() => removeGalleryImage(index)}
          />
          </div>
          <div
            className="absolute top-0 right-0 px-1 cursor-pointer bg-rose-400 rounded-md hover:bg-red-600"
            onClick={() => removeGalleryImage(index)}
          >
            <span className="text-white text-sm">X</span>
          </div>
        </div>
      ))}
          </div>
  
          <label htmlFor="gallery_input" className="flex" >
  <InsertPhotoOutlinedIcon/>
  <div className="w-full px-2 border rounded-md border-slate-300 ">Click here to upload</div>
</label>
          <input
           {...register('gallery', {onChange:(e)=>{handleGalleryChange(e)} })}
           
           className="hidden" 
           id="gallery_input" 
           type="file"
           multiple
           />
          
          </div>
          </div>
  </div>     


<div className=" text-2xl text-black">Trip Information</div>
<div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">

<div className="w-full">
            <label className="font-medium">Trip Difficulty</label>
            <Controller 
                                      control={control}
                                      name="difficulty"
                                      render={({ field }) => (
                                          <Select
                                              value={field.value}
                                              options={[{ value: "Easy", label: "Easy" },
                                                {value:"Easy-Moderate",label:"Easy-Moderate"},{value:"Moderate",label:"Moderate"},{value:"Moderate-Difficult",label:"Moderate-Difficult"},{value:"Difficult",label:"Difficult"}]}
                                              onChange={(selectedOption) => field.onChange(selectedOption)}
                                              className="mt-2 "
                                              placeholder="Choose Difficulty "
                                             
                                              styles={{
                                                  control: (provided) => ({
                                                      ...provided,
                                                      border: '1px solid #CBD5E1', // Set custom border style
                                                      borderRadius: '0.400rem', // Set custom border radius
                                                      height: '40px', // Add height here
                                                  }),
                                                  placeholder: (provided) => ({
                                                      ...provided,
                                                      color: '#9CA3AF', // Set custom placeholder color
                                                  }),
                                              }}
 
                                          />
                                     )}
                                      rules={{ required: true }}
                                      
                                  />
             {errors.difficulty && (
                    <span className="text-red-500">
                      Difficulty is required
                    </span>
                  )}
          </div>
       
          <div className="w-full">
            <label className="font-medium">Highest Point</label>
            <input 
            {...register('highestPoint', { required: "Highest Point is required" })}
              type="text"
              className="w-full mt-2 me-35 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
            />
            
                    <span className="text-red-500">
                    {errors?.highestPoint?.message}
                    </span>
                  
        </div>


</div>
<div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">

<div className="w-full">
            <label className="font-medium">Trip Duration</label>
            <input 
            {...register('tripDuration', { required: "Trip Duration is required",  pattern: {
              value: /^[0-9]+(\.[0-9]+)?$/,
              message: 'Trip Duration must be a number'
            }  })}
              type="text"
              className="w-full mt-2 me-35 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
              placeholder="Number of Days"
            />
            
                    <span className="text-red-500">
                    {errors?.tripDuration?.message}
                    </span>
                  
        </div>
<div className="w-full">
        </div>
       
</div>

<div className="flex justify-between">
<div className="text-2xl text-black">Available Dates  <span className="text-base">(Start Date - End Date - Group Size)</span></div>
<button
type="button"
className=" border rounded-md  bg-pink-700 text-white font-semibold text-xl px-2 hover:bg-pink-600"
onClick={() => appendAvailableDates("")}
>
+
</button>
</div>

<ul>
{availableDatesFields.map((item, index) => (
<li key={item.id}>

<div className="sm:flex justify-between gap-10">

<input
{...register(`availableDates.${index}.startDate`, { required: 'Start Date is required' })}
  type="date"
  className="w-full mt-2 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
/>
<input
{...register(`availableDates.${index}.endDate`, { required: 'End Date is required' })}
  type="date"
  className="w-full mt-2 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
/>
<input
{...register(`availableDates.${index}.totalSeats`, { required: 'Group Size is required' })}
  type="number"
  placeholder="Group Size"
  className="w-full mt-2 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
/>

</div>



{ index>0 && (
<button className=" border rounded-md bg-rose-500 text-white text-xs px-2 hover:bg-slate-950" type="button" onClick={() => removeAvailableDates(index)}>Delete</button>)
}
</li>

))}
</ul>

{errors.availableDates && (
  <span className="text-red-500">
    {errors.availableDates.message}
  </span>
)}


       
         <div className="sm:flex sm:space-y-0 justify-between ">

          
<label className="text-2xl text-black">Trip Highlights</label>
<button
type="button"
className=" border rounded-md  bg-pink-700 text-white font-semibold text-xl px-2 hover:bg-pink-600"
onClick={() => appendTripHighlights("")}
>
+
</button>
</div>
<ul>
{tripHighlightsFields.map((item, index) => (
<li key={item.id}>

<div className="sm:flex gap-10 ">
<div className="w-full">

<input
{...register(`tripHighlights.${index}`, { required: 'Trip Hilghlights are required' })}
  type="text"
  placeholder={ `TripHighlight ${index + 1}` }
  className="w-full mt-2 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
/>

</div>


</div>
{ index>0 && (
<button className=" border rounded-md bg-rose-500 text-white text-xs px-2 hover:bg-slate-950" type="button" onClick={() => removeTripHighlights(index)}>Delete</button>)
}
</li>

))}
</ul>

{errors.tripHighlights && (
  <span className="text-red-500">
    {errors.tripHighlights.message}
  </span>
)}






<div className="w-full space-y-3">
              <label className="text-2xl text-black">Overview</label>
            
                   <textarea 
            {...register('description', { required: true })}
              type="text"
              className="w-full mt-2  px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
            />

              {errors?.description && (
                <span className=" text-red-500">
                  Description is required
                </span>
              )}
            </div>
          
          <div className="text-2xl text-black">Itinerary</div>
     
<div className="full space-y-3">
              <label className="font-medium ">Itinerary</label>
              
              <Controller
                name={`itinerary`}
                control={control}
                render={({ field: { onChange} }) => (
                  <ReactTextEditor
                  
                    onChange={(data) => onChange(data)}
                  
                  />
                )}
                rules={{ required: true }}
              />

              {errors?.itinerary && (
                <span className=" text-red-500">
                  Itinerary is required
                </span>
              )}
            </div>

            <div className="w-full">
          
          <div className=" space-y-6"> <span className="text-2xl text-black">Map</span>
           
          <img class="mt-2 w-20 h:20 sm:w-44 sm:h-36 rounded" src={mapPhoto || defaultPhoto} alt="No Image"/>
          <label htmlFor="file_input1" className="flex
          " ><InsertPhotoOutlinedIcon/>
          <div className="w-1/2 px-2 border rounded-md border-slate-300 ">Click here to upload</div></label>
         
          <input
           {...register('mapLogo', { onChange:(e)=>{handleMapPhoto(e)} })}
         
           className="hidden w-54 sm:w-[455px] border-slate-300 text-sm text-gray-500 border rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input1" type="file"/>
         
          </div>
         
          </div>



<div className="w-full space-y-3">
<div className="sm:flex sm:space-y-0 justify-between ">

          
<label className="text-2xl text-black">Inclusions</label>
<button
type="button"
className=" border rounded-md  bg-pink-700 text-white font-semibold text-xl px-2 hover:bg-pink-600"
onClick={() => appendInclusion("")}
>
+
</button>
</div>
<ul>
{inclusionFields.map((item, index) => (
<li key={item.id}>

<div className="sm:flex gap-10 ">
<div className="w-full">

<input
{...register(`inclusions.${index}`, { required: 'Inclusions are required' })}
  type="text"
  placeholder={ `Inclusion ${index + 1}` }
  className="w-full mt-2 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
/>

</div>


</div>
{ index>0 && (
<button className=" border rounded-md bg-rose-500 text-white text-xs px-2 hover:bg-slate-950" type="button" onClick={() => removeInclusion(index)}>Delete</button>)
}
</li>

))}
</ul>

{errors.inclusions && (
  <span className="text-red-500">
    {errors.inclusions.message}
  </span>
)}

<div className="sm:flex sm:space-y-0 justify-between ">

          
<label className="text-2xl text-black">Exclusions</label>
<button
type="button"
className=" border rounded-md  bg-pink-700 text-white font-semibold text-xl px-2 hover:bg-pink-600"
onClick={() => appendExclusion("")}
>
+
</button>
</div>
<ul>
{exclusionFields.map((item, index) => (
<li key={item.id}>

<div className="sm:flex gap-10 ">
<div className="w-full">

<input
{...register(`exclusions.${index}`, { required: 'Exclusions are required' })}
  type="text"
  placeholder={ `Exclusion ${index + 1}` }
  className="w-full mt-2 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
/>

</div>


</div>
{ index>0 && (
<button className=" border rounded-md bg-rose-500 text-white text-xs px-2 hover:bg-slate-950" type="button" onClick={() => removeExclusion(index)}>Delete</button>)
}
</li>

))}
</ul>

{errors.exclusions && (
  <span className="text-red-500">
    {errors.exclusions.message}
  </span>
)}

</div>

          <div style={{ marginTop: '4rem' }}>
              <button className="w-full btn-grad:hover btn-grad">
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

export default CreateTour
import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useForm, useFieldArray } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { createProduct } from "../../features/action/product";




const CreateProduct = () => {

  const navigate=useNavigate()
  const dispatch = useDispatch();
  const {productData,isLoading} = useSelector((state)=>state.product)

  // const schema = z.object({
  //   price: z.number("Price is a number ")
  // })

    const {register,handleSubmit,formState: { errors },control}=useForm(
        {
            defaultValues:{
              
              price:[ {weight:"", price:""},]
              
            }
          }
    )

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

const { fields: priceFields, append: appendPrice, remove: removePrice } = useFieldArray({
    control,
    name: "price"
  });
   

        const onSubmit = data =>{
    
            const formData = new FormData();
            formData.append("productName",data?.productName)
            formData.append("discount",data?.discount)
            formData.append("price",JSON.stringify(data?.price))
            formData.append("description",data?.description)
            Array.from(data?.banners).forEach((img)=>{
              formData.append("banners",img)
            })
           
            dispatch(createProduct(formData))
            
          }
       
          useEffect(() => {
            if(productData?.status){
              navigate("/product")
            }
          }, [productData]);

  return (
    <div>
        <div className="text-gray-600">
      <div className=" flex justify-center">
        <h3 className="text-gray-600 text-2xl font-semibold sm:text-3xl">
          Create product details
        </h3>
      </div>
      <div className="bg-white rounded-lg shadow p-4 py-6  sm:rounded-lg sm:max-w-5xl mt-8 mx-auto">
        <form className="space-y-6 mx-8 sm:mx-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
        <div className="w-full">
            <label className="font-medium">Product Name</label>
            <input 
            {...register('productName', { required: "Product Name is required" })}
              type="text"
              className="w-full mt-2 me-35 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
            />
            
                    <span className="text-red-500">
                    {errors?.productName?.message}
                    </span>
                  
        </div>
        <div className="w-full">
            <label className="font-medium">Discount</label>
            <input 
            {...register('discount', { required: "Discount is required" })}
              type="number"
              className="w-full mt-2 me-35 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
            />
            
                    <span className="text-red-500">
                    {errors?.discount?.message}
                    </span>
                  
        </div>
</div>

        <label className="font-medium ">Size and Price </label>
<button
type="button"
className=" border rounded-md  bg-pink-700 text-white font-semibold text-xl px-2 hover:bg-slate-950"
onClick={() => appendPrice({ price: ""})}
>
+
</button>

<ul>
{priceFields.map((item, index) => (
<li key={item.id}>

<div className="sm:flex gap-10 ">
<div className="w-full">

<input
{...register(`price.${index}.size`, { required: 'Size is required' })}
  type="text"
  placeholder=" Size "
  className="w-full mt-2 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
/>

</div>
<div className="w-full">

<input
{...register(`price.${index}.mrp`, { required: 'MRP is required' })}
  type="text"
  placeholder="MRP"
  className="w-full mt-2 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
/>

</div>

</div>
{ index>0 && (
<button className=" border rounded-md bg-rose-500 text-white text-xs px-2 hover:bg-slate-950" type="button" onClick={() => removePrice(index)}>Delete</button>)
}
</li>

))}
</ul>
{errors.price && (
<span className="text-red-500">
  Both Fields are required
</span>
)}


<div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
<div className="w-full">
          
          <div className="font-medium space-y-6 "> Banners 
           <div className="flex mt-2 flex-wrap sm:h-[225px] overflow-auto border rounded-lg ps-2">
          
           {banner.map((image, index) => (
        <div key={index} className="relative mr-3">
         <div className="w-full mt-2"> <img
            className="w-20 h-20 sm:w-40 sm:h-24 mr-5 rounded cursor-pointer"
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
  <div className="w-1/2 px-2 border rounded-md border-slate-300 ">Click here to upload</div>
</label>
          <input
           {...register('banners', { required:"Banner is required" ,onChange:(e)=>{handleBannerChange(e)} })}
           
           className="hidden" 
           id="banner_input" 
           type="file"
           multiple
           />
        
          </div>

          <span className="text-red-500">
                    {errors?.banners?.message}
                    </span>
          </div>


  </div>

  <div className="w-full">
            <label className="font-medium">Description</label>
            <textarea 
            {...register('description', { required: "Description is required" })}
              type="text"
              className="w-full mt-2 me-35 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
            />
            
                    <span className="text-red-500">
                    {errors?.productName?.message}
                    </span>
                  
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

export default CreateProduct
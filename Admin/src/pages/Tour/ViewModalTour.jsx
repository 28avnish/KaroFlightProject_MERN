import React from 'react'
import parse from "html-react-parser"

export default function ViewModalTour ({viewData,setModal}) {
    const createdAtDate = viewData?.createdAt ? new Date(viewData?.createdAt) : null;
  const formattedDate = createdAtDate ? createdAtDate.toISOString().split('T')[0] : '';

  return (
    <div
    className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
    aria-labelledby="header-3a content-3a"
    aria-modal="true"
    tabindex="-1"
    role="dialog"
  >
    {/*    <!-- Modal --> */}
    <div
      className="flex h-[90%] w-[80%] sm:w-[80%]  flex-col gap-6 overflow-hidden rounded bg-white p-6 shadow-xl "
      id="modal"
      role="document"
    >
      {/*        <!-- Modal header --> */}
      <header id="header-3a" className="flex items-center gap-4">
        <h3 className="flex-1 text-xl font-medium text-slate-700">
        Tour
        </h3>
        <div>Last Updated : {formattedDate} </div>
        <button
          onClick={() => setModal(false)}
          className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
          aria-label="close dialog"
        >
          <span className="relative only:-mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              role="graphics-symbol"
              aria-labelledby="title-79 desc-79"
            >
              <title id="title-79">Icon title</title>
              <desc id="desc-79">
                A more detailed description of the icon
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>
      </header>
      {/*        <!-- Modal body --> */}
      <div id="content-3a" className="flex-1 overflow-auto space-y-10 ">

      <table className="w-full table-auto text-sm">
    <tbody className="text-gray-600">
      <tr>
        <td className="py-2 px-4 border border-gray-300">Tour Name</td>
        <td className="py-2 px-4 border border-gray-300">{viewData ? viewData?.title: ''}</td>
      </tr>
      <tr>
        <td className="py-2 px-4 border border-gray-300">Region</td>
        <td className="py-2 px-4 border border-gray-300">{viewData ? viewData?.region?.name: ''}</td>
      </tr>
      <tr>
        <td className="py-2 px-4 border border-gray-300">Price</td>
        <td className="py-2 px-4 border border-gray-300">{viewData ? viewData?.price : ''}</td>
      </tr>
      <tr>
        <td className="py-2 px-4 border border-gray-300">Tour Banner</td>
        <td className="py-2 px-4 border border-gray-300">{viewData ? <img src={viewData?.banners[0]?.url}  className="rounded-lg h-32 w-52" /> : ''}</td>
      </tr>
   

      <tr>
        <td className="py-2 px-4 border border-gray-300">Activity Type</td>
        <td className="py-2 px-4 border border-gray-300">
        
        {viewData?.activity?.title}
        
          
        </td>
      </tr>
      <tr>
        <td className="py-2 px-4 border border-gray-300">Highest Point</td>
        <td className="py-2 px-4 border border-gray-300">
        
        {viewData ?  viewData?.highestPoint : ''}
          
        </td>
      </tr>
      <tr>
        <td className="py-2 px-4 border border-gray-300">Trip Duration</td>
        <td className="py-2 px-4 border border-gray-300">
        
        {viewData ? viewData?.tripDuration: ''}
          
        </td>
      </tr>
      <tr>
        <td className="py-2 px-4 border border-gray-300">Trip Grade</td>
        <td className="py-2 px-4 border border-gray-300">
        
        {viewData ? viewData?.difficulty: ''}
          
        </td>
      </tr>
      <tr>
        <td className="py-2 px-4 border border-gray-300">Seats</td>
        <td className="py-2 px-4 border border-gray-300">
          {Array.isArray(viewData?.availableDates) && viewData?.availableDates?.map((date,idy)=>(
                         <div className=' bg-slate-100 flex mb-2 rounded-md px-2 gap-2 w-fit' key={idy}>
                         <div className='flex items-center '><span className='bg-white  rounded-md px-2'>{idy+1} :</span> </div>
                         <div className='p-2 space-x-2'>
                      <span className='bg-white mb-2 rounded-md px-2 font-medium text-green-700'> Total Booked : {date?.totalBooked}</span>
                      <span className='bg-white mb-2 rounded-md px-2 font-medium text-red-700'> Vacant Seats : {date?.vacantSeats}</span>
                      <span className='bg-white mb-2 rounded-md px-2 font-medium text-blue-700'> Total Seats : {date?.totalSeats}</span>
                      </div>
                      </div>
                     )) }
          
        </td>
      </tr>
  
      
      <tr>
        <td className="py-2 px-4 border border-gray-300">Overview</td>
        <td className="py-2 px-4 border border-gray-300">{viewData ? parse(viewData?.description) : ''}</td>
      </tr>
      <tr>
        <td className="py-2 px-4 border border-gray-300">Trip Highlights</td>
        <td className="py-2 px-4 border border-gray-300 flex flex-col">
       {viewData ? viewData?.tripHighlights?.map((item)=>
       <span className='bg-slate-100 mb-2 rounded-md px-2'>{item}</span>) : ''} </td>
      </tr>
      <tr>
        <td className="py-2 px-4 border border-gray-300">Itinerary</td>
        <td className="py-2 px-4 border border-gray-300">
        
        {viewData ? parse(viewData?.itinerary || "No Data Found") : ''}
          
        </td>
      </tr>
      <tr>
        <td className="py-2 px-4 border border-gray-300">Map Image</td>
        <td className="py-2 px-4 border border-gray-300">{viewData ? <img src={viewData?.mapLogo?.url}  className="rounded-lg h-32 w-52" /> : ''}</td>
      </tr>
      <tr>
        <td className="py-2 px-4 border  border-gray-300">Inclusions</td>
       
        <td className="py-2 px-4 border border-gray-300 flex flex-col">
       {viewData ? viewData?.inclusions?.map((item)=>
       <span className='bg-slate-100 mb-2 rounded-md px-2'>{item}</span>) : ''} </td>
      </tr>
      <tr>
        <td className="py-2 px-4 border  border-gray-300">Exclusions</td>
       
        <td className="py-2 px-4 border border-gray-300 flex flex-col">
       {viewData ? viewData?.exclusions?.map((item)=>
       <span className='bg-slate-100 mb-2 rounded-md px-2'>{item}</span>) : ''} </td>
      </tr>


          <tr>
        <td className="py-2 px-4 border border-gray-300">Banner Text</td>
        <td className="py-2 px-4 border border-gray-300">{viewData ? viewData?.bannerDescription : ''}</td>
      </tr>
      <tr>
  <td className="py-2 px-4 border border-b-2 border-gray-300">Gallery</td>
  <td className="py-2 px-4 border border-gray-300">
    <div className="flex flex-wrap gap-3">
      {viewData && viewData.gallery ? (
        viewData.gallery.map((item, idx) => (
          <div key={idx} className="sm:w-[26%] "> {/* Set width to 1/3 for 3 images per row */}
            <img src={item?.url} alt={`Gallery Image ${idx}`} className="rounded-lg h-32 w-56 mb-2" />
          </div>
        ))
      ) : (
        'No gallery images available'
      )}
    </div>
  </td>
</tr>
      <tr>
  <td className="py-2 px-4 border border-b-1 border-gray-300">Banners</td>
  <td className="py-2 px-4 border border-gray-300">
    <div className="flex flex-wrap gap-3">
      {viewData && viewData.banners ? (
        viewData.banners.map((item, idx) => (
          <div key={idx} className="sm:w-[26%] "> {/* Set width to 1/3 for 3 images per row */}
            <img src={item?.url} alt={`Gallery Image ${idx}`} className="rounded-lg h-32 w-56 mb-2" />
          </div>
        ))
      ) : (
        'No Banner images available'
      )}
    </div>
  </td>
</tr>
      

      
    </tbody>
  </table>
      </div>

</div>
</div>
  )
}

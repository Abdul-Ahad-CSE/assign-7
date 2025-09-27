import React, { use } from 'react'

const MainDesign=({customData})=> {

    const customerData = use(customData)
    console.log(customerData)

  return (
   <div className="flex flex-col md:flex-row h-auto gap-4">
    
    <div className=" leftDesign w-full gap-2 md:w-2/3 md: grid md:grid-cols-2 border border-border-black p-4 bg-white">
      
      {

        customerData.map(customer=>
        <div className="card md:w-96 bg-base-100 shadow-xl border border-gray-100">
  <div className="card-body p-5">
    {/* Title and Status Badge Row */}
    <div className="flex justify-between items-start mb-1">
      <h2 className="card-title text-lg font-semibold text-gray-800 leading-tight">
        {customer.title}
      </h2>
      <div className="badge badge-lg bg-green-100 text-green-700 border-green-200 font-semibold p-3">
        {customer.status}
      </div>
    </div>

    {/* Description */}
    <p className="text-sm text-gray-600 mb-4">
      {customer.description}
    </p>

    {/* Metadata Row */}
    <div className="flex justify-between items-center text-xs text-gray-500">
      <div className="flex items-center space-x-2">
        {/* ID */}
        <span className="font-medium text-gray-700">{customer.id}</span>
        {/* Priority Tag */}
        <div className="badge bg-red-100 text-red-600 border-red-200 font-bold uppercase p-2">
          {customer.priority}
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        {/* Assignee */}
        <span>{customer.name}</span>
        {/* Date (using a calendar icon) */}
        <span className="flex items-center">
          {/* Note: daisyUI doesn't have built-in icons, so I'll simulate a calendar icon with a simple class and content, or you can use an icon library like Heroicons */}
          <span className="mr-1 text-base">🗓️</span>
          {customer.createdAt}
        </span>
      </div>
    </div>
  </div>
</div>)

      }


       

    </div>

    

    <div className="w-full md:w-1/3 flex flex-col gap-4">
        
      
        <div className=" rightDesignTop border border-border-black p-4 bg-white">
          <div><p>Task Status</p></div>
        </div>

       
        <div className=" rightDesignBot border border-border-black p-4 bg-white">
          <div><p>Resolved Task</p></div>
        </div>

    </div>
</div>
  )
}
export default MainDesign


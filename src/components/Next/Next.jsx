import React from 'react'
import vectorImg from '../../assets/vector1.png'
const Next=()=>{
  return (
   <div className="flex flex-wrap justify-center items-center gap-6 p-8 bg-[#f5f5f5]">

  <div className="relative flex h-40 w-80 flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg">
    <div className="absolute inset-0 bg-[url('./Next')] bg-cover bg-center opacity-20"></div>

    <div className="relative z-10">
      <p className="text-center text-lg">In-Progress</p>
      <p className="text-center text-6xl font-bold">0</p>
    </div>
  </div>

  <div className="relative flex h-40 w-80 flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-green-400 to-teal-500 text-white shadow-lg">
    <div className="absolute inset-0 bg-[url('${vectorImg.src}')] bg-cover bg-center opacity-20"></div>
    
    <div className="relative z-10">
      <p className="text-center text-lg">Resolved</p>
      <p className="text-center text-6xl font-bold">0</p>
    </div>
  </div>

</div>
  )
}
export default Next;
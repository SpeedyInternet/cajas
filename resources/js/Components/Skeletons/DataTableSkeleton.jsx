import React from 'react';

export default function DataTableSkeleton() {
  return (
    <article className="relative rounded-xl p-4 bg-neutral-white/70 sm:p-6 lg:p-3 font-averta h-full shadow-xl">
      <strong
        className=" animate-pulse absolute top-0 left-1/2 transform -translate-x-1/2 rounded-es-2xl rounded-ee-2xl px-1.5 py-1 
          text-[15px] text-center text-blue-800 font-bold"
      >
        Cargando facuras...
      </strong>
      <strong className="px-3 py-1.5 text-[20px] font-medium text-white" />
      <div className='rounded-xl shadow-2xl'>
        <div className='h-2'></div>
        <div className="animate-pulse p-3">
          <div className="h-2 p-4"></div>
          {[...Array(3)].map((_, index) => (
            <>
            <div key={index} className="flex space-x-4 mb-4">
              <div className="w-1/5 h-6 bg-gray-400 rounded"></div>
              <div className="w-1/5 h-6 bg-gray-400 rounded"></div>
              <div className="w-1/5 h-6 bg-gray-400 rounded"></div>
              <div className="w-1/5 h-6 bg-gray-400 rounded"></div>
              <div className="w-1/5 h-6 bg-gray-400 rounded"></div>
            </div>
            <div className='h-3'></div>
            <div className="grid grid-cols-10 p-2 gap-5 bg-gray-200 rounded-es-2xl rounded-ee-2xl shadow-2xl font-averta">
              <div className="col-span-2">
                <div className="h-6 bg-gray-400 rounded w-3/4 mb-2"></div>
                <div className="h-6 bg-gray-400 rounded w-1/2"></div>
              </div>
            <div className='h-3'></div>
              <div className="col-span-6 bg-gray-200 rounded-xl shadow-lg ">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="flex space-x-4 mb-4 bg-slate-400">
                    <div className="w-1/4 h-6 bg-gray-400 rounded"></div>
                    <div className="w-1/4 h-6 bg-gray-400 rounded"></div>
                    <div className="w-1/4 h-6 bg-gray-400 rounded"></div>
                    <div className="w-1/4 h-6 bg-gray-400 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className='h-3 '></div>
            </>
          ))}
        </div>
      </div>
    </article>
  );
}

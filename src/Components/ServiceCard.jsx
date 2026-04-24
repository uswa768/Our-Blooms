import React from 'react'
import HeroPic from '../assets/hero.jpeg'  

const ServiceCard = ({ number, title, desc, image, imageAlt = '' }) => {
  return (
    <div className="flex flex-col items-center text-center py-16 px-6 border-b border-gray-200 last:border-b-0">

      
      <span className="text-5xl font-black text-[#1E1E1E] mb-8"
        style={{ fontFamily: "'Playfair Display', serif" }}>
        {number}
      </span>

     
      <div className="w-40 h-40 rounded-2xl overflow-hidden mb-10 shadow-md bg-gray-100">
        
        {image ? (
          <img src={HeroPic} alt={imageAlt} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
            
          </div>
        )}
      </div>

     
      <h2 className="text-4xl md:text-5xl font-black text-[#1E1E1E] uppercase tracking-tight mb-4"
        style={{ fontFamily: "'Playfair Display', serif" }}>
        {title}
      </h2>
 
      <p className="text-[#6B6B6B] text-base max-w-xl leading-relaxed">
        {desc}
      </p>
    </div>
  )
}

export default ServiceCard

import React from 'react'

const Button = ({ children, onClick, variant = 'primary', className = '', type = 'button' }) => {

  const base = "inline-flex items-center gap-2 px-7 py-3 font-semibold text-sm tracking-widest uppercase transition-all duration-200 cursor-pointer rounded-sm"

  const variants = {
    primary: "bg-[#F5C842] text-[#1E1E1E] hover:bg-yellow-400 hover:scale-105 active:scale-95 shadow-sm",
    outline: "bg-transparent border-2 border-[#1E1E1E] text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white active:scale-95",
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span className="text-base leading-none">•</span>
      {children}
    </button>
  )
}

export default Button

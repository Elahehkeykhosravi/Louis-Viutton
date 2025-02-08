import React from 'react'
import MenuIcon from "@mui/icons-material/Menu"; 
import SearchIcon from "@mui/icons-material/Search"; 
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; 
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"; 



export const NavBar2 = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-10">
    <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">
    
      <div className="flex items-center space-x-4">
        <button className="text-2xl">
          <MenuIcon fontSize="small" />
        </button>
        <button className="text-xl">
          <SearchIcon fontSize="small" />
        </button>
      </div>

      
      <div className="text-2xl font-bold uppercase tracking-widest">
        LOUIS VUITTON
      </div>

     
      <div className="flex items-center space-x-4">
        <button className="text-sm">Contact Us</button>
        <button className="text-xl">
          <FavoriteBorderIcon fontSize="small" />
        </button>
        <button className="text-xl">
          <ShoppingBagIcon fontSize="small" />
        </button>
      </div>
    </div>
  </nav>
  )
}


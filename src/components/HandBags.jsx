
import React from 'react'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const HandBags = () => {
  const bags = [
    {img:"https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-all-in-bb--M13480_PM2_Front%20view.png?wid=490&hei=490", name: "Louis Vuitton Tote", 
        price: "$2,500", Link:""},
    {img:"https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-low-key-messenger--M13151_PM2_Front%20view.png?wid=490&hei=490",  name: "Classic Monogram Bag", 
        price: "$3,200", Link:""},
    {img:"https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-wallet-on-chain-rosy--M13569_PM2_Front%20view.png?wid=490&hei=490",  name: "Luxury Shoulder Bag", 
        price: "$4,100", Link:""},
    {img:"https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-wallet-on-chain-low-key--M12147_PM2_Front%20view.png?wid=490&hei=490",  name: "Limited Edition Handbag", 
        price: "$5,000", Link:""}
  ]
    return (
        <section className="text-center my-10">
      <h2 className="text-3xl font-semibold">Women’s Handbags</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 px-2 max-w-6xl mx-auto">
        {bags.map((item, index) => (
          <div key={index} className="relative text-center">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-64 object-cover rounded-lg"
             
            />

           
            <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">   
                <FavoriteBorderIcon className="text-black opacity-70" fontSize="small" />
            </button>

           
            <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
            <p className="text-gray-600">{item.price}</p>
          </div>
        ))}
      </div>

      <button className="mt-6 bg-transparent border-2 border-b-neutral-700 text-black px-6 py-2 rounded-4xl" >Shop Now</button>
    </section>
  )
}

import React from 'react'

export const Services = () => {
  const lvservices=[

    {img:"https://us.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_ContactUs_WW_HP_Services_Push_20240425_DII.jpg?wid=600" , link:""},
    {img:"https://us.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_ContactUs_WW_HP_Services_Push_20240425_DII.jpg?wid=600", link:""},
    {img:"https://us.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Personalization_WW_HP_Services_Push_20240425_DII.jpg?wid=600",link:""}

  ]
    return (
        <section className="text-center my-36">
        <h2 className="text-3xl font-semibold">Louis Vuitton Services</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 px-4">
          {lvservices.map((item, index) => (
            <a key={index} href={item.link} className="block">
              <img src={item.img} alt="Service" className="w-full h-64 object-cover rounded-lg" />
            </a>
          ))}
        </div>
      </section>
  )
}

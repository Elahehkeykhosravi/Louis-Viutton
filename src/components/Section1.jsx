import React from 'react'
import { useState, useEffect } from 'react'

export const Section1 = () => {
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('https://67a519a7c0ac39787a1d7d13.mockapi.io/LVapi/Items')
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch");
                }
                return res.json();
            })
            .then((data) => {
                setCategories(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            });
    }, []);

    return (
        <section className="text-center my-10">
            <h2 className="text-3xl font-semibold">Explore a Selection of the Maison’s Creations</h2>
            <p className="text-gray-300 mt-2">Order by 12PM ET today for complimentary Saturday delivery by 2/8</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 px-20">
                {categories.map((item, index) => (
                    <a key={index} href={item.link} className="block">
                        <img src={item.producImage} alt={item.productName} className="w-full h-96 object-cover " />
                        <figcaption className="mt-2 text-lg">{item.productName}</figcaption>
                    </a>
                ))}
            </div>
        </section>

    )
}

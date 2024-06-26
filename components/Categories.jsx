import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '@/services'


const Categories = () => {
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8 dark:text-white dark:bg-gray-800'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
                Topics
            </h3>
            {categories.map((category) => (
                <Link href={`/category/${category.slug}`} key={category.slug} className='text-md hover:underline'>
                    {/*Creates a span of links*/}
                    <span className='cursor-pointer block pb-3'>
                        {category.name}
                    </span>
                </Link>
            ))}
        </div>
    )
}

export default Categories
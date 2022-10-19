import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Product = () => {
    const datas = useLoaderData()
    console.log(datas)
    return (
        <div>
            <h3 className='my-7'>This is Product</h3>
            <div className='grid grid-cols-3 gap-4 mx-24'>
                {
                    datas.categories.map(data => (
                        <div className='' key={data.idCategory}>
                            <img className='w-full rounded' src={data.strCategoryThumb} alt="" />
                            <h2>{data.strMeal}</h2>
                            <Link to={`/products/${data.strCategory}`}>
                                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Show Products
                                    </span>
                                </button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;
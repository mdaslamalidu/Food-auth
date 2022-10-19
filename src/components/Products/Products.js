import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const pd = useLoaderData()
    console.log(pd.meals)
    return (
        <div>
            <h2>This is single products</h2>
            <div className='w-1/2 mx-auto'>
                {
                    pd.meals.slice(0,1).map(p => (
                        <div>
                            <h3>{p.strMeal}</h3>
                            <img className='w-full h-96' src={p.strMealThumb} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;
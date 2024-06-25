import React, { useEffect, useState } from 'react'
import Product from './Product'
import axios from 'axios';

const Mainitem = () => {
    let [category1, setfinalcategory] = useState([])
    let [product1, setfinalproduct] = useState([])
    let [catname, setcatname] = useState('')
    let getCategory = () => {
        axios.get('https://dummyjson.com/products/category-list')
            .then((res) => res.data)
            .then((finalRes) => {
                setfinalcategory(finalRes)
            })
    }

    useEffect(() => {
        getCategory();
        getProduct();
    }, [])
    let getProduct = () => {
        axios.get('https://dummyjson.com/products')
            .then((res) => res.data)
            .then((finalRes) => {
                setfinalproduct(finalRes.products)
            })
    }
    let pitem = product1.map((productvalue, index) => {
        return (
            <Card key={index} pdata={productvalue} />
        )
    })
    useEffect(() => {
        if (catname !== "") {
            axios.get(`https://dummyjson.com/products/category/${catname}`)
                .then((res) => res.data)
                .then((finalRes) => {
                    setfinalproduct(finalRes.products)
                })
        }
    })
    const handleHomeClick = () => {
        window.location.reload();
    };

    return (
        <div>
            <div>
                <div className='flex flex-row justify-between'>
                    <div>
                        <h1 className='py-4 pl-96 text-center text-[40px] font-bold font-serif underline'>Our Products</h1>
                    </div>

                    <div>   <button
                        className='sticky top-4 right-4 bg-blue-500 text-white px-4 py-4 mt-3 mr-48 rounded'
                        onClick={handleHomeClick}>
                        Home
                    </button>
                    </div>
                </div>
                <div className='max-w-[1320px] mx-auto'>
                    <div className='grid grid-cols-[30%_auto] gap-9'>
                        <div>
                            <Product category1={category1} setcatname={setcatname} />
                        </div>
                        <div>
                            <div className='grid grid-cols-3 gap-4 py-11'>

                                {
                                    product1.length >= 1 ?
                                        pitem
                                        : "nodata found"}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mainitem


function Card({ pdata }) {
    return (
        <div>
            <div className='shadow-lg text-center pb-4'>
                <img src={pdata.images} alt='reload' className='w-full h-[220px]' />
                <h1>{pdata.title}</h1>
                <p>{pdata.brand}</p>
                <p>$ {pdata.price}</p>
            </div>
        </div>
    )
}

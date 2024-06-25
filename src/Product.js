import React from 'react'

const Product = ({ category1, setcatname }) => {
    let mouse = category1.map((v, i) => {
        return (
            <li onClick={() => setcatname(v)} key={i} className='bg-[#ccc] p-2 mb-3 font-serif font-[500] text-[15px]'>
                {v}
            </li>
        )
    })

    return (
        <div>
            <h1 className='font-serif text-2xl p-[10px] font-semibold'>Category</h1>
            <ul>
                {mouse}
            </ul>
        </div>
    )
}

export default Product

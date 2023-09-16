import React from 'react';
import ProductCard from './ProductCard';
import Service from "./Service";

function DigitalProducts() {
    return (
        <>
            <h1>DIGITAL PRODUCTS</h1>
            <div className='borderline'></div>
            <br/>
            <br />
            <ProductCard/>
            <br />
            <Service />
        </>
    )
}

export default DigitalProducts; 
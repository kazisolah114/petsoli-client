"use client";

import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        const handleFetchProduct = async () => {
            const res = await fetch('http://localhost:3001/shop/products');
            const data = await res.json();
            setProducts(data);
        }
        handleFetchProduct();
    }, [])
    return products;
};

export default useProducts;
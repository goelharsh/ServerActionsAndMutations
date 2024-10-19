

// Till now we know that to fetch some data we can use fetch api method 
// async function fetchListofProducts() {
//     const res = await fetch('https://dummyjson.com/products');
//     const data = await res.json();
//     return data?.products;
// }

import { fetchListofProducts } from "@/app/actions";

 

export default async function ServerActionsExample() {
    // async function fetchListofProducts() {
    //     'use server'

    //     const res = await fetch('https://dummyjson.com/products');
    //     const data = await res.json();
    //     return data?.products;
    // }
    const products = await fetchListofProducts();
    console.log(products);
    return (
        <div>
            <h1>SeverActionsExample - for server components</h1>
            <ul>
                {
                    products && products.length>0 ? (
                        products.map((item)=> <li>{item.title}</li>)
                    ) : (<h2>No products found</h2>)
                }
            </ul>
        </div>
    )
}
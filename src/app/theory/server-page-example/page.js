

// Till now we know that to fetch some data we can use fetch api method 
// async function fetchListofProducts() {
//     const res = await fetch('https://dummyjson.com/products');
//     const data = await res.json();
//     return data?.products;
// }
 

export default async function ServerActionsExample() {
    async function fetchListofProducts() {
        'use server'

        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        return data?.products;
    }
    const products = await fetchListofProducts();
    console.log(products);
    return (
        <div>
            <h1>SeverActionsExample - for server components</h1>
        </div>
    )
}
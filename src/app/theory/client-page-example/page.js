'use client'

const { fetchListofProducts } = require("@/app/actions");
const { useEffect, useState } = require("react")

function ClientPageExample(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    async function getListofProducts() {
        setLoading(true)
        const data = await fetchListofProducts();
        console.log(data);
        if(data){
            setProducts(data);
            setLoading(false)
        }
    }
    useEffect(()=>{
        getListofProducts();
    },[])
    if(loading){
        return <h1>Loading data pls wait</h1>
    }
    return (
        <div>
            <h1>Client page server actions example</h1>
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

export default ClientPageExample
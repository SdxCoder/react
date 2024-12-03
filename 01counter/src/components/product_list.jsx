import { ThemeContext } from "../theme/theme_provider";
import ProductItem from "./product_item";
import { useContext, useEffect, useState } from 'react';



function ProductList() {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(null);
    const { isThemeLight } = useContext(ThemeContext);
    const backgroundColor = isThemeLight() ? "white" : "whitesmoke";

    async function fetchData() {
        setLoading(true);
        const response = await fetch('https://dummyjson.com/products');
        const json = await response.json();
        setLoading(false);
        setProducts(json.products);
    }

    useEffect(() => {
        fetchData()
    }, []);
    return (
        <>
            <h1>Products</h1>
            {
                isLoading ? <p>Loading</p> :
                    <ul style={{ backgroundColor: backgroundColor }}>
                        {
                            products.map((value, index) => (
                                <ProductItem key={value.id} title={value.title} description={value.description} images={value.images} />
                            ))
                        }
                    </ul>
            }
        </>
    );
}

export default ProductList;
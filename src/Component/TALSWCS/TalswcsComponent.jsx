import React,{useState,useEffect} from 'react'
import DataTable from 'react-data-table-component';
import axios from 'axios';

const ProductTable = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3001/talswcs');
            setProducts(response.data);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Product List</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Item ID</th>
                        <th scope="col">Item Password</th>
                        <th scope="col">Added By</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{product.item}</td>
                            <td>{product.itemId}</td>
                            <td>{product.itemPassword}</td>
                            <td>{product.addedBy}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable
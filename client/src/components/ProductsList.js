import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import ProductItem from './ProductItem';
import { Context } from '..';


const ProductsList = () => {
    const {product} = useContext(Context)

    return (
        <Row className='d-flex mt-5 mb-5'>
            {product.products.map(product =>
                <ProductItem key={product.id} product={product}/>
            )}
        </Row>
    );
};

export default ProductsList;
import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import ProductsList from '../components/ProductsList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchBrands, fetchProducts, fetchTypes } from '../http/productAPI';
import Pages from '../components/Pages';

const Products = observer(() => {
    const { product } = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data)) 
        fetchBrands().then(data => product.setBrands(data)) 
        fetchProducts(null, null, 1, 6).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchProducts(product.selectedType.id, product.selectedBrand.id, product.page, 6).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [product.page, product.selectedType, product.selectedBrand])

    return (
        <Container className='p-3'>
            <Row className="mt-3">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <ProductsList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Products;
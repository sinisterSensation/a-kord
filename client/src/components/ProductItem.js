import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import { PRODUCT_ROUTE } from '../utils/consts';

const ProductItem = ({product}) => {
    const navigation = useNavigate()
    return (
        <Col md={4} onClick={() => navigation(PRODUCT_ROUTE + '/' + product.id)}>
            <Card style={{width: 300, cursor: 'pointer', borderRadius: 5, cursor: "pointer"}} id='goodsCard' className='d-flex align-items-center p-3'>
                <Image src={process.env.REACT_APP_API_URL + product.img} width={200} height={200} style={{borderRadius: 5}}/>
                <div className='d-flex align-items-center flex-column mt-3'>
                    <div>{product.name}</div>
                    <div className='mt-2'>{product.price + ' ₽'}</div>
                </div>
            </Card>
        </Col>
    );
};

export default ProductItem;
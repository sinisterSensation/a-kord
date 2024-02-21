import React, { useContext } from 'react';
import { Container, Image, Col, Card } from 'react-bootstrap';
import { Context } from '..';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const Shop = observer(() => {
    const {product} = useContext(Context)
    const navigation = useNavigate()

    return (
        <>
            <h3 id='cardName'>Новые товары</h3>
            <Container className='d-flex justify-content-around' id='mainCard'>
                {product.products.slice(-3).map(product =>
                    <Col key={product.id} md={3} onClick={() => navigation(PRODUCT_ROUTE + '/' + product.id)}>
                        <Card style={{width: 300, cursor: 'pointer', borderRadius: 5}} id='goodsCard' className='d-flex align-items-center p-3'>
                            <Image src={process.env.REACT_APP_API_URL + product.img} width={200} height={200} style={{borderRadius: 5}}/>
                            <div className='d-flex align-items-center flex-column mt-4'>
                                <div>{product.name}</div>
                                <div className='mt-2'>{product.price + ' ₽'}</div>
                            </div>
                        </Card>
                    </Col>    
                )}  
            </Container>
        </>
    );
});

export default Shop;
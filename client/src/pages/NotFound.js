import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';

const NotFound = () => {
    const navigation = useNavigate()

    return (
        <Container style={{height: window.innerHeight - 100, marginTop: 130, width: 600}}>
            <Card style={{background: 'rgb(50, 51, 56)', borderRadius: 14, fontSize: 25, color: "white"}} className='mt-4 d-flex justify-content-around align-items-center flex-column p-5'>
                    <p>Ошибка 404</p>
                    <p>Not Found</p>
                    <Button 
                        onClick={() => navigation(SHOP_ROUTE)}
                        className='mt-3 align-self-center'
                        variant="outline-light"
                        style={{ width: '340px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', background: '#5C5C5C', border: '0.5px solid #FFF', borderRadius: '7px' }} 
                        type="submit">
                            Вернуться на главную
                    </Button>
            </Card>
        </Container>
    );
};

export default NotFound;
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateType from '../components/modals/CreateType';
import CreateProduct from '../components/modals/CreateProduct';

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)

    return (
        <Container className='d-flex flex-column' style={{margin: '15rem auto 18rem auto'}}>
            <Button 
                variant="outline-light" onClick={() => setTypeVisible(true)} 
                className='mt-3 p-2' style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', background: '#5C5C5C', border: '0.5px solid #FFF', borderRadius: '7px' }} type="submit"
            >
                Добавить тип
            </Button>
            <Button 
                variant="outline-light"  onClick={() => setBrandVisible(true)}
                className='mt-3 p-2' style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', background: '#5C5C5C', border: '0.5px solid #FFF', borderRadius: '7px'}} type="submit"
            >
                Добавить бренд
            </Button>
            <Button 
                variant="outline-light"  onClick={() => setProductVisible(true)}
                className='mt-3 p-2' style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', background: '#5C5C5C', border: '0.5px solid #FFF', borderRadius: '7px'}} type="submit"
            >
                Добавить товар
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
        </Container>
    );
};

export default Admin;

<Button >Выйти</Button>

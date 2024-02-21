import React from 'react';
import { FormControl, Button,  Form, Container, Card } from 'react-bootstrap';


const SignUpService = () => {
    return (
        <Container  
            className='d-flex justify-content-center align-items-center flex-column'
            style={{height: window.innerHeight - 250}}
        >
        <div className='m-auto d-flex align-items-center flex-column'>
            <h2 className='m-auto'>Записаться</h2>
            <Card id='serviceForm' style={{width: 600, backgroundColor: '#323338', borderRadius: 14}} className='p-5 mt-5'>
                <Form className='d-flex flex-column'>
                    <FormControl
                       className="mt-3"
                       placeholder="Введите имя и фамилию..." 
                    />
                    <FormControl
                       className="mt-3"
                       placeholder="Введите ваш email..." 
                    />
                    <FormControl
                       className="mt-3"
                       type='date'
                    />
                    <Form.Select aria-label="Default select example" className='mt-3'>
                        <option>Выберите услугу</option>
                        <option value="1">Балансировка</option>
                        <option value="2">Замена резины</option>
                        <option value="3">Подкачка колёс</option>
                        <option value="4">Ремонт проколов</option>
                        <option value="5">Бескамерный ремонт</option>
                    </Form.Select>
                    <Button 
                        className='mt-3 align-self-center'
                        variant="outline-light"
                        style={{ width: '340px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', background: '#5C5C5C', border: '0.5px solid #FFF', borderRadius: '7px' }} 
                        type="submit">
                            Записаться
                    </Button>
                </Form>
            </Card>
        </div>    
        </Container>
    );
};

export default SignUpService;
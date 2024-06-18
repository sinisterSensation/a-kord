import React, { useState } from 'react';
import { FormControl, Button,  Form, Container, Card } from 'react-bootstrap';

const SignUpService = () => {
    const [formEntries, setFormEntries] = useState([]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        service: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const entries = JSON.parse(localStorage.getItem('serviceEntries')) || [];
        localStorage.setItem('serviceEntries', JSON.stringify([...entries, formData]));
            
        setFormEntries([...formEntries, formData]);
            
        setFormData({
            name: '',
            email: '',
            date: '',
            service: ''
        });
    };

    return (
        <Container  
            className='d-flex justify-content-center align-items-center flex-column'
            style={{height: window.innerHeight - 250}}
        >
            <div className='m-auto d-flex align-items-center flex-column'>
                <h2 className='m-auto'>Записаться</h2>
                <Card id='serviceForm' style={{width: 600, backgroundColor: '#323338', borderRadius: 14}} className='p-5 mt-5'>
                    <Form className='d-flex flex-column' onSubmit={handleSubmit}>
                        <FormControl
                            className="mt-3"
                            placeholder="Введите имя и фамилию..."
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <FormControl
                            className="mt-3"
                            placeholder="Введите ваш email..."
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <FormControl
                            className="mt-3"
                            type='date'
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                        <Form.Select aria-label="Default select example" className='mt-3' name="service" value={formData.service} onChange={handleChange} required>
                            <option>Выберите услугу</option>
                            <option value="Балансировка">Балансировка</option>
                            <option value="Замена резины">Замена резины</option>
                            <option value="Подкачка колёс">Подкачка колёс</option>
                            <option value="Ремонт проколов">Ремонт проколов</option>
                            <option value="Бескамерный ремонт">Бескамерный ремонт</option>
                        </Form.Select>
                        <Button 
                            className='mt-3 align-self-center'
                            variant="outline-light"
                            style={{ width: '340px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', background: '#5C5C5C', border: '0.5px solid #FFF', borderRadius: '7px' }} 
                            type="submit"
                        >
                            Записаться
                        </Button>
                    </Form>
                </Card>
            </div>    
        </Container>
    );
};

export default SignUpService;

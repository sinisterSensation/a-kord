import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Contacts = () => {
    return (
        <Container style={{height: window.innerHeight - 54, marginTop: 90}}>
            <h2 style={{marginLeft: 30}}>Контакты</h2>
            <Card id="contacts-media" style={{background: 'rgb(50, 51, 56)', borderRadius: 14}} className='mt-4 d-flex justify-content-around align-items-center flex-row p-5'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35585.874771384326!2d47.22295122345954!3d56.12049088895671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415a3795e45e0e67%3A0x928e2a012cf027e7!2z0JAt0JrQvtGA0LQ!5e0!3m2!1sru!2sru!4v1708264545205!5m2!1sru!2sru" width="550" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{border: 0, borderRadius: 28}}></iframe>
                <div style={{color: "white", fontSize: 25}}>
                    <p>Номер: +79520253411</p>
                    <p>Адрес: улица Космонавта<br />Николаева, 14А, Чебоксары,<br /> Чувашская Република, 428003</p>
                    <p>Часы работы: 8:00-18:00</p>
                </div>
            </Card>
        </Container>
    );
};

export default Contacts;
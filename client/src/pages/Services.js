import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { SIGNUPSERVICE_ROUTE } from '../utils/consts';
// import { Context } from '..';

const Services = () => {
    const navigation = useNavigate()
    // const {service} = useContext(Context)

    return (
        <Container style={{marginTop: 90, marginBottom: 90}}>
        <h2 id='cardName' style={{marginLeft: 30}}>Услуги</h2>
            <Row>
                <Card onClick={() => navigation(SIGNUPSERVICE_ROUTE)} style={{backgroundColor: '#323338', color: 'white', fontSize: 22, cursor: 'pointer'}} className='p-5 d-flex flex-row align-items-center justify-content-between'>
                    <Col md={3} className='d-flex justify-content-center'>
                        <div>Балансировка</div>
                    </Col>
                    <Col md={8}>
                        <div className='d-flex flex-row'>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R12</div>
                                <div>90₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R13</div>
                                <div>90₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R14</div>
                                <div>90₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R15</div>
                                <div>105₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R16</div>
                                <div>105₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R17</div>
                                <div>135₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R18</div>
                                <div>155₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R19</div>
                                <div>155₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R20</div>
                                <div>155₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R21</div>
                                <div>185₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R22</div>
                                <div>185₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R23</div>
                                <div>185₽</div>
                            </Col>
                        </div>                
                    </Col>
                </Card>
            </Row>
            <Row className='mt-3'>
                <Card onClick={() => navigation(SIGNUPSERVICE_ROUTE)} style={{backgroundColor: '#323338', color: 'white', fontSize: 22, cursor: 'pointer'}} className='p-5 d-flex flex-row align-items-center justify-content-between'>
                    <Col md={3} className='d-flex justify-content-center'>
                        <div>Замена резины</div>
                    </Col>
                    <Col md={8}>
                        <div className='d-flex flex-row'>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R12</div>
                                <div>90₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R13</div>
                                <div>100₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R14</div>
                                <div>105₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R15</div>
                                <div>105₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R16</div>
                                <div>135₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R17</div>
                                <div>155₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R18</div>
                                <div>155₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R19</div>
                                <div>185₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R20</div>
                                <div>185₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R21</div>
                                <div>185₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R22</div>
                                <div>185₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R23</div>
                                <div>185₽</div>
                            </Col>
                        </div>                
                    </Col>
                </Card>
            </Row>
            <Row className='mt-3'>
                <Card onClick={() => navigation(SIGNUPSERVICE_ROUTE)} style={{backgroundColor: '#323338', color: 'white', fontSize: 22, cursor: 'pointer'}} className='p-5 d-flex flex-row align-items-center justify-content-between'>
                    <Col md={3} className='d-flex justify-content-center'>
                        <div>Ремонт проколов</div>
                    </Col>
                    <Col md={8}>
                    <div className='d-flex flex-row'>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R12</div>
                                <div>300₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R13</div>
                                <div>300₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R14</div>
                                <div>300₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R15</div>
                                <div>300₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R16</div>
                                <div>300₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R17</div>
                                <div>300₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R18</div>
                                <div>300₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R19</div>
                                <div>300₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R20</div>
                                <div>400₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R21</div>
                                <div>400₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R22</div>
                                <div>400₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R23</div>
                                <div>400₽</div>
                            </Col>
                        </div>                    
                    </Col>
                </Card>
            </Row>
            <Row className='mt-3'>
                <Card onClick={() => navigation(SIGNUPSERVICE_ROUTE)} style={{backgroundColor: '#323338', color: 'white', fontSize: 22, cursor: 'pointer'}} className='p-5 d-flex flex-row align-items-center justify-content-between'>
                    <Col md={3} className='d-flex justify-content-center'>
                        <div>Подкачка колёс</div>
                    </Col>
                    <Col md={8}>
                        <div className='d-flex flex-row'>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R12</div>
                                <div>90₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R13</div>
                                <div>90₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R14</div>
                                <div>105₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R15</div>
                                <div>105₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R16</div>
                                <div>135₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R17</div>
                                <div>135₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R18</div>
                                <div>155₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R19</div>
                                <div>155₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R20</div>
                                <div>155₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R21</div>
                                <div>185₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R22</div>
                                <div>185₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R23</div>
                                <div>185₽</div>
                            </Col>
                        </div>                
                    </Col>
                </Card>
            </Row>
            <Row className='mt-3'>
                <Card onClick={() => navigation(SIGNUPSERVICE_ROUTE)} style={{backgroundColor: '#323338', color: 'white', fontSize: 22, cursor: 'pointer'}} className='p-5 d-flex flex-row align-items-center justify-content-between'>
                    <Col md={3} className='d-flex justify-content-center'>
                        <div>Бескамерный ремонт</div>
                    </Col>
                    <Col md={8}>
                        <div className='d-flex flex-row'>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R12</div>
                                <div>200₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R13</div>
                                <div>200₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R14</div>
                                <div>250₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R15</div>
                                <div>250₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R16</div>
                                <div>250₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R17</div>
                                <div>300₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R18</div>
                                <div>300₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R19</div>
                                <div>400₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R20</div>
                                <div>400₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R21</div>
                                <div>400₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R22</div>
                                <div>400₽</div>
                            </Col>
                            <Col className='d-flex align-items-center flex-column' md={1}>
                                <div>R23</div>
                                <div>400₽</div>
                            </Col>
                        </div>                
                    </Col>
                </Card>
            </Row>
        </Container>
    );
};

export default Services;

import React from 'react';
import logo from '../img/logo.svg';
import {  CONTACTS_ROUTE, PRODUCTS_ROUTE, SERVICES_ROUTE, SHOP_ROUTE, SIGNUPSERVICE_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import vk from '../img/vk.svg';
import ds from '../img/discord.svg';
import tg from '../img/telegramm.svg';
import whatsapp from '../img/watsapp.svg';


const Footer = () => {
    const navigation = useNavigate()
    return (
    <>
    <footer className="footer" style={{ backgroundColor: '#323338', color: 'white', fontSize: 18}}>
      <Container id='footer'>
        <Row>
          <Col id="footer-media-clear" lg={3} sm={12} className="d-flex justify-content-center align-items-center">
            <ul className="pages-list d-flex flex-column mt-3" style={{ listStyle: "none", gap: '0.3rem'}}>
              <li className="footerMediaClear"><a style={{ textDecoration: "none", color: "white", cursor: 'pointer' }} onClick={() => navigation(SHOP_ROUTE)}>Главная</a></li>
              <li className="footerMediaClear"><a style={{ textDecoration: "none", color: "white", cursor: 'pointer' }} onClick={() => navigation(PRODUCTS_ROUTE)}>Товары</a></li>
              <li className="footerMediaClear"><a style={{ textDecoration: "none", color: "white", cursor: 'pointer' }} onClick={() => navigation(SIGNUPSERVICE_ROUTE)}>Записаться</a></li>
            </ul>
          </Col>
          <Col lg={3} sm={12} className="d-flex justify-content-center align-items-center">
            <ul className="pages-list d-flex flex-column mt-3" style={{ listStyle: "none", gap: '0.3rem' }}>
              <li className="footerMediaClear"><a style={{ textDecoration: "none", color: "white", cursor: 'pointer' }} onClick={() => navigation(SERVICES_ROUTE)}>Виды услуг</a></li>
              <li className="footerMediaClear"><a style={{ textDecoration: "none", color: "white", cursor: 'pointer' }} onClick={() => navigation(CONTACTS_ROUTE)}>Контакты</a></li>
            </ul>
          </Col>
          <Col lg={6} sm={12}>
            <Row>
              <Col sm={6} className="d-flex justify-content-center align-items-center">
                <div className="contact" style={{ textAlign: 'center'}}>
                  <p>Телефон: +79520253411</p>
                  <div className="social-media d-flex" style={{ flexDirection: 'row', gap: '3%', justifyContent: 'center' }}>
                  <a href='https://vk.com/sinister_sensation'>
                    <img src={vk} style={{ width: '35px', height: '35px' }} alt="mainLogo" />
                  </a>
                  <a href='https://t.me/+T42HUDAhlNYzM2Ni'>
                    <img src={tg} style={{ width: '35px', height: '35px' }} alt="mainLogo" />
                  </a>
                  <a href='https://discordapp.com/users/sinister_sensation/'>
                    <img src={ds} style={{ width: '35px', height: '35px' }} alt="mainLogo" />
                  </a>
                  <a href='https://wa.me/79520253411?text=%D0%93%D0%B5%D0%BD%D0%B8%D0%B9%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8%20%D0%B2%D1%8B%3F'>
                    <img src={whatsapp} style={{ width: '35px', height: '35px' }} alt="mainLogo" />
                  </a>
                  </div>
                </div>
              </Col>
              <Col sm={6}>
                <div className="logo">
                    <img src={logo} style={{ width: '200px', height: '150px' }} alt="mainLogo" />   
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
    );
};

export default Footer;
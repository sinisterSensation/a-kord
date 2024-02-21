import React, { useContext } from 'react';
import { Context } from '..';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import logo from '../img/logo.svg';
import search from '../img/search.svg';
import { BASKET_ROUTE, CONTACTS_ROUTE, SERVICES_ROUTE, SHOP_ROUTE, SIGNUPSERVICE_ROUTE, PRODUCTS_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom';
import {observer} from 'mobx-react-lite';


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigation = useNavigate()

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
    }

    return (  
        <Navbar expand="lg" style={{ backgroundColor: '#323338' }}>
          <div className="container-fluid" style={{ marginLeft: '5px' }}>
            <Navbar.Brand href="#" onClick={() => navigation(SHOP_ROUTE)}>
                <img src={logo} style={{ width: '140px', height: '35px' }} alt="mainLogo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent" className="d-flex flex-column">
              <div style={{ marginTop: '15px' }}>
                <Form className="d-flex" role="search">
                  <FormControl
                    type="search"
                    placeholder="Найти"
                    aria-label="Search"
                    style={{ marginRight: '3px !important', borderRadius: '7px 0px 0px 7px', width: '55rem', border: 'transparent', outline: '#FFFFFF', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset' }}
                  />
                  <Button variant="outline-none" style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', background: '#5C5C5C', borderRadius: '0px 7px 7px 0px', color: 'white' }} type="submit">
                    <img style={{ width: '22px' }} src={search} alt="search-logo" />
                  </Button>
                </Form>
              </div>
              <div>
              {user.isAuth ? 
                <Nav className="me-auto mb-2 mb-lg-0" style={{ gap: '50px' }}>
                <Nav.Item>
                  <Nav.Link href="#" style={{ color: 'white' }} onClick={() => navigation(PRODUCTS_ROUTE)}>Товары</Nav.Link>
                </Nav.Item>
                <div className="vr" style={{ color: 'white', marginTop: '7px', height: '32px' }}></div>
                <Nav.Item>
                  <Nav.Link href="#" style={{ color: 'white' }} onClick={() => navigation(SIGNUPSERVICE_ROUTE)}>Записаться</Nav.Link>
                </Nav.Item>
                <div className="vr" style={{ color: 'white', marginTop: '7px', height: '32px' }}></div>
                <Nav.Item>
                  <Nav.Link href="#" style={{ color: 'white' }} onClick={() => navigation(SERVICES_ROUTE)}>Виды услуг</Nav.Link>
                </Nav.Item>
                <div className="vr" style={{ color: 'white', marginTop: '7px', height: '32px' }}></div>
                <Nav.Item>
                  <Nav.Link href="#" style={{ color: 'white' }} onClick={() => navigation(CONTACTS_ROUTE)}>Контакты</Nav.Link>
                </Nav.Item>
                <div className="vr" style={{ color: 'white', marginTop: '7px', height: '32px' }}></div>
                <Nav.Item>
                  <Nav.Link href="#" style={{ color: 'white' }} onClick={() => navigation(BASKET_ROUTE)}>Корзина</Nav.Link>
                </Nav.Item>
              </Nav>
              :
              <Nav className="me-auto mb-2 mb-lg-0" style={{ gap: '50px' }}>
                  <Nav.Item>
                    <Nav.Link href="#" style={{ color: 'white' }} onClick={() => navigation(PRODUCTS_ROUTE)}>Товары</Nav.Link>
                  </Nav.Item>
                  <div className="vr" style={{ color: 'white', marginTop: '7px', height: '32px' }}></div>
                  <Nav.Item>
                    <Nav.Link href="#" style={{ color: 'white' }} onClick={() => navigation(SIGNUPSERVICE_ROUTE)}>Записаться</Nav.Link>
                  </Nav.Item>
                  <div className="vr" style={{ color: 'white', marginTop: '7px', height: '32px' }}></div>
                  <Nav.Item>
                    <Nav.Link href="#" style={{ color: 'white' }} onClick={() => navigation(SERVICES_ROUTE)}>Виды услуг</Nav.Link>
                  </Nav.Item>
                  <div className="vr" style={{ color: 'white', marginTop: '7px', height: '32px' }}></div>
                  <Nav.Item>
                    <Nav.Link href="#" style={{ color: 'white' }} onClick={() => navigation(CONTACTS_ROUTE)}>Контакты</Nav.Link>
                  </Nav.Item>
                </Nav>
              }        
              </div>
            </Navbar.Collapse>
            {user.isAuth ?
            <div style={{ marginRight: '5px' }}>
              <Button variant="outline-light" style={{ width: '80px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', background: '#5C5C5C', border: '0.5px solid #FFF', borderRadius: '7px' }} onClick={() => navigation(ADMIN_ROUTE)} type="submit">Админ</Button>
              <Button 
                variant="outline-light" 
                style={{ width: '80px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', background: '#5C5C5C', border: '0.5px solid #FFF', borderRadius: '7px', marginLeft: 5 }} 
                onClick={() => logOut()} 
                type="submit"
              >
                Выйти
              </Button>
            </div>
            :
            <div style={{ marginRight: '5px' }}>
              <Button 
                onClick={() => navigation(LOGIN_ROUTE)} 
                variant="outline-light" 
                style={{ width: '165px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', background: '#5C5C5C', border: '0.5px solid #FFF', borderRadius: '7px' }} 
                type="submit"
              >
                Войти
              </Button>
            </div>
          }      
          </div>
        </Navbar>
    );
  });
  
export default NavBar;

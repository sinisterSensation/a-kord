import React, { useContext, useState } from 'react';
import { Card, Container, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigate()

    const click = async (e) => {
        e.preventDefault()
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigation(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }    
    }

    return (
        <Container 
            className='d-flex justify-content-center align-items-center flex-column'
            style={{height: window.innerHeight - 100}}
        >
        <div className='m-auto d-flex align-items-center flex-column'>
            <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            <Card style={{width: 600, backgroundColor: '#323338', borderRadius: 14}} className='p-5 mt-5'>
                <Form className='d-flex flex-column'>
                    <FormControl
                       className="mt-3"
                       placeholder="Введите ваш email..."
                       value={email}
                       onChange={e => setEmail(e.target.value)} 
                    />
                    <FormControl
                        type='password'
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)} 
                    />
                    {isLogin ? 
                        <div style={{color: 'white'}} className='mt-3 align-self-center'>У вас нет аккаунта? <NavLink style={{textDecoration: "none"}} to={REGISTTRATION_ROUTE}>Зарегистрируйтесь!</NavLink></div>
                        :
                        <div style={{color: 'white'}} className='mt-3 align-self-center'>У вас уже есть аккаунт? <NavLink style={{textDecoration: "none"}} to={LOGIN_ROUTE}>Войдите!</NavLink></div>
                    }
                    <Button 
                        onClick={click}
                        className='mt-3 align-self-center'
                        variant="outline-light"
                        style={{ width: '340px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', background: '#5C5C5C', border: '0.5px solid #FFF', borderRadius: '7px' }} 
                        type="submit">
                            {isLogin ? 'Войти' : 'Регистрация'}
                    </Button>
                </Form>
            </Card>
        </div>    
        </Container>
    );
});

export default Auth;
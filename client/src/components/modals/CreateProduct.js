import React, { useContext, useEffect, useState } from 'react';
import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap';
import { Context } from '../..';
import { createProduct, fetchBrands, fetchProducts, fetchTypes } from '../../http/productAPI';
import { observer } from 'mobx-react-lite';


const CreateProduct = observer(({show, onHide}) => {
    const {product} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data)) 
        fetchBrands().then(data => product.setBrands(data)) 
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addProduct = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', product.selectedBrand.id)
        formData.append('typeId', product.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createProduct(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle style={{backgroundColor: '#5c5c5c', border: 0, width: 200}}>{product.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {product.types.map(type =>
                                <Dropdown.Item 
                                    onClick={() => product.setSelectedType(type)} 
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>    
                            )}                          
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle style={{backgroundColor: '#5c5c5c', border: 0, width: 200}}>{product.selectedBrand.name || "Выберите бренд"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {product.brands.map(brand =>
                                <Dropdown.Item 
                                    onClick={() => product.setSelectedBrand(brand)} 
                                    key={brand.id}
                                >
                                    {brand.name}
                                </Dropdown.Item>    
                            )}                          
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название товара"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите стоимость товара товара"
                        type='number'
                    />
                    <Form.Control
                        className="mt-3"
                        type='file' 
                        onChange={selectFile}         
                    />
                    <hr/>
                    <Button 
                        onClick={addInfo}
                        id='newPropertiesBtn' 
                        variant="outline-light" 
                        style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', border: '0.5px solid #FFF', borderRadius: '7px' }}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row className='mt-4' key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder='Введите название свойства'
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder='Введите описание свойства'
                                />
                            </Col>
                            <Col md={4}>
                                <Button 
                                    onClick={() => removeInfo(i.number)}
                                    id='newPropertiesBtn' 
                                    variant="outline-light" 
                                    style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', border: '0.5px solid #FFF', borderRadius: '7px' }}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button id='modalAddBtn' variant="outline-light" style={{ width: '100px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', border: '0.5px solid #FFF', borderRadius: '7px' }} onClick={addProduct}>Добавить</Button>
                <Button id='closeModalBtn' variant="outline-light" style={{ width: '100px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', border: '0.5px solid #FFF', borderRadius: '7px' }} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    ); 
});

export default CreateProduct;
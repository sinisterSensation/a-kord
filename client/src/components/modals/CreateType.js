import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createType } from '../../http/productAPI';

const CreateType = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addType = () => {
        createType({name: value}).then(data => {
            setValue('')
            onHide()
        })
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
                Добавить новый тип
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder='Введите название типа'
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button id='modalAddBtn' variant="outline-light" style={{ width: '100px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', border: '0.5px solid #FFF', borderRadius: '7px' }} onClick={addType}>Добавить</Button>
            <Button id='closeModalBtn' variant="outline-light" style={{ width: '100px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', border: '0.5px solid #FFF', borderRadius: '7px' }} onClick={onHide}>Закрыть</Button>
        </Modal.Footer>
    </Modal>
    );
};

export default CreateType;
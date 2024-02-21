import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { ListGroup } from 'react-bootstrap';

const TypeBar = observer(() => {
    const {product} = useContext(Context)
    return (
        <>
        <h3 className='d-flex justify-content-center'>Товары</h3>
        <ListGroup className='mt-2'>
           {product.types.map(type =>
                <ListGroup.Item 
                    style={{cursor: 'pointer', background: '#323338', color: "white", fontSize: 16}}
                    active={type.id === product.selectedType.id}
                    onClick={() => product.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
        </>
    );
});

export default TypeBar;
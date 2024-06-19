import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { ListGroup, Button } from "react-bootstrap";

const TypeBar = observer(() => {
	const { product } = useContext(Context);

	const clearFilters = () => {
		product.setSelectedType({});
	};

	return (
		<>
			<h3 className="d-flex justify-content-center">Товары</h3>
			<ListGroup className="mt-2">
				{product.types.map((type) => (
					<ListGroup.Item
						style={{ cursor: "pointer", background: "#323338", color: "white", fontSize: 16 }}
						active={type.id === product.selectedType.id}
						onClick={() => product.setSelectedType(type)}
						key={type.id}
					>
						{type.name}
					</ListGroup.Item>
				))}
			</ListGroup>
			<Button variant="outline-light" className="clearTypes mt-2" onClick={clearFilters}>
				Очистить фильтры
			</Button>
		</>
	);
});

export default TypeBar;

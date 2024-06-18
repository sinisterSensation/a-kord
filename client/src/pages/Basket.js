import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "..";
import { Card, Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const Basket = observer(() => {
	const { product } = useContext(Context);

	const [cartItems, setCartItem] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);

	const removeItem = (id) => {
		const updatedCartItems = cartItems.filter((item) => item.id !== id);
		localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
		setCartItem(updatedCartItems);
	};

	let prices = 0;
	cartItems.forEach((item) => {
		prices += item.price;
	});

	return (
		<Container
		  className="d-flex flex-sm-column justify-content-center align-items-center mt-5 mb-5"
		  style={{ height: 600 }}
		>
		  <h1 className="pb-2">Корзина</h1>
		  {cartItems.map((item) => (
			<Card key={item.id} className="d-flex flex-row  p-2 justify-content-between align-items-center mb-2 mt-5">
			  <h1 className="pr-2">{item.name}</h1>
			  <h3 className="pl-2">
				{item.price}
				<span className="font-weight-light pl-2">рублей</span>
			  </h3>
			  <button onClick={() => removeItem(item.id)}>Удалить</button>
			</Card>
		  ))}
		  <Card className="d-flex flex-row  p-2 justify-content-between align-items-center mb-2 mt-5">
			<h1 className="pr-2">Итого:</h1>
			<h3 className="pl-2">
				{prices}
				<span className="font-weight-light pl-2">рублей</span>
			</h3>
		  </Card>
		</Container>
	);
});

export default Basket;


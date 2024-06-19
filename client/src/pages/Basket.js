import React, { useState } from "react";
import { Button, Card, Container, Image } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const Basket = observer(() => {
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
			style={{ height: window.innerHeight - 280, overflowY: "auto", overflowX: "hidden" }}
		>
			<h1 className="pb-2">Корзина</h1>
			{cartItems.length === 0 ? (
				<h3>пуста</h3>
			) : (
				<>
					<div style={{ maxHeight: "500px", overflowY: "auto" }}>
						{cartItems.map((item) => (
							<Card
								key={item.id}
								style={{ background: "#323338", borderRadius: "7px", color: "white", width: "55rem" }}
								className="mt-5 d-flex justify-content-around align-items-center flex-row p-4"
							>
								<Image
									src={process.env.REACT_APP_API_URL + item.img}
									width={150}
									height={150}
									style={{ borderRadius: 5 }}
								/>
								<div className="pr-2" style={{ fontSize: "20px" }}>
									{item.name}
								</div>
								<div className="pl-2" style={{ fontSize: "20px" }}>
									{item.price}
									<span className="font-weight-light pl-2"> ₽</span>
								</div>
								<Button
									variant="outline-light"
									style={{
										width: "100px",
										boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
										background: "#5C5C5C",
										border: "0.5px solid #FFF",
										borderRadius: "7px",
									}}
									onClick={() => removeItem(item.id)}
								>
									Удалить
								</Button>
							</Card>
						))}
					</div>
					<Card
						className="d-flex flex-row  p-1 justify-content-between align-items-center mb-2 mt-5"
						style={{ color: "white", backgroundColor: "#323338" }}
					>
						<h1 className="pr-2 m-2">Итого:</h1>
						<h3 className="pl-2 m-2">
							{prices}
							<span className="font-weight-light pl-2 m-1"> ₽</span>
						</h3>
					</Card>
				</>
			)}
		</Container>
	);
});

export default Basket;


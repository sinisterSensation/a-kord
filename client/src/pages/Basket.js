import React from "react";
import { useContext } from "react";
import { Context } from "..";
import { Card, Col, Container, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const Basket = observer(() => {
	const { product } = useContext(Context);

	let prices = 0;
	return (
		<Container
			className="d-flex flex-sm-column justify-content-center align-items-center mt-5 mb-5"
			style={{ height: 600 }}
		>
			<h1 className="pb-2">Корзина</h1>
			<Card className="d-flex flex-row  p-2 justify-content-between align-items-center mb-2 mt-5">
				<h1 className="pr-2">Итого:</h1>
				<h3 className="pl-2">
					{prices}
					<span className="font-weight-light pl-2">рублей</span>
				</h3>
			</Card>
			<Card className="d-flex w-100 p-2 justify-content-center mb-2 mt-5">
				<Row className="d-flex w-100">
					<Col>
						<div className="d-flex flex-row align-items-center">
							{/* <img width={50} /> */}
							<h1 className="pl-3"></h1>
						</div>
					</Col>
					<Col>
						<div className="d-flex h-100 flex-row justify-content-end align-items-center">
							<h2 className="font-weight-light"> рублей</h2>
						</div>
					</Col>
				</Row>
			</Card>
		</Container>
	);
});

export default Basket;

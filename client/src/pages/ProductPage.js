import React, { useEffect, useState } from "react";
import { Container, Image, Col, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { fetchOneProduct } from "../http/productAPI";
import { PRODUCTS_ROUTE } from "../utils/consts";

const ProductPage = () => {
	const [product, setProduct] = useState({ info: [] });
	const { id } = useParams();
	const navigation = useNavigate();

	useEffect(() => {
		fetchOneProduct(id).then((data) => setProduct(data));
	});

	const addToCart = () => {
		let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
		cartItems.push(product);
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	};

	return (
		<>
			<h2 id="cardName">Карточка товара</h2>
			<Container id="productCard" className="mt-5 ">
				<Col md={3}>
					<Image
						src={process.env.REACT_APP_API_URL + product.img}
						width={310}
						height={310}
						style={{ borderRadius: 5 }}
					/>
				</Col>
				<Col md={5}>
					<div className="d-flex flex-column justify-content-center" style={{ gap: 10 }}>
						<div className="mt-1">Описание:</div>
						<div>Модель: {product.name}</div>
						<div>Характеристики:</div>
						{product.info.map((info, index) => (
							<div key={info.id}>
								{info.title}: {info.description}
							</div>
						))}
						<div className="mt-1">Цена: {product.price + " ₽"}</div>
						<div>4 шт. - {product.price * 4 + " ₽"}</div>
						<Button
							id="productPagebtn"
							className="mt-4 align-self-center btn"
							variant="outline-light"
							style={{ background: "#5C5C5C" }}
							type="submit"
							onClickCapture={addToCart}
							onClick={() => navigation(PRODUCTS_ROUTE)}
						>
							Добавить в корзину
						</Button>
					</div>
				</Col>
			</Container>
		</>
	);
};

export default ProductPage;

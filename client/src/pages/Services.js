import React, { useState } from "react";
import { Card, Container, Image } from "react-bootstrap";
import balance from "../img/balance.jpg";
import fix from "../img/fix.jpg";
import air from "../img/air.jpg";
import swapping from "../img/swapping.jpg";

const Services = () => {
	const [price1, setPrice1] = useState(0);
	const [price2, setPrice2] = useState(0);
	const [price3, setPrice3] = useState(0);
	const [price4, setPrice4] = useState(0);

	const handleChange1 = (e, basePrice) => {
		let value = parseInt(e.target.value);
		if (value < 0) {
			value = 0;
		} else if (value > 9) {
			value = 9;
		}
		setPrice1(value * basePrice);
	};

	const handleChange2 = (e, basePrice) => {
		let value = parseInt(e.target.value);
		if (value < 0) {
			value = 0;
		} else if (value > 9) {
			value = 9;
		}
		setPrice2(value * basePrice);
	};

	const handleChange3 = (e, basePrice) => {
		let value = parseInt(e.target.value);
		if (value < 0) {
			value = 0;
		} else if (value > 9) {
			value = 9;
		}
		setPrice3(value * basePrice);
	};

	const handleChange4 = (e, basePrice) => {
		let value = parseInt(e.target.value);
		if (value < 0) {
			value = 0;
		} else if (value > 9) {
			value = 9;
		}
		setPrice4(value * basePrice);
	};

	return (
		<Container
			className="mt-3 mb-3"
			style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}
		>
			<div>
				<Card style={{ width: 300, borderRadius: 5 }} id="goodsCard" className="d-flex align-items-center p-3">
					<Image
						className="servicesImages"
						src={balance}
						width={250}
						height={200}
						style={{ borderRadius: 5 }}
					/>
					<div className="d-flex align-items-center flex-column mt-3">
						<div>Балансировка</div>
						<input
							className="mt-3"
							type="number"
							min="0"
							max="9"
							onChange={(e) => handleChange1(e, 90)}
							style={{ cursor: "pointer", borderRadius: 7, border: 0, outline: 0, textAlign: "center" }}
						/>
						<div className="mt-3">Цена: {price1} ₽</div>
					</div>
				</Card>
				<Card
					style={{ width: 300, borderRadius: 5 }}
					id="goodsCard"
					className="d-flex align-items-center p-3 mt-5"
				>
					<Image
						className="servicesImages"
						src={swapping}
						width={250}
						height={200}
						style={{ borderRadius: 5 }}
					/>
					<div className="d-flex align-items-center flex-column mt-3">
						<div>Замена резины</div>
						<input
							className="mt-3"
							type="number"
							min="0"
							max="9"
							onChange={(e) => handleChange2(e, 105)}
							style={{ cursor: "pointer", borderRadius: 7, border: 0, outline: 0, textAlign: "center" }}
						/>
						<div className="mt-3">Цена: {price2} ₽</div>
					</div>
				</Card>
			</div>
			<div>
				<Card style={{ width: 300, borderRadius: 5 }} id="goodsCard" className="d-flex align-items-center p-3">
					<Image className="servicesImages" src={fix} width={250} height={200} style={{ borderRadius: 5 }} />
					<div className="d-flex align-items-center flex-column mt-3">
						<div>Ремонт проколов</div>
						<input
							className="mt-3"
							type="number"
							min="0"
							max="9"
							onChange={(e) => handleChange3(e, 300)}
							style={{ cursor: "pointer", borderRadius: 7, border: 0, outline: 0, textAlign: "center" }}
						/>
						<div className="mt-3">Цена: {price3} ₽</div>
					</div>
				</Card>
				<Card
					style={{ width: 300, borderRadius: 5 }}
					id="goodsCard"
					className="d-flex align-items-center p-3 mt-5"
				>
					<Image className="servicesImages" src={air} width={240} height={180} style={{ borderRadius: 5 }} />
					<div className="d-flex align-items-center flex-column mt-3">
						<div>Подкачка колёс</div>
						<input
							className="mt-3"
							type="number"
							min="0"
							max="9"
							onChange={(e) => handleChange4(e, 25)}
							style={{ cursor: "pointer", borderRadius: 7, border: 0, outline: 0, textAlign: "center" }}
						/>
						<div className="mt-3">Цена: {price4} ₽</div>
					</div>
				</Card>
			</div>
		</Container>
	);
};

export default Services;

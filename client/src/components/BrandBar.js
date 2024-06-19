import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Row, Button } from "react-bootstrap";
import { Context } from "../index";

const BrandBar = observer(() => {
	const { product } = useContext(Context);

	const clearFilters = () => {
		product.setSelectedBrand({});
	};

	return (
		<>
			<Row className="d-flex" style={{ marginLeft: 2 }}>
				{product.brands.map((brand) => (
					<Card
						style={{
							cursor: "pointer",
							width: 200,
							textAlign: "center",
							fontSize: 16,
							margin: "5px 5px 0px 0px",
						}}
						key={brand.id}
						className="p-3"
						onClick={() => product.setSelectedBrand(brand)}
						bg={brand.id === product.selectedBrand.id ? "light" : "dark"}
						text={brand.id === product.selectedBrand.id ? "dark" : "light"}
					>
						{brand.name}
					</Card>
				))}
			</Row>
			<Button variant="outline-light" className="clearBrands mt-1" onClick={clearFilters}>
				Очистить фильтры
			</Button>
		</>
	);
});

export default BrandBar;

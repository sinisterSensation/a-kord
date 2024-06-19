import React, { useContext, useState } from "react";
import { Button, Row } from "react-bootstrap";
import ProductItem from "./ProductItem";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import search from "../img/search.svg";

const ProductsList = observer(() => {
	const { product } = useContext(Context);
	const [searchTerm, setSearchTerm] = useState("");

	const filteredProducts = product.products.filter((product) => {
		return product.name.toLowerCase().includes(searchTerm.toLowerCase());
	});

	const handleSearch = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div>
			<div style={{ marginTop: "15px" }}>
				<input
					id="search-media"
					type="text"
					placeholder="Найти"
					onChange={handleSearch}
					style={{
						marginRight: "3px !important",
						borderRadius: "7px 0px 0px 7px",
						width: "56.5rem",
						height: "40px",
						background: "#5C5C5C",
						border: "transparent",
						outline: "#FFFFFF",
						boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
					}}
				/>
				<Button
					id="search-btn-media"
					variant="outline-none"
					style={{
						boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
						background: "#323338",
						borderRadius: "0px 7px 7px 0px",
						color: "white",
						height: "40px",
						marginBottom: "2px",
					}}
					type="submit"
				>
					<img style={{ width: "22px" }} src={search} alt="search-logo" />
				</Button>
			</div>
			<Row className="d-flex mt-5 mb-5">
				{filteredProducts.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
			</Row>
		</div>
	);
});

export default ProductsList;
